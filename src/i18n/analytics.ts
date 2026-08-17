import type { Lang } from './ui';

export interface AnalyticsStrings {
  title: string;
  description: string;
  privacyLink: string;
  accept: string;
  reject: string;
  settings: string;
}

/**
 * 官网统计授权文案。
 *
 * 统计授权属于网站能力，与 Tandem App 的本地优先数据边界分开维护，避免把
 * “App 不含统计 SDK”和“官网经同意后使用 Google Analytics”混成同一口径。
 */
export const analytics: Record<Lang, AnalyticsStrings> = {
  en: {
    title: 'Help us improve the website',
    description:
      'With your permission, Tandem uses Google Analytics to understand aggregate page visits and download actions. It never receives clipboard or file content.',
    privacyLink: 'Privacy details',
    accept: 'Allow analytics',
    reject: 'Not now',
    settings: 'Analytics settings',
  },
  zh: {
    title: '帮助我们改进官网',
    description:
      '经你同意后，Tandem 会使用 Google Analytics 了解汇总页面访问和下载操作，不会接触剪贴板或文件内容。',
    privacyLink: '查看隐私说明',
    accept: '允许统计',
    reject: '暂不允许',
    settings: '统计设置',
  },
  ja: {
    title: 'ウェブサイトの改善にご協力ください',
    description:
      '同意いただいた場合のみ、Tandem は Google Analytics で集計されたページ閲覧とダウンロード操作を把握します。クリップボードやファイルの内容は取得しません。',
    privacyLink: 'プライバシーの詳細',
    accept: '解析を許可',
    reject: '許可しない',
    settings: '解析設定',
  },
};
