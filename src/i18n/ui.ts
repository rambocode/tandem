/**
 * 三语文案字典（en / zh / ja）。
 * 大量文案直接取自 App i18n（slogan、Pro 功能描述、信任点等），保持口径一致。
 * en 为类型基准；zh/ja 必须与 en 结构完全对齐。
 */

export const languages = {
  en: 'English',
  zh: '简体中文',
  ja: '日本語',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

interface Feature {
  title: string;
  desc: string;
}
interface ProRow {
  feature: string;
  free: string;
  pro: string;
}
interface Faq {
  q: string;
  a: string;
}

export interface Strings {
  meta: { title: string; description: string };
  nav: { features: string; pro: string; faq: string; download: string };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaMac: string;
    ctaIos: string;
    note: string;
  };
  mockup: {
    macTitle: string;
    macSync: string;
    phoneReceived: string;
    clipText: string;
    clipLink: string;
    clipCode: string;
  };
  pills: { lan: string; noCloud: string; oneTime: string };
  features: { heading: string; lead: string; items: Feature[] };
  pro: {
    badge: string;
    heading: string;
    lead: string;
    free: string;
    proLabel: string;
    rows: ProRow[];
    yes: string;
    no: string;
  };
  security: { heading: string; lead: string; points: Feature[] };
  faq: { heading: string; items: Faq[] };
  footer: { tagline: string; rights: string; product: string; links: string[]; privacy: string; terms: string };
}

