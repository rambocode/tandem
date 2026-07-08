/**
 * 站点级常量 / 占位项集中管理。
 * 待用户提供真实值后，只需改这一处。
 */
export const SITE = {
  name: 'Tandem',
  domain: 'https://tandem-clip.com', // 自定义域名（Custom Domain）；站点位于根路径（见 public/CNAME）
  // 当前 macOS 客户端最新版本号，与 changelog.ts 最新条目的 version 保持一致；
  // 每次发布新版本时同步更新（见 .claude/skills/release-web/SKILL.md）。
  versionLine: 'Tandem 0.1.8',
} as const;

export const LINKS = {
  // macOS 安装包下载（GitHub Releases）
  macDownload: 'https://github.com/rambocode/tandem/releases',
  // iOS App Store 链接
  appStore: 'https://apps.apple.com/cn/app/tandem-clip/id6781219533',
} as const;

export const REQUIREMENTS = {
  macos: 'macOS 14 (Sonoma)+',
  ios: 'iOS 16.0+',
} as const;
