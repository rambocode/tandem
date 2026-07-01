// @ts-check
import { defineConfig } from 'astro/config';

// Tandem 官网落地页：纯静态、三语（en 默认在根路径，zh/ja 带前缀）
// 部署到自定义域名（Custom Domain）：https://tandem-clip.com/（见 public/CNAME）
export default defineConfig({
  site: 'https://tandem-clip.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ja'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