export const ui: Record<Lang, Strings> = {
  // ───────────────────────────── English ─────────────────────────────
  en: {
    meta: {
      title: 'Tandem — LAN clipboard & file transfer for Mac and iPhone',
      description:
        'Automatic on Mac, instant on iPhone. Sync your clipboard and files over the local network — end-to-end encrypted, no account, no cloud.',
    },
    nav: { features: 'Features', pro: 'Pro', faq: 'FAQ', download: 'Download' },
    hero: {
      badge: 'LAN clipboard · No account, no cloud',
      title: 'Automatic on Mac,\ninstant on iPhone.',
      subtitle:
        'Tandem keeps the clipboard on your Mac and iPhone in sync over the local network — and lets you fling files across in a tap. End-to-end encrypted. No account, no cloud.',
      ctaMac: 'Download for Mac',
      ctaIos: 'Get it on iPhone',
      note: 'macOS 14 (Sonoma)+ · iOS 16+ · Local network required',
    },
    mockup: {
      macTitle: 'Tandem',
      macSync: 'Syncing…',
      phoneReceived: 'Received from Mac',
      clipText: 'Meeting moved to 3 PM tomorrow',
      clipLink: 'https://github.com/rambocode/tandem/releases',
      clipCode: 'npm run build',
    },
    pills: {
      lan: 'LAN only · End-to-end encrypted',
      noCloud: 'No account, no cloud',
      oneTime: 'Local-first · Private by design',
    },
    features: {
      heading: 'Everything just stays in sync',
      lead: 'Copy on one device, paste on the other. No setup rituals, no sign-in — Tandem discovers your devices on the same Wi-Fi and keeps them in lockstep.',
      items: [
        { title: 'Real-time two-way sync', desc: 'Mac pushes automatically; your iPhone receives in a tap. Text, links, code and colors all carry across.' },
        { title: 'Pair with a QR code', desc: 'Point your iPhone at the code shown on your Mac, or type a 6-digit code. Paired in seconds.' },
        { title: 'Share Extension', desc: 'Send anything to your Mac straight from the iOS share sheet — no app switching.' },
        { title: 'Custom keyboard', desc: 'Drop Mac clipboard content into any text field on iPhone, right from the keyboard.' },
        { title: 'Lives in the menu bar', desc: 'A quiet menu-bar companion on Mac with a global hotkey — no Accessibility permission required.' },
        { title: 'Dark mode & your language', desc: 'Follows the system appearance and language. English, 简体中文 and 日本語 built in.' },
      ],
    },
    pro: {
      badge: 'Tandem Pro',
      heading: 'Unlock more room for serious workflows',
      lead: 'Tandem Pro on Mac adds files, deeper history and search for people who move more between devices.',
      free: 'Core',
      proLabel: 'Pro',
      rows: [
        { feature: 'Clipboard sync (text, link, code, color)', free: 'yes', pro: 'yes' },
        { feature: 'QR / 6-digit pairing', free: 'yes', pro: 'yes' },
        { feature: 'Share Extension & custom keyboard', free: 'yes', pro: 'yes' },
        { feature: 'File & image transfer (E2E, up to 50 MB)', free: 'no', pro: 'yes' },
        { feature: 'Clipboard history', free: '20 clips', pro: '500 clips' },
        { feature: 'Full-text search & smart filters', free: 'no', pro: 'yes' },
      ],
      yes: 'Included',
      no: '—',
    },
    security: {
      heading: 'Private by design',
      lead: 'Your clips never leave the local network. There is no server in the middle, because there is no server at all.',
      points: [
        { title: 'LAN only', desc: 'Devices talk directly over your Wi-Fi via Bonjour discovery. Nothing routes through the internet.' },
        { title: 'End-to-end encrypted', desc: 'Every transfer is encrypted between your own devices. We never see your content.' },
        { title: 'No account, no cloud', desc: 'No sign-up, no tracking, no cloud storage. History stays encrypted on your device.' },
      ],
    },
    faq: {
      heading: 'Questions, answered',
      items: [
        { q: 'Do my devices need to be on the same Wi-Fi?', a: 'Yes. Tandem syncs over the local network only, so your Mac and iPhone should be on the same Wi-Fi (or the same LAN). Nothing goes through the cloud.' },
        { q: 'Do I need an account?', a: 'No. There is no sign-up and no cloud. You pair your devices once with a QR or 6-digit code and you are done.' },
        { q: 'What can I sync?', a: 'Text, links, code snippets and colors in Core. Tandem Pro adds files and images up to 50 MB, all end-to-end encrypted.' },
        { q: 'What does the iPhone app send to Tandem?', a: 'Nothing to us. iPhone data moves only between your paired devices over the local network.' },
        { q: 'What are the system requirements?', a: 'macOS 14 (Sonoma) or later on the Mac, and iOS 16 or later on iPhone.' },
      ],
    },
    footer: {
      tagline: 'LAN clipboard · No account, no cloud',
      rights: 'All rights reserved.',
      product: 'Product',
      links: ['Features', 'Pro', 'FAQ'],
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },

  // ───────────────────────────── 简体中文 ─────────────────────────────
  zh: {
    meta: {
      title: 'Tandem — Mac 与 iPhone 的局域网剪贴板与文件传输',
      description:
        'Mac 自动同步，iPhone 一触即达。在局域网内同步剪贴板与文件，端到端加密，无账号、无云端。',
    },
    nav: { features: '功能', pro: 'Pro', faq: '常见问题', download: '下载' },
    hero: {
      badge: '局域网剪贴板 · 无账号，无云端',
      title: 'Mac 自动同步，\niPhone 一触即达。',
      subtitle:
        'Tandem 在局域网内让 Mac 与 iPhone 的剪贴板保持同步，还能一键互传文件。端到端加密，无账号，无云端。',
      ctaMac: '下载 Mac 版',
      ctaIos: '在 iPhone 上获取',
      note: 'macOS 14 (Sonoma)+ · iOS 16+ · 需要局域网',
    },
    mockup: {
      macTitle: 'Tandem',
      macSync: '同步中…',
      phoneReceived: '来自 Mac',
      clipText: '明天下午 3 点开会',
      clipLink: 'https://github.com/rambocode/tandem/releases',
      clipCode: 'npm run build',
    },
    pills: {
      lan: '仅局域网 · 端到端加密',
      noCloud: '无账号，无云端',
      oneTime: '本地优先 · 隐私设计',
    },
    features: {
      heading: '一切自动保持同步',
      lead: '在一台设备复制，在另一台直接粘贴。无需繁琐设置，无需登录——Tandem 在同一 Wi-Fi 下自动发现你的设备，并让它们时刻同步。',
      items: [
        { title: '实时双向同步', desc: 'Mac 自动推送，iPhone 一触即收。文本、链接、代码与颜色都能跨设备传递。' },
        { title: '扫码即配对', desc: '用 iPhone 对准 Mac 上显示的二维码，或输入 6 位验证码，几秒即可配对。' },
        { title: '分享扩展', desc: '在 iOS 分享菜单里直接发送内容到 Mac，无需来回切换 App。' },
        { title: '自定义键盘', desc: '在 iPhone 任意输入框里，直接从键盘插入 Mac 上的剪贴板内容。' },
        { title: '常驻菜单栏', desc: 'Mac 上安静常驻菜单栏，配全局快捷键唤出——无需开启辅助功能权限。' },
        { title: '深色模式 · 多语言', desc: '跟随系统外观与语言，内置 English、简体中文与日本語。' },
      ],
    },
    pro: {
      badge: 'Tandem Pro',
      heading: '为更高频的跨设备工作流解锁更多空间',
      lead: 'Mac 端 Tandem Pro 增加文件传输、大容量历史与全文搜索，适合更频繁地在设备间搬运内容。',
      free: '基础版',
      proLabel: 'Pro',
      rows: [
        { feature: '剪贴板同步（文本 / 链接 / 代码 / 颜色）', free: 'yes', pro: 'yes' },
        { feature: '二维码 / 6 位码配对', free: 'yes', pro: 'yes' },
        { feature: '分享扩展与自定义键盘', free: 'yes', pro: 'yes' },
        { feature: '文件 & 图片传输（端到端加密，≤ 50 MB）', free: 'no', pro: 'yes' },
        { feature: '剪贴板历史记录', free: '20 条', pro: '500 条' },
        { feature: '全文搜索 & 智能分类', free: 'no', pro: 'yes' },
      ],
      yes: '包含',
      no: '—',
    },
    security: {
      heading: '从设计之初就为隐私',
      lead: '你的内容从不离开局域网。中间没有任何服务器——因为根本不存在服务器。',
      points: [
        { title: '仅局域网', desc: '设备通过 Bonjour 在你的 Wi-Fi 上直连，数据不经过互联网。' },
        { title: '端到端加密', desc: '每一次传输都在你自己的设备之间加密，我们看不到你的任何内容。' },
        { title: '无账号，无云端', desc: '无需注册、无追踪、无云存储。历史记录加密保存在本机。' },
      ],
    },
    faq: {
      heading: '常见问题',
      items: [
        { q: '两台设备需要连同一个 Wi-Fi 吗？', a: '需要。Tandem 仅在局域网内同步，因此 Mac 与 iPhone 应处于同一 Wi-Fi（或同一局域网），数据不经过云端。' },
        { q: '需要注册账号吗？', a: '不需要。没有注册、没有云端。用二维码或 6 位验证码配对一次即可使用。' },
        { q: '可以同步哪些内容？', a: '基础版支持文本、链接、代码片段和颜色。Tandem Pro 增加最大 50 MB 的文件与图片传输，全部端到端加密。' },
        { q: 'iPhone 版会向 Tandem 发送什么数据？', a: '不会向我们发送任何数据。iPhone 上的内容只会在你已配对的设备之间通过局域网传输。' },
        { q: '系统要求是什么？', a: 'Mac 端需要 macOS 14 (Sonoma) 或更高版本，iPhone 端需要 iOS 16 或更高版本。' },
      ],
    },
    footer: {
      tagline: '局域网剪贴板 · 无账号，无云端',
      rights: '保留所有权利。',
      product: '产品',
      links: ['功能', 'Pro', '常见问题'],
      privacy: '隐私政策',
      terms: '服务条款',
    },
  },

  // ───────────────────────────── 日本語 ─────────────────────────────
  ja: {
    meta: {
      title: 'Tandem — Mac と iPhone のための LAN クリップボードとファイル転送',
      description:
        'Mac で自動同期、iPhone でワンタップ。ローカルネットワークでクリップボードとファイルを同期。エンドツーエンド暗号化、アカウントなし、クラウドなし。',
    },
    nav: { features: '機能', pro: 'Pro', faq: 'よくある質問', download: 'ダウンロード' },
    hero: {
      badge: 'LAN クリップボード · アカウントなし、クラウドなし',
      title: 'Mac で自動同期、\niPhone でワンタップ。',
      subtitle:
        'Tandem は Mac と iPhone のクリップボードをローカルネットワークで同期し、ファイルもワンタップで送れます。エンドツーエンド暗号化、アカウントなし、クラウドなし。',
      ctaMac: 'Mac 版をダウンロード',
      ctaIos: 'iPhone で入手',
      note: 'macOS 14 (Sonoma)+ · iOS 16+ · ローカルネットワークが必要',
    },
    mockup: {
      macTitle: 'Tandem',
      macSync: '同期中…',
      phoneReceived: 'Mac から受信',
      clipText: '明日の会議は午後3時に変更',
      clipLink: 'https://github.com/rambocode/tandem/releases',
      clipCode: 'npm run build',
    },
    pills: {
      lan: 'LAN のみ · エンドツーエンド暗号化',
      noCloud: 'アカウントなし、クラウドなし',
      oneTime: 'ローカル優先 · プライバシー重視',
    },
    features: {
      heading: 'すべてが自動で同期',
      lead: '片方でコピーすれば、もう片方でそのまま貼り付け。面倒な設定もログインも不要——Tandem は同じ Wi-Fi 上のデバイスを自動で見つけて同期し続けます。',
      items: [
        { title: 'リアルタイム双方向同期', desc: 'Mac が自動で送信し、iPhone はワンタップで受信。テキスト・リンク・コード・カラーも届きます。' },
        { title: 'QR コードでペアリング', desc: 'Mac に表示された QR コードに iPhone を向けるか、6 桁のコードを入力。数秒で完了します。' },
        { title: '共有エクステンション', desc: 'iOS の共有シートから直接 Mac へ送信。アプリを切り替える必要はありません。' },
        { title: 'カスタムキーボード', desc: 'iPhone のどの入力欄でも、キーボードから Mac のクリップボード内容を挿入できます。' },
        { title: 'メニューバーに常駐', desc: 'Mac のメニューバーに静かに常駐し、グローバルショートカットで呼び出し——アクセシビリティ権限は不要。' },
        { title: 'ダークモード · 多言語', desc: 'システムの外観と言語に追従。English・简体中文・日本語を内蔵。' },
      ],
    },
    pro: {
      badge: 'Tandem Pro',
      heading: '本格的なワークフローに、より多くの余裕を',
      lead: 'Mac 版 Tandem Pro では、ファイル転送・大容量履歴・検索を追加し、デバイス間でより多くの内容を扱えます。',
      free: 'Core',
      proLabel: 'Pro',
      rows: [
        { feature: 'クリップボード同期（テキスト / リンク / コード / カラー）', free: 'yes', pro: 'yes' },
        { feature: 'QR / 6 桁コードのペアリング', free: 'yes', pro: 'yes' },
        { feature: '共有エクステンションとカスタムキーボード', free: 'yes', pro: 'yes' },
        { feature: 'ファイル & 画像転送（E2E、最大 50 MB）', free: 'no', pro: 'yes' },
        { feature: 'クリップボード履歴', free: '20 件', pro: '500 件' },
        { feature: '全文検索 & スマートフィルター', free: 'no', pro: 'yes' },
      ],
      yes: '対応',
      no: '—',
    },
    security: {
      heading: '設計段階からプライベート',
      lead: 'あなたの内容がローカルネットワークの外に出ることはありません。間にサーバーはありません——そもそもサーバーが存在しないからです。',
      points: [
        { title: 'LAN のみ', desc: 'デバイスは Bonjour で Wi-Fi 上を直接通信。インターネットを経由しません。' },
        { title: 'エンドツーエンド暗号化', desc: 'すべての転送はあなたのデバイス間で暗号化。私たちが内容を見ることはありません。' },
        { title: 'アカウントなし、クラウドなし', desc: '登録・追跡・クラウド保存は一切なし。履歴は暗号化して端末内に保存します。' },
      ],
    },
    faq: {
      heading: 'よくある質問',
      items: [
        { q: '同じ Wi-Fi に接続している必要がありますか？', a: 'はい。Tandem はローカルネットワークのみで同期するため、Mac と iPhone は同じ Wi-Fi（または同じ LAN）にある必要があります。クラウドは経由しません。' },
        { q: 'アカウントは必要ですか？', a: 'いいえ。登録もクラウドもありません。QR または 6 桁コードで一度ペアリングすれば完了です。' },
        { q: '何を同期できますか？', a: 'Core ではテキスト・リンク・コード・カラー。Tandem Pro では最大 50 MB のファイルと画像も、すべてエンドツーエンド暗号化で送れます。' },
        { q: 'iPhone 版は Tandem にどんなデータを送りますか？', a: '当方には何も送信しません。iPhone 上の内容は、ペアリング済みデバイス間でローカルネットワーク上を移動するだけです。' },
        { q: '動作環境は？', a: 'Mac は macOS 14 (Sonoma) 以降、iPhone は iOS 16 以降が必要です。' },
      ],
    },
    footer: {
      tagline: 'LAN クリップボード · アカウントなし、クラウドなし',
      rights: 'All rights reserved.',
      product: '製品',
      links: ['機能', 'Pro', 'よくある質問'],
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
    },
  },
};
