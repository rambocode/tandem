import { promises as fs } from 'node:fs';
import { extname, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import type { Loader } from 'astro/loaders';

interface HtmlHeading {
  depth: number;
  slug: string;
  text: string;
}

/** 递归读取 Blog 目录里的 HTML 文件，不跟随符号链接，避免内容目录逃逸。 */
async function listHtmlFiles(directory: string): Promise<string[]> {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) return listHtmlFiles(path);
    return entry.isFile() && extname(entry.name).toLowerCase() === '.html' ? [path] : [];
  }));
  return files.flat().sort();
}

function plainHeadingText(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function headingSlug(text: string): string {
  return text
    .toLocaleLowerCase()
    .replace(/[^\p{Letter}\p{Number}\s-]/gu, '')
    .trim()
    .replace(/[\s-]+/g, '-');
}

/**
 * HTML 文章使用受信任的仓库文件，但仍拒绝脚本、表单、内联事件和 javascript: URL，
 * 防止复制外部软文时把可执行内容一并带进官网。
 */
function assertSafeHtml(html: string, filePath: string): void {
  const blocked = [
    /<\s*(script|iframe|object|embed|form)\b/i,
    /\son[a-z]+\s*=/i,
    /(?:href|src)\s*=\s*["']?\s*javascript:/i,
  ];
  if (blocked.some((pattern) => pattern.test(html))) {
    throw new Error(`HTML Blog 文件包含不允许的可执行内容：${filePath}`);
  }
}

/** 为 HTML 标题补稳定 id，并生成与 Markdown render() 相同形状的目录数据。 */
function prepareHtml(html: string): { html: string; headings: HtmlHeading[] } {
  const headings: HtmlHeading[] = [];
  const slugCounts = new Map<string, number>();
  const rendered = html.replace(
    /<h([1-6])([^>]*)>([\s\S]*?)<\/h\1>/gi,
    (match, depthText: string, attributes: string, innerHtml: string) => {
      const text = plainHeadingText(innerHtml);
      if (!text) return match;
      const existingId = /\sid\s*=\s*["']([^"']+)["']/i.exec(attributes)?.[1];
      const baseSlug = existingId ?? (headingSlug(text) || 'section');
      const count = slugCounts.get(baseSlug) ?? 0;
      slugCounts.set(baseSlug, count + 1);
      const slug = count === 0 ? baseSlug : `${baseSlug}-${count + 1}`;
      headings.push({ depth: Number(depthText), slug, text });
      if (existingId) {
        if (count === 0) return match;
        const uniqueAttributes = attributes.replace(
          /\sid\s*=\s*["'][^"']+["']/i,
          ` id="${slug}"`,
        );
        return `<h${depthText}${uniqueAttributes}>${innerHtml}</h${depthText}>`;
      }
      return `<h${depthText}${attributes} id="${slug}">${innerHtml}</h${depthText}>`;
    },
  );
  return { html: rendered, headings };
}

function normalizedId(basePath: string, filePath: string): string {
  return relative(basePath, filePath)
    .split(sep)
    .join('/')
    .replace(/\.html$/i, '');
}

/**
 * 把带 YAML frontmatter 的 `.html` 文件装入 Astro Content Collection。
 * Markdown/MDX 继续使用 Astro 原生 glob loader，两类文章在应用层合并。
 */
export function htmlBlog(options: { base: string }): Loader {
  return {
    name: 'tandem-html-blog-loader',
    load: async (context) => {
      const rootPath = fileURLToPath(context.config.root);
      const basePath = resolve(rootPath, options.base);

      const sync = async () => {
        const files = await listHtmlFiles(basePath).catch((error: { code?: string }) => {
          if (error.code === 'ENOENT') return [];
          throw error;
        });
        context.store.clear();
        for (const filePath of files) {
          const source = await fs.readFile(filePath, 'utf8');
          const parsed = matter(source);
          assertSafeHtml(parsed.content, filePath);
          const id = normalizedId(basePath, filePath);
          const data = await context.parseData({
            id,
            data: { ...parsed.data, format: 'html' },
            filePath,
          });
          const prepared = prepareHtml(parsed.content);
          context.store.set({
            id,
            data,
            body: parsed.content,
            filePath: relative(rootPath, filePath).split(sep).join('/'),
            digest: context.generateDigest(source),
            rendered: {
              html: prepared.html,
              metadata: { headings: prepared.headings, frontmatter: parsed.data },
            },
          });
        }
      };

      await sync();
      context.watcher?.add(basePath);
      const reloadIfHtml = async (changedPath: string) => {
        const belongsToBlog = changedPath === basePath || changedPath.startsWith(`${basePath}${sep}`);
        if (belongsToBlog && extname(changedPath).toLowerCase() === '.html') {
          await sync();
          context.logger.info(`Reloaded HTML Blog content from ${relative(rootPath, changedPath)}`);
        }
      };
      context.watcher?.on('add', reloadIfHtml);
      context.watcher?.on('change', reloadIfHtml);
      context.watcher?.on('unlink', reloadIfHtml);
    },
  };
}
