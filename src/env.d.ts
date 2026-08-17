/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** 首页 GitHub 反馈区开关；Blog 始终不开放评论。 */
  readonly PUBLIC_UTTERANCES_ENABLED?: string;
  /** Google Analytics 4 Measurement ID，例如 G-XXXXXXXXXX。 */
  readonly PUBLIC_GOOGLE_ANALYTICS_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
