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
  // macOS 安装包下载（GitHub Releases）
  macDownload: 'https://github.com/rambocode/tandem/releases',
  // iOS App Store 链接，TODO 上架后填
  appStore: '#appstore',
} as const;

export const REQUIREMENTS = {
  macos: 'macOS 14 (Sonoma)+',
  ios: 'iOS 16.0+',
} as const;
