import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { blogStrings } from '../i18n/blog';
import type { Lang } from '../i18n/ui';
import { blogPostPath, getAllBlogPosts, publishedPosts } from './blog';

/** 生成指定语言的独立订阅源，避免一个 RSS 中混合三种语言。 */
export async function createBlogRss(context: APIContext, lang: Lang) {
  const t = blogStrings[lang];
  const posts = publishedPosts(await getAllBlogPosts(), lang);
  return rss({
    title: t.metaTitle,
    description: t.metaDescription,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: blogPostPath(post),
    })),
    customData: `<language>${lang === 'zh' ? 'zh-CN' : lang === 'ja' ? 'ja-JP' : 'en-US'}</language>`,
  });
}
