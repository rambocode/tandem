// @ts-check
import { defineConfig } from 'astro/config';

// Tandem 官网落地页：纯静态、三语（en 默认在根路径，zh/ja 带前缀）
// 部署到 GitHub Pages 项目站点：https://rambocode.github.io/tandem/
export default defineConfig({
  site: 'https://rambocode.github.io',
  base: '/tandem',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ja'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
