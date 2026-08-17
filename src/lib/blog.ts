import { getCollection, type CollectionEntry } from 'astro:content';
import { localizePath } from '../i18n/utils';
import type { Lang } from '../i18n/ui';

export type BlogPost = CollectionEntry<'blog'> | CollectionEntry<'blogHtml'>;

/** 合并 Markdown/MDX 与 HTML 两个底层 collection，页面和 SEO 管线无需关心文件格式。 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const [markdownPosts, htmlPosts] = await Promise.all([
    getCollection('blog'),
    getCollection('blogHtml'),
  ]);
  const posts: BlogPost[] = [...markdownPosts, ...htmlPosts];
  const routes = new Set<string>();
  for (const post of posts) {
    const routeKey = `${post.data.lang}:${post.data.permalink}`;
    if (routes.has(routeKey)) {
      throw new Error(`Blog 路由重复：${routeKey}。同一种语言的 permalink 必须唯一。`);
    }
    routes.add(routeKey);
  }
  return posts;
}

/** 只向公开页面暴露当前语言、非草稿文章，并始终以最新文章优先。 */
export function publishedPosts(posts: BlogPost[], lang: Lang): BlogPost[] {
  return posts
    .filter((post) => post.data.lang === lang && !post.data.draft)
    .sort((left, right) => right.data.publishedAt.getTime() - left.data.publishedAt.getTime());
}

/** 统一生成文章路径，供页面、RSS、站点地图和相关推荐复用。 */
export function blogPostPath(post: BlogPost): string {
  return localizePath(`/blog/${post.data.permalink}/`, post.data.lang);
}

export function blogIndexPath(lang: Lang): string {
  return localizePath('/blog/', lang);
}

export function rssPath(lang: Lang): string {
  return localizePath('/rss.xml', lang);
}

export function formatPostDate(date: Date, lang: Lang): string {
  const locale: Record<Lang, string> = { en: 'en-US', zh: 'zh-CN', ja: 'ja-JP' };
  return new Intl.DateTimeFormat(locale[lang], {
    year: 'numeric',
    month: lang === 'en' ? 'short' : 'long',
    day: 'numeric',
  }).format(date);
}
