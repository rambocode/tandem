import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { htmlBlog } from './loaders/html-blog';

/**
 * Blog 是官网的长期内容资产。schema 在构建期阻止缺少标题、摘要、语言或发布时间的文章上线，
 * 避免编辑疏漏破坏列表页、RSS、站点地图和结构化数据。
 */
const blogSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  lang: z.enum(['en', 'zh', 'ja']),
  permalink: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  category: z.string().min(1),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  readingMinutes: z.number().int().positive(),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  author: z.string().min(1).default('Tandem Team'),
  format: z.enum(['markdown', 'html']).default('markdown'),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/blog' }),
  schema: blogSchema,
});

const blogHtml = defineCollection({
  loader: htmlBlog({ base: './src/data/blog' }),
  schema: blogSchema,
});

export const collections = { blog, blogHtml };
