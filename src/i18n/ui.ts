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
  nav: { features: string; pro: string; pricing: string; faq: string; download: string };
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
  pricing: {
    heading: string;
    lead: string;
    planName: string;
    per: string;
    points: string[];
    cta: string;
    fine: string;
    priceTbd: string;
  };
  security: { heading: string; lead: string; points: Feature[] };
  faq: { heading: string; items: Faq[] };
  footer: { tagline: string; rights: string; product: string; links: string[]; privacy: string };
}

export const ui: Record<Lang, Strings> = {
  // ───────────────────────────── English ─────────────────────────────
  en: {
    meta: {
      title: 'Tandem — LAN clipboard & file transfer for Mac and iPhone',
      description:
        'Automatic on Mac, instant on iPhone. Sync your clipboard and files over the local network — end-to-end encrypted, no account, no cloud. One-time purchase.',
    },
    nav: { features: 'Features', pro: 'Pro', pricing: 'Pricing', faq: 'FAQ', download: 'Download' },
    hero: {
      badge: 'LAN clipboard · No account, no cloud',
      title: 'Automatic on Mac,\ninstant on iPhone.',
      subtitle:
        'Tandem keeps the clipboard on your Mac and iPhone in sync over the local network — and lets you fling files across in a tap. End-to-end encrypted. No account, no cloud.',
      ctaMac: 'Download for Mac',
      ctaIos: 'Get it on iPhone',
      note: 'macOS 14 (Sonoma)+ · iOS 16+ · Free to start',
    },
    mockup: {
      macTitle: 'Tandem',
      macSync: 'Syncing…',
      phoneReceived: 'Received from Mac',
      clipText: 'Meeting moved to 3 PM tomorrow',
      clipLink: 'https://tandem.app/pricing',
      clipCode: 'npm run build',
    },
    pills: {
      lan: 'LAN only · End-to-end encrypted',
      noCloud: 'No account, no cloud',
      oneTime: 'One-time purchase · No subscription',
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
      heading: 'Buy once, unlock every premium feature',
      lead: 'The essentials are free forever. Go Pro on your Mac for files, deep history and search — a single one-time purchase, no subscription.',
      free: 'Free',
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
    pricing: {
      heading: 'One price. Yours forever.',
      lead: 'No subscription, never on the cloud. Activate one Mac; release the seat anytime before switching machines.',
      planName: 'Tandem Pro',
      per: 'one-time',
      points: ['One-time · yours forever', 'No subscription · never on the cloud', 'Single-device license · transferable', '14-day refund, no questions asked'],
      cta: 'Upgrade to Tandem Pro',
      fine: 'Secure checkout via Lemon Squeezy.',
      priceTbd: 'Pricing announced soon',
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
        { q: 'What can I sync?', a: 'Text, links, code snippets and colors on the free tier. Tandem Pro adds files and images up to 50 MB, all end-to-end encrypted.' },
        { q: 'Is the iPhone app free?', a: 'Yes. The Tandem app for iPhone is completely free, with no in-app purchases — all syncing on iOS is free. Tandem Pro (file transfer, larger history and full-text search) is an optional one-time purchase on the Mac only.' },
        { q: 'Is Tandem a subscription?', a: 'No. Tandem Pro is a one-time purchase tied to a single Mac. You can release the license before switching machines and activate it on the new one.' },
        { q: 'What are the system requirements?', a: 'macOS 14 (Sonoma) or later on the Mac, and iOS 16 or later on iPhone.' },
        { q: 'Can I get a refund?', a: 'Yes — within 14 days of purchase, no questions asked, through Lemon Squeezy.' },
      ],
    },
    footer: {
      tagline: 'LAN clipboard · No account, no cloud',
      rights: 'All rights reserved.',
      product: 'Product',
      links: ['Features', 'Pro', 'Pricing', 'FAQ'],
      privacy: 'Privacy Policy',
    },
  },

  // ───────────────────────────── 简体中文 ─────────────────────────────
  zh: {
    meta: {
      title: 'Tandem — Mac 与 iPhone 的局域网剪贴板与文件传输',
      description:
        'Mac 自动同步，iPhone 一触即达。在局域网内同步剪贴板与文件，端到端加密，无账号、无云端。一次买断，永久使用。',
    },
    nav: { features: '功能', pro: 'Pro', pricing: '价格', faq: '常见问题', download: '下载' },
    hero: {
      badge: '局域网剪贴板 · 无账号，无云端',
      title: 'Mac 自动同步，\niPhone 一触即达。',
      subtitle:
        'Tandem 在局域网内让 Mac 与 iPhone 的剪贴板保持同步，还能一键互传文件。端到端加密，无账号，无云端。',
      ctaMac: '下载 Mac 版',
      ctaIos: '在 iPhone 上获取',
      note: 'macOS 14 (Sonoma)+ · iOS 16+ · 免费开始',
    },
    mockup: {
      macTitle: 'Tandem',
      macSync: '同步中…',
      phoneReceived: '来自 Mac',
      clipText: '明天下午 3 点开会',
      clipLink: 'https://tandem.app/pricing',
      clipCode: 'npm run build',
    },
    pills: {
      lan: '仅局域网 · 端到端加密',
      noCloud: '无账号，无云端',
      oneTime: '一次买断 · 无订阅',
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
      heading: '一次买断，解锁全部高级功能',
      lead: '基础功能永久免费。在 Mac 上升级 Pro，解锁文件传输、大容量历史与全文搜索——一次性买断，无订阅。',
      free: '免费版',
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
    pricing: {
      heading: '一次买断，永久使用。',
      lead: '无订阅，数据不上云。激活一台 Mac，换机前可随时取消激活以释放名额。',
      planName: 'Tandem Pro',
      per: '一次性',
      points: ['一次买断 · 永久使用', '无订阅 · 数据不上云', '单设备授权 · 可转移', '14 天无理由退款'],
      cta: '升级到 Tandem Pro',
      fine: '通过 Lemon Squeezy 安全结账。',
      priceTbd: '定价即将公布',
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
        { q: '可以同步哪些内容？', a: '免费版支持文本、链接、代码片段和颜色。Tandem Pro 增加最大 50 MB 的文件与图片传输，全部端到端加密。' },
        { q: 'iPhone 版是免费的吗？', a: '是的。iPhone 上的 Tandem 完全免费，没有任何应用内购买——iOS 端的所有同步功能均免费。Tandem Pro（文件传输、大容量历史与全文搜索）是仅在 Mac 上的可选一次性买断。' },
        { q: 'Tandem 是订阅制吗？', a: '不是。Tandem Pro 是绑定单台 Mac 的一次性买断。换机前可取消激活，再在新机上重新激活。' },
        { q: '系统要求是什么？', a: 'Mac 端需要 macOS 14 (Sonoma) 或更高版本，iPhone 端需要 iOS 16 或更高版本。' },
        { q: '可以退款吗？', a: '可以——购买后 14 天内无理由退款，通过 Lemon Squeezy 办理。' },
      ],
    },
    footer: {
      tagline: '局域网剪贴板 · 无账号，无云端',
      rights: '保留所有权利。',
      product: '产品',
      links: ['功能', 'Pro', '价格', '常见问题'],
      privacy: '隐私政策',
    },
  },

  // ───────────────────────────── 日本語 ─────────────────────────────
  ja: {
    meta: {
      title: 'Tandem — Mac と iPhone のための LAN クリップボードとファイル転送',
      description:
        'Mac で自動同期、iPhone でワンタップ。ローカルネットワークでクリップボードとファイルを同期。エンドツーエンド暗号化、アカウントなし、クラウドなし。買い切り。',
    },
    nav: { features: '機能', pro: 'Pro', pricing: '価格', faq: 'よくある質問', download: 'ダウンロード' },
    hero: {
      badge: 'LAN クリップボード · アカウントなし、クラウドなし',
      title: 'Mac で自動同期、\niPhone でワンタップ。',
      subtitle:
        'Tandem は Mac と iPhone のクリップボードをローカルネットワークで同期し、ファイルもワンタップで送れます。エンドツーエンド暗号化、アカウントなし、クラウドなし。',
      ctaMac: 'Mac 版をダウンロード',
      ctaIos: 'iPhone で入手',
      note: 'macOS 14 (Sonoma)+ · iOS 16+ · 無料で開始',
    },
    mockup: {
      macTitle: 'Tandem',
      macSync: '同期中…',
      phoneReceived: 'Mac から受信',
      clipText: '明日の会議は午後3時に変更',
      clipLink: 'https://tandem.app/pricing',
      clipCode: 'npm run build',
    },
    pills: {
      lan: 'LAN のみ · エンドツーエンド暗号化',
      noCloud: 'アカウントなし、クラウドなし',
      oneTime: '買い切り · サブスクなし',
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
      heading: '一度の購入で、すべてのプレミアム機能を解放',
      lead: '基本機能はずっと無料。Mac で Pro にすればファイル転送・大容量履歴・検索が使えます——買い切り、サブスクなし。',
      free: '無料',
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
    pricing: {
      heading: '一度の支払いで、ずっとあなたのもの。',
      lead: 'サブスクなし、クラウドにも保存しません。Mac を 1 台アクティベート。機種変更の前にいつでも解除できます。',
      planName: 'Tandem Pro',
      per: '買い切り',
      points: ['買い切り · 永続利用', 'サブスクなし · クラウド保存なし', '1 台ライセンス · 移行可能', '14 日間の返金保証'],
      cta: 'Tandem Pro にアップグレード',
      fine: 'Lemon Squeezy による安全な決済。',
      priceTbd: '価格は近日公開',
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
        { q: '何を同期できますか？', a: '無料版ではテキスト・リンク・コード・カラー。Tandem Pro では最大 50 MB のファイルと画像も、すべてエンドツーエンド暗号化で送れます。' },
        { q: 'iPhone 版は無料ですか？', a: 'はい。iPhone 版 Tandem は完全無料で、アプリ内課金はありません——iOS でのすべての同期機能は無料です。Tandem Pro（ファイル転送・大容量履歴・全文検索）は Mac のみの任意の買い切りです。' },
        { q: 'Tandem はサブスクですか？', a: 'いいえ。Tandem Pro は Mac 1 台に紐づく買い切りです。機種変更前に解除し、新しい Mac で再アクティベートできます。' },
        { q: '動作環境は？', a: 'Mac は macOS 14 (Sonoma) 以降、iPhone は iOS 16 以降が必要です。' },
        { q: '返金できますか？', a: 'はい——購入から 14 日以内なら理由を問わず、Lemon Squeezy 経由で返金します。' },
      ],
    },
    footer: {
      tagline: 'LAN クリップボード · アカウントなし、クラウドなし',
      rights: 'All rights reserved.',
      product: '製品',
      links: ['機能', 'Pro', '価格', 'よくある質問'],
      privacy: 'プライバシーポリシー',
    },
  },
};
