import type { APIRoute } from 'astro';
import { SITE } from '../config';
import { blogPostPath, getAllBlogPosts } from '../lib/blog';

const staticPaths = [
  '/', '/zh/', '/ja/',
  '/blog/', '/zh/blog/', '/ja/blog/',
  '/compare/', '/zh/compare/', '/ja/compare/',
  '/changelog/', '/zh/changelog/', '/ja/changelog/',
  '/privacy/', '/zh/privacy/', '/ja/privacy/',
  '/terms/', '/zh/terms/', '/ja/terms/',
];

/**
 * sitemap 由真实路由与已发布文章动态生成。新增文章无需手改 public 文件，草稿也不会泄露。
 */
export const GET: APIRoute = async () => {
  const posts = (await getAllBlogPosts()).filter(({ data }) => !data.draft);
  const paths = [...staticPaths, ...posts.map(blogPostPath)];
  const urls = [...new Set(paths)].map((path) => {
    const loc = new URL(path, SITE.domain).href;
    return `  <url><loc>${loc}</loc></url>`;
  });
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
