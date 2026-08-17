import type { APIRoute } from 'astro';
import { createBlogRss } from '../../lib/rss';

export const GET: APIRoute = (context) => createBlogRss(context, 'zh');
