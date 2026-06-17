/**
 * 站点级常量 / 占位项集中管理。
 * 待用户提供真实值后，只需改这一处。
 */
export const SITE = {
  name: 'Tandem',
  domain: 'https://rambocode.github.io', // GitHub Pages origin；站点实际位于 /tandem 子路径（见 astro.config base）
  versionLine: 'Tandem 1.0',
} as const;

export const LINKS = {
  // macOS 安装包下载（GitHub Releases / dmg 直链），TODO 待定
  macDownload: '#download',
  // iOS App Store 链接，TODO 上架后填
  appStore: '#appstore',
  // Lemon Squeezy 结账地址，与客户端 LicenseManager.checkoutURL 保持一致
  checkout: 'https://tandem-app.lemonsqueezy.com/buy/4a9940ae-5080-4baa-8a62-8d0d9adb18b2',
} as const;

/**
 * 定价：当前对应 Lemon Squeezy test-mode draft 产品，发布前可调整。
 * 每种货币展示文本，price 为主显示，note 为补充说明键（见 i18n）。
 */
export const PRICING = {
  amount: 'CN¥49',
  currency: 'CNY',
} as const;

export const REQUIREMENTS = {
  macos: 'macOS 14 (Sonoma)+',
  ios: 'iOS 16.0+',
} as const;
