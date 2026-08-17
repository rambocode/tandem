import type { Lang } from './ui';

interface BlogStrings {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  lead: string;
  rss: string;
  featured: string;
  latest: string;
  all: string;
  readArticle: string;
  minuteRead: (minutes: number) => string;
  breadcrumb: string;
  contents: string;
  continueReading: string;
  discussion: {
    title: string;
    description: string;
    pending: string;
    fallback: string;
  };
  feedback: {
    eyebrow: string;
    title: string;
    lead: string;
    appStore: string;
  };
}

/** Blog 文案与首页宣传字典分开，便于编辑内容时不触碰产品能力口径。 */
export const blogStrings: Record<Lang, BlogStrings> = {
  en: {
    metaTitle: 'Tandem Blog — Better cross-device workflows',
    metaDescription: 'Practical guides for clipboard, screenshots, capture and private Mac-to-iPhone workflows.',
    eyebrow: 'Tandem Blog',
    heading: 'Make cross-device workflows\neasier to understand.',
    lead: 'Practical notes on screenshots, clipboard history, recording and local-first handoff — plus product decisions and updates.',
    rss: 'Subscribe via RSS',
    featured: 'Featured workflow',
    latest: 'Latest articles',
    all: 'All',
    readArticle: 'Read article',
    minuteRead: (minutes) => `${minutes} min read`,
    breadcrumb: 'Blog',
    contents: 'In this article',
    continueReading: 'Continue reading',
    discussion: {
      title: 'User feedback',
      description: 'Sign in with GitHub to comment. Comments are public and stored in Tandem GitHub Issues.',
      pending: 'Comments are ready in the site, and will open after the GitHub commenting app is authorized.',
      fallback: 'View Tandem on GitHub',
    },
    feedback: {
      eyebrow: 'Built with users',
      title: 'Share the Tandem workflow you use most.',
      lead: 'Tell us what already feels smooth and where the Mac-to-iPhone handoff should improve. Real feedback becomes the product roadmap — never fabricated testimonials.',
      appStore: 'Review Tandem on the App Store',
    },
  },
  zh: {
    metaTitle: 'Tandem 博客 — 更顺手的跨设备工作流',
    metaDescription: '分享剪贴板、截图、录屏与 Mac 到 iPhone 私密接力的实用指南。',
    eyebrow: 'Tandem 博客',
    heading: '把跨设备工作流，\n讲得更清楚。',
    lead: '分享截图、剪贴板、录屏与本地优先工作流，也记录产品设计与更新。',
    rss: '订阅 RSS',
    featured: '精选工作流',
    latest: '最新文章',
    all: '全部',
    readArticle: '阅读文章',
    minuteRead: (minutes) => `阅读 ${minutes} 分钟`,
    breadcrumb: '博客',
    contents: '本文内容',
    continueReading: '继续阅读',
    discussion: {
      title: '用户反馈',
      description: '使用 GitHub 登录后发表评论。评论公开保存在 Tandem GitHub Issues 中。',
      pending: '评论功能已接入网站，完成 GitHub 评论应用授权后即可开放。',
      fallback: '前往 Tandem GitHub',
    },
    feedback: {
      eyebrow: '和用户一起打磨',
      title: '把你的 Tandem 工作流，留在这里。',
      lead: '分享你最常用的跨设备场景，也告诉我们哪里还应该更顺手。这里展示真实反馈，不用虚构好评填满版面。',
      appStore: '在 App Store 评价 Tandem',
    },
  },
  ja: {
    metaTitle: 'Tandem ブログ — もっと自然なデバイス間ワークフロー',
    metaDescription: 'クリップボード、キャプチャ、録画、Mac から iPhone へのプライベートな引き継ぎを解説します。',
    eyebrow: 'Tandem ブログ',
    heading: 'デバイスをまたぐ作業を、\nもっと分かりやすく。',
    lead: 'キャプチャ、クリップボード履歴、録画、ローカル優先の引き継ぎを、実用的な記事で紹介します。',
    rss: 'RSS を購読',
    featured: '注目のワークフロー',
    latest: '最新の記事',
    all: 'すべて',
    readArticle: '記事を読む',
    minuteRead: (minutes) => `${minutes} 分で読めます`,
    breadcrumb: 'ブログ',
    contents: 'この記事の内容',
    continueReading: '次の記事',
    discussion: {
      title: 'ユーザーフィードバック',
      description: 'GitHub でログインしてコメントできます。コメントは Tandem GitHub Issues に公開保存されます。',
      pending: 'コメント機能は実装済みです。GitHub のコメントアプリを承認すると公開されます。',
      fallback: 'Tandem GitHub を見る',
    },
    feedback: {
      eyebrow: 'ユーザーと一緒に改善',
      title: 'あなたの Tandem ワークフローを教えてください。',
      lead: 'よく使う場面や、さらに自然にしたい引き継ぎを共有してください。架空の評価ではなく、実際の声を製品に反映します。',
      appStore: 'App Store で Tandem を評価',
    },
  },
};
