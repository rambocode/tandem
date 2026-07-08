/**
 * 竞品对比页（/compare/）三语文案。
 * en 为类型基准；zh/ja 与 en 结构完全对齐。
 * 竞品价格/功能信息核对日期：2026-07（来源：各产品公开定价页）。
 */

import type { Lang } from './ui';

interface CompareRow {
  feature: string;
  /** 依次为 Tandem / Paste / Pastebot / Maccy / Universal Clipboard 列。 */
  cells: [string, string, string, string, string];
}

interface VsSection {
  heading: string;
  body: string;
}

export interface CompareStrings {
  meta: { title: string; description: string };
  eyebrow: string;
  title: string;
  lead: string;
  columns: [string, string, string, string, string];
  rows: CompareRow[];
  disclaimer: string;
  vs: VsSection[];
  cta: { heading: string; lead: string; mac: string; ios: string };
}

export const compare: Record<Lang, CompareStrings> = {
  // ───────────────────────────── English ─────────────────────────────
  en: {
    meta: {
      title: 'Tandem vs Paste, Pastebot, Maccy & Universal Clipboard — compared',
      description:
        'How Tandem compares to Paste, Pastebot, Maccy and Apple Universal Clipboard: pricing, iPhone support, cloud vs LAN-only sync, history and file transfer.',
    },
    eyebrow: 'Comparison',
    title: 'How Tandem compares',
    lead: 'Every clipboard tool makes different trade-offs. Here is an honest look at where Tandem fits next to Paste, Pastebot, Maccy and Apple’s built-in Universal Clipboard.',
    columns: ['Tandem', 'Paste', 'Pastebot', 'Maccy', 'Universal Clipboard'],
    rows: [
      { feature: 'Price', cells: ['$19.99 once', '$29.99 / year', '$12.99 once', 'Free (open source)', 'Free (built-in)'] },
      { feature: 'Mac + iPhone', cells: ['yes', 'yes', 'Mac only', 'Mac only', 'yes'] },
      { feature: 'Works without any cloud', cells: ['yes', 'no', 'no', 'yes', 'no'] },
      { feature: 'Account required', cells: ['None', 'Apple ID + subscription', 'Apple ID (iCloud sync)', 'None', 'Apple ID'] },
      { feature: 'Clipboard history', cells: ['500 clips (Pro)', 'yes', 'yes', 'yes', 'no'] },
      { feature: 'File & image transfer', cells: ['LAN, E2E, up to 50 MB (Pro)', 'via iCloud', 'no', 'no', 'no'] },
      { feature: 'Full-text search', cells: ['yes', 'yes', 'yes', 'yes', 'no'] },
      { feature: 'Screenshots & image markup', cells: ['Built in, free', 'no', 'no', 'no', 'no'] },
    ],
    disclaimer:
      'Competitor pricing and features checked in July 2026 from public pricing pages. Paste also offers $3.99/month and a $89.99 lifetime option.',
    vs: [
      {
        heading: 'Tandem vs Paste',
        body: 'Paste is a polished clipboard manager with iCloud sync across Mac, iPhone and iPad — and a subscription. Tandem takes the opposite stance on both counts: your clips sync peer-to-peer over your own Wi-Fi and never touch a server, and Pro is a one-time $19.99 instead of $29.99 every year. If you want cloud sync everywhere you go, Paste is a fine choice; if you want your clipboard to stay home, that is what Tandem is built for.',
      },
      {
        heading: 'Tandem vs Pastebot & Maccy',
        body: 'Pastebot ($12.99) and Maccy (free, open source) are excellent Mac clipboard managers — but they are Mac-only. Tandem’s reason to exist is the second device: copy on your Mac, paste on your iPhone from a custom keyboard, and fling files back through the iOS share sheet.',
      },
      {
        heading: 'Tandem vs Universal Clipboard',
        body: 'Apple’s Universal Clipboard is free and built in, and when it works it is magic. But it keeps no history (each copy silently overwrites the last), cannot transfer arbitrary files, and fails often enough that "toggle Bluetooth and try again" is a ritual. Tandem is the dependable version: continuous sync, a searchable history, QR pairing, and encrypted file transfer — still with nothing leaving your network.',
      },
    ],
    cta: {
      heading: 'Try Tandem free',
      lead: 'Core sync is free forever. Pro is $19.99, once.',
      mac: 'Download for Mac',
      ios: 'Get it on iPhone',
    },
  },

  // ───────────────────────────── 简体中文 ─────────────────────────────
  zh: {
    meta: {
      title: 'Tandem 与 Paste、Pastebot、Maccy、通用剪贴板对比',
      description:
        'Tandem 与 Paste、Pastebot、Maccy 和苹果通用剪贴板的对比：价格、iPhone 支持、云同步与局域网直连、历史记录与文件传输。',
    },
    eyebrow: '横向对比',
    title: 'Tandem 和它们有什么不同',
    lead: '每个剪贴板工具都有自己的取舍。这里诚实地对比 Tandem 与 Paste、Pastebot、Maccy 以及苹果自带的通用剪贴板。',
    columns: ['Tandem', 'Paste', 'Pastebot', 'Maccy', '通用剪贴板'],
    rows: [
      { feature: '价格', cells: ['$19.99 买断', '$29.99 / 年', '$12.99 买断', '免费（开源）', '免费（系统自带）'] },
      { feature: 'Mac + iPhone 双端', cells: ['yes', 'yes', '仅 Mac', '仅 Mac', 'yes'] },
      { feature: '完全不经过云', cells: ['yes', 'no', 'no', 'yes', 'no'] },
      { feature: '是否需要账号', cells: ['不需要', 'Apple ID + 订阅', 'Apple ID（iCloud 同步）', '不需要', 'Apple ID'] },
      { feature: '剪贴板历史', cells: ['500 条（Pro）', 'yes', 'yes', 'yes', 'no'] },
      { feature: '文件与图片传输', cells: ['局域网 E2E，≤ 50 MB（Pro）', '经 iCloud', 'no', 'no', 'no'] },
      { feature: '全文搜索', cells: ['yes', 'yes', 'yes', 'yes', 'no'] },
      { feature: '截屏与图片标注', cells: ['内置，免费', 'no', 'no', 'no', 'no'] },
    ],
    disclaimer:
      '竞品价格与功能核对于 2026 年 7 月，来源为各产品公开定价页。Paste 另有 $3.99/月与 $89.99 买断档位。',
    vs: [
      {
        heading: 'Tandem vs Paste',
        body: 'Paste 是一款打磨精致的剪贴板管理器，通过 iCloud 在 Mac、iPhone、iPad 间同步——代价是订阅制，以及你的剪贴板要经过云端。Tandem 在这两点上都走了相反的路：内容在你自己的 Wi-Fi 里点对点直传，从不接触任何服务器；Pro 是 $19.99 一次买断，而不是每年 $29.99。想要随时随地云同步，Paste 很好；想让剪贴板不出家门，Tandem 就是为此而生。',
      },
      {
        heading: 'Tandem vs Pastebot 与 Maccy',
        body: 'Pastebot（$12.99）和 Maccy（免费开源）都是优秀的 Mac 剪贴板管理器——但它们只有 Mac 端。Tandem 存在的理由正是第二台设备：Mac 上复制，iPhone 上用自定义键盘直接粘贴，再从 iOS 分享菜单把文件丢回 Mac。',
      },
      {
        heading: 'Tandem vs 通用剪贴板',
        body: '苹果的通用剪贴板免费且系统自带，灵的时候确实像魔法。但它没有历史记录（复制新内容会悄悄覆盖上一条）、不能传任意文件，而且失灵的频率高到「关一下蓝牙再试」成了固定仪式。Tandem 是它的可靠版：持续同步、可搜索的历史、扫码配对、加密文件传输——并且数据依然不出你的局域网。',
      },
    ],
    cta: {
      heading: '免费试用 Tandem',
      lead: '核心同步永久免费。Pro $19.99，只付一次。',
      mac: '下载 Mac 版',
      ios: '在 iPhone 上获取',
    },
  },

  // ───────────────────────────── 日本語 ─────────────────────────────
  ja: {
    meta: {
      title: 'Tandem と Paste・Pastebot・Maccy・ユニバーサルクリップボードの比較',
      description:
        'Tandem を Paste、Pastebot、Maccy、Apple のユニバーサルクリップボードと比較：価格、iPhone 対応、クラウド同期と LAN 直結、履歴、ファイル転送。',
    },
    eyebrow: '比較',
    title: 'Tandem は何が違うのか',
    lead: 'クリップボードツールにはそれぞれのトレードオフがあります。Paste・Pastebot・Maccy・Apple 標準のユニバーサルクリップボードと Tandem を率直に比較します。',
    columns: ['Tandem', 'Paste', 'Pastebot', 'Maccy', 'ユニバーサルクリップボード'],
    rows: [
      { feature: '価格', cells: ['$19.99 買い切り', '$29.99 / 年', '$12.99 買い切り', '無料（OSS）', '無料（OS 標準）'] },
      { feature: 'Mac + iPhone 対応', cells: ['yes', 'yes', 'Mac のみ', 'Mac のみ', 'yes'] },
      { feature: 'クラウドを一切使わない', cells: ['yes', 'no', 'no', 'yes', 'no'] },
      { feature: 'アカウント要否', cells: ['不要', 'Apple ID + サブスク', 'Apple ID（iCloud 同期）', '不要', 'Apple ID'] },
      { feature: 'クリップボード履歴', cells: ['500 件（Pro）', 'yes', 'yes', 'yes', 'no'] },
      { feature: 'ファイル・画像転送', cells: ['LAN・E2E・最大 50 MB（Pro）', 'iCloud 経由', 'no', 'no', 'no'] },
      { feature: '全文検索', cells: ['yes', 'yes', 'yes', 'yes', 'no'] },
      { feature: 'スクリーンショットと画像注釈', cells: ['内蔵・無料', 'no', 'no', 'no', 'no'] },
    ],
    disclaimer:
      '競合の価格・機能は 2026 年 7 月に各公式ページで確認。Paste には $3.99/月 と $89.99 買い切りのプランもあります。',
    vs: [
      {
        heading: 'Tandem vs Paste',
        body: 'Paste は iCloud 経由で Mac・iPhone・iPad を同期する完成度の高いクリップボードマネージャーですが、サブスクリプション制で、クリップボードはクラウドを経由します。Tandem はその両方で逆の選択をしました：データは自分の Wi-Fi 内で P2P 直送され、サーバーには一切触れません。Pro は年額 $29.99 ではなく、$19.99 の買い切りです。',
      },
      {
        heading: 'Tandem vs Pastebot・Maccy',
        body: 'Pastebot（$12.99）と Maccy（無料・OSS）は優れた Mac 用クリップボードマネージャーですが、Mac 専用です。Tandem の存在理由は 2 台目のデバイス：Mac でコピーし、iPhone のカスタムキーボードでそのまま貼り付け、共有シートからファイルを Mac へ送り返せます。',
      },
      {
        heading: 'Tandem vs ユニバーサルクリップボード',
        body: 'Apple のユニバーサルクリップボードは無料で OS 標準、動くときは魔法のようです。ただし履歴がなく（新しいコピーが前のものを上書き）、任意のファイルは送れず、「Bluetooth を切って入れ直す」が儀式になる程度には不安定です。Tandem はその信頼できる版：常時同期、検索できる履歴、QR ペアリング、暗号化ファイル転送——それでもデータは LAN の外に出ません。',
      },
    ],
    cta: {
      heading: 'Tandem を無料で試す',
      lead: 'コア機能はずっと無料。Pro は $19.99 の買い切りです。',
      mac: 'Mac 版をダウンロード',
      ios: 'iPhone で入手',
    },
  },
};
