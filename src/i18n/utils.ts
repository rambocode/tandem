import { ui, defaultLang, type Lang } from './ui';

/** 从 URL 路径前缀解析语言；无前缀视为默认语言（en）。 */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg in ui) return seg as Lang;
  return defaultLang;
}

/** 返回该语言的整套文案对象。 */
export function useTranslations(lang: Lang) {
  return ui[lang];
}

// 站点部署的 base 路径（GitHub Pages 子路径，如 '/tandem/'）。无尾斜杠形式便于拼接。
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/**
 * 生成本地化的站内路径，并自动带上部署 base 前缀。
 * 默认语言（en）不加语言前缀；zh/ja 加 `/zh`、`/ja` 前缀。
 * 用法（base=/tandem）：localizePath('/', 'zh') => '/tandem/zh/'；localizePath('/', 'en') => '/tandem/'。
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const localized = lang === defaultLang ? clean : `/${lang}${clean === '/' ? '/' : clean}`;
  return `${BASE}${localized}` || '/';
}
