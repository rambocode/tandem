import type { Lang } from './ui';

interface WorkflowItem {
  number: string;
  title: string;
  description: string;
}

interface ToolkitItem {
  id: 'sync' | 'capture' | 'edit' | 'record' | 'history';
  label: string;
  title: string;
  description: string;
  bullets: string[];
}

interface TrustPoint {
  title: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface FooterGroup {
  title: string;
  links: string[];
}

/**
 * 首页宣传文案独立于通用 UI 字典，避免发布页、对比页与首页叙事互相耦合。
 * 三种语言保持完全相同的信息结构，组件只负责展示，不在模板里拼接营销文案。
 */
export interface PromotionStrings {
  nav: {
    workflows: string;
    toolkit: string;
    privacy: string;
    pro: string;
    faq: string;
    blog: string;
    download: string;
  };
  hero: {
    title: string;
    description: string;
    macCta: string;
    iosCta: string;
    note: string;
    editorTitle: string;
    editorNote: string;
  };
  proofs: TrustPoint[];
  workflows: {
    heading: string;
    lead: string;
    items: WorkflowItem[];
  };
  toolkit: {
    heading: string;
    lead: string;
    items: ToolkitItem[];
    visual: {
      selection: string;
      capture: string;
      copied: string;
      synced: string;
      recording: string;
      search: string;
    };
  };
  privacy: {
    heading: string;
    lead: string;
    mac: string;
    relay: string;
    encrypted: string;
    iphone: string;
    bypass: string;
    points: TrustPoint[];
  };
  pro: {
    heading: string;
    lead: string;
    label: string;
    price: string;
    priceNote: string;
    macCta: string;
    compareCta: string;
    free: string;
    pro: string;
    rows: { feature: string; free: string; pro: string }[];
  };
  faq: {
    heading: string;
    lead: string;
    items: FaqItem[];
  };
  closing: {
    heading: string;
    lead: string;
    macCta: string;
    iosCta: string;
    note: string;
  };
  footer: {
    tagline: string;
    groups: FooterGroup[];
    closing: string;
  };
}

export const promotion: Record<Lang, PromotionStrings> = {
  en: {
    nav: {
      workflows: 'Workflows',
      toolkit: 'Toolkit',
      privacy: 'Privacy',
      pro: 'Pro',
      faq: 'FAQ',
      blog: 'Blog',
      download: 'Download',
    },
    hero: {
      title: 'Copy, capture, mark up.\nThen carry on on iPhone.',
      description:
        'Tandem sends clipboard content, screenshots and files from Mac straight to iPhone over an encrypted local connection — with screen recording, OCR, scrolling capture and image editing built in. No account. No cloud.',
      macCta: 'Download for Mac',
      iosCta: 'Get it on iPhone',
      note: 'Core features free · Pro $19.99 one-time · macOS 14+ / iOS 16+',
      editorTitle: 'Product roadmap.png',
      editorNote: 'Next release focus',
    },
    proofs: [
      { title: 'Local network only', description: 'Discovery and transfer stay on your LAN.' },
      { title: 'End-to-end encrypted', description: 'Only paired devices hold the keys.' },
      { title: 'No account, no cloud', description: 'Nothing is uploaded or stored for you.' },
    ],
    workflows: {
      heading: 'From Mac to iPhone, with three fewer detours.',
      lead: 'Let content hand off between devices instead of taking a trip through chat, cloud drives and Photos.',
      items: [
        { number: '01', title: 'Copy, then paste directly', description: 'Copy on Mac and insert from the Tandem keyboard on iPhone.' },
        { number: '02', title: 'Capture, mark up, sync', description: 'Crop, redact and add arrows; the result lands on your phone.' },
        { number: '03', title: 'Finish long-form work in one place', description: 'Scrolling capture, OCR, recording and GIF all start from one menu.' },
      ],
    },
    toolkit: {
      heading: 'Five jobs, one handoff.',
      lead: 'Sync, capture, edit, record and history are one connected workflow, not five isolated utilities.',
      items: [
        { id: 'sync', label: 'Sync', title: 'Clipboard sync', description: 'Copy on either device and keep moving without sending a message to yourself.', bullets: ['Two-way text, link, code and color sync', 'QR or six-digit pairing', 'iOS share extension and custom keyboard'] },
        { id: 'capture', label: 'Capture', title: 'Screenshot', description: 'Windows, regions and scrolling pages all start from one native capture entry point.', bullets: ['Smart window and UI element detection', 'Scrolling capture and OCR', 'Edit, copy or sync immediately'] },
        { id: 'edit', label: 'Edit', title: 'Image markup', description: 'Turn a raw screenshot into something ready to explain, share or archive.', bullets: ['Arrows, shapes, text and callouts', 'Blur, mosaic and OCR-aware redaction', 'Crop, measure and export back to history'] },
        { id: 'record', label: 'Record', title: 'Screen recording', description: 'Record a full screen or region, then trim and export without leaving Tandem.', bullets: ['Microphone and system audio', 'Keystroke and pointer overlays', 'Trim, speed, auto zoom, video or GIF export'] },
        { id: 'history', label: 'History', title: 'Clipboard history', description: 'Find the item from five minutes ago instead of copying it all over again.', bullets: ['Card-based browsing and quick preview', '20 Core clips or 500 with Pro', 'Full-text search and smart filters with Pro'] },
      ],
      visual: { selection: '1280 × 720', capture: 'Capture', copied: 'Copied', synced: 'Synced to iPhone', recording: 'REC 00:18', search: 'Search history' },
    },
    privacy: {
      heading: 'Your content takes the short route, not the cloud route.',
      lead: 'Devices discover each other via Bonjour on the same network, then transfer end-to-end encrypted content between paired devices.',
      mac: 'Your Mac',
      relay: 'Local network relay',
      encrypted: 'End-to-end encrypted',
      iphone: 'Your iPhone',
      bypass: 'Does not pass through the cloud',
      points: [
        { title: 'Direct on the LAN', description: 'Bonjour discovery without an external server.' },
        { title: 'History stays local', description: 'Content remains on devices you control.' },
        { title: 'No account or cloud storage', description: 'No sign-up and nothing to upload.' },
      ],
    },
    pro: {
      heading: 'Core is free. Upgrade serious workflows once.',
      lead: 'Start with core sync. Upgrade when you need deeper history, file transfer and advanced search.',
      label: 'Tandem Pro',
      price: '$19.99',
      priceNote: 'One-time purchase · lifetime license, no subscription',
      macCta: 'Download for Mac',
      compareCta: 'See the full comparison',
      free: 'Core',
      pro: 'Pro',
      rows: [
        { feature: 'Text clipboard', free: '20 clips', pro: '500 clips' },
        { feature: 'Images and files', free: '—', pro: 'Up to 50 MB' },
        { feature: 'Search and filters', free: '—', pro: 'Included' },
        { feature: 'Encrypted LAN sync', free: 'Included', pro: 'Included' },
      ],
    },
    faq: {
      heading: 'A few things you may want to know first',
      lead: 'Network, accounts, requirements and the free version.',
      items: [
        { question: 'Do Mac and iPhone need to be on the same Wi-Fi?', answer: 'They need to be on the same local network. Tandem uses Bonjour to find paired devices automatically, and your content is never uploaded to the cloud.' },
        { question: 'Do I need to create an account?', answer: 'No. Pair your devices once with a QR or six-digit code. There is no sign-up and no cloud account.' },
        { question: 'What can the free version sync?', answer: 'Core syncs text, links, code and colors and keeps 20 recent clips. Pro adds files, images, deeper history, search and filters.' },
        { question: 'How is this different from Apple Universal Clipboard?', answer: 'Tandem adds visible history, searchable content, file transfer, capture and editing tools while keeping transfers on your local network.' },
        { question: 'Which system versions are supported?', answer: 'Tandem requires macOS 14 or later on Mac and iOS 16 or later on iPhone.' },
      ],
    },
    closing: {
      heading: 'Capture on Mac. Continue on iPhone.',
      lead: 'Core sync stays free. Upgrade to Pro only when you need deeper history and file transfer.',
      macCta: 'Download for Mac',
      iosCta: 'Get it on iPhone',
      note: 'macOS 14+ · iOS 16+',
    },
    footer: {
      tagline: 'A private device handoff on your local network.',
      groups: [
        { title: 'Product', links: ['Toolkit', 'Pro', 'Changelog', 'Blog', 'Download'] },
        { title: 'Support', links: ['FAQ', 'Compare', 'Privacy', 'Terms'] },
        { title: 'Languages', links: ['简体中文', 'English', '日本語'] },
      ],
      closing: 'A device handoff for your local network.',
    },
  },
  zh: {
    nav: {
      workflows: '工作流',
      toolkit: '工具',
      privacy: '隐私',
      pro: 'Pro',
      faq: '常见问题',
      blog: '博客',
      download: '下载',
    },
    hero: {
      title: '复制、截图、标注，\n转身就在 iPhone。',
      description:
        'Tandem 把 Mac 上的剪贴板、截图与文件，通过局域网加密直达 iPhone；还能录屏、OCR、长截图和图片编辑。无账号，无云端。',
      macCta: '下载 Mac 版',
      iosCta: '在 iPhone 上获取',
      note: '基础功能免费 · Pro $19.99 买断 · macOS 14+ / iOS 16+',
      editorTitle: '产品路线图.png',
      editorNote: '下个版本重点',
    },
    proofs: [
      { title: '仅局域网', description: '发现与传输都在局域网内完成。' },
      { title: '端到端加密', description: '密钥只在已配对设备上。' },
      { title: '无账号，无云端', description: '不注册、不上传、不代你存储。' },
    ],
    workflows: {
      heading: '从 Mac 到 iPhone，少绕三次路。',
      lead: '让内容在设备之间接力，而不是在聊天软件、网盘和相册里绕路。',
      items: [
        { number: '01', title: '复制后，直接粘贴', description: 'Mac 复制，iPhone 键盘一触即用。' },
        { number: '02', title: '截图后，标注即同步', description: '框选、打码、加箭头，导出就出现在手机。' },
        { number: '03', title: '长内容，一次处理完', description: '长截图、OCR、录屏和 GIF，都从同一个菜单开始。' },
      ],
    },
    toolkit: {
      heading: '五种任务，一条接力。',
      lead: '同步、截图、编辑、录屏和历史，不是五套孤立工具。',
      items: [
        { id: 'sync', label: '同步', title: '剪贴板同步', description: '不用把内容发给自己，在任一设备复制后直接继续。', bullets: ['文本、链接、代码与颜色双向同步', '二维码或 6 位验证码配对', 'iOS 分享扩展与自定义键盘'] },
        { id: 'capture', label: '截图', title: '截图', description: '窗口、区域、滚动页面，都从一个入口开始。', bullets: ['智能识别窗口与界面元素', '支持滚动长截图与 OCR', '完成后直接编辑、复制或同步'] },
        { id: 'edit', label: '编辑', title: '图片标注', description: '把原始截图直接变成可以解释、分享与归档的内容。', bullets: ['箭头、形状、文字与气泡标注', '模糊、马赛克与 OCR 文字打码', '裁剪、测量并导出回历史记录'] },
        { id: 'record', label: '录屏', title: '屏幕录制', description: '录完整屏幕或区域，剪辑与导出都不用离开 Tandem。', bullets: ['麦克风与系统音频', '按键与鼠标操作展示', '裁剪、变速、自动缩放、视频或 GIF 导出'] },
        { id: 'history', label: '历史', title: '剪贴板历史', description: '找回五分钟前的内容，不必重新复制一遍。', bullets: ['卡片浏览与快速预览', '基础版 20 条，Pro 版 500 条', 'Pro 版全文搜索与智能筛选'] },
      ],
      visual: { selection: '1280 × 720', capture: '捕捉', copied: '已复制', synced: '已同步到 iPhone', recording: '录制 00:18', search: '搜索历史记录' },
    },
    privacy: {
      heading: '内容走近路，不绕云端。',
      lead: '设备通过 Bonjour 在同一网络发现彼此，传输在已配对设备之间端到端加密。',
      mac: '你的 Mac',
      relay: '本地网络中继',
      encrypted: '端到端加密',
      iphone: '你的 iPhone',
      bypass: '不经过云端',
      points: [
        { title: '仅局域网直连', description: '通过 Bonjour 发现设备，不依赖外部服务器。' },
        { title: '历史保存在本机', description: '内容只留在你控制的设备上。' },
        { title: '无需账号与云存储', description: '不用注册，也没有内容需要上传。' },
      ],
    },
    pro: {
      heading: '核心免费，重度工作流一次买断。',
      lead: '先用核心同步，需要更长历史、文件传输和高级筛选时再升级。',
      label: 'Tandem Pro',
      price: '$19.99',
      priceNote: '一次性买断 · 永久授权，无订阅',
      macCta: '下载 Mac 版',
      compareCta: '查看完整对比',
      free: '免费版',
      pro: 'Pro',
      rows: [
        { feature: '文本剪贴板', free: '20 条', pro: '500 条' },
        { feature: '图片与文件', free: '—', pro: '最高 50 MB' },
        { feature: '搜索与筛选', free: '—', pro: '包含' },
        { feature: '局域网加密同步', free: '包含', pro: '包含' },
      ],
    },
    faq: {
      heading: '开始之前，你可能还想知道',
      lead: '关于网络、账号、系统要求和免费版。',
      items: [
        { question: 'Mac 和 iPhone 必须在同一个 Wi-Fi 吗？', answer: '需要处于同一局域网。Tandem 会通过 Bonjour 自动发现已配对设备，内容不会上传到云端。' },
        { question: '需要注册账号吗？', answer: '不需要。用二维码或 6 位验证码完成一次配对即可，没有注册，也没有云端账号。' },
        { question: '免费版能同步什么？', answer: '基础版支持文本、链接、代码与颜色同步，并保留最近 20 条内容；Pro 增加文件、图片、更长历史、搜索与筛选。' },
        { question: '和 Apple 通用剪贴板有什么不同？', answer: 'Tandem 提供可见历史、内容搜索、文件传输、截图与编辑工具，同时让传输始终留在局域网内。' },
        { question: '支持哪些系统版本？', answer: 'Mac 端需要 macOS 14 或更高版本，iPhone 端需要 iOS 16 或更高版本。' },
      ],
    },
    closing: {
      heading: '在 Mac 上捕捉，在 iPhone 上继续。',
      lead: '核心同步永久免费。需要更长历史和文件传输时，再升级 Pro。',
      macCta: '下载 Mac 版',
      iosCta: '在 iPhone 上获取',
      note: 'macOS 14+ · iOS 16+',
    },
    footer: {
      tagline: '局域网里的私密设备接力。',
      groups: [
        { title: '产品', links: ['工具', 'Pro', '更新日志', '博客', '下载'] },
        { title: '支持', links: ['常见问题', '横向对比', '隐私政策', '服务条款'] },
        { title: '语言', links: ['简体中文', 'English', '日本語'] },
      ],
      closing: '局域网里的设备接力。',
    },
  },
  ja: {
    nav: {
      workflows: 'ワークフロー',
      toolkit: 'ツール',
      privacy: 'プライバシー',
      pro: 'Pro',
      faq: 'よくある質問',
      blog: 'ブログ',
      download: 'ダウンロード',
    },
    hero: {
      title: 'コピー、キャプチャ、注釈。\n続きは iPhone で。',
      description:
        'Tandem は Mac のクリップボード、スクリーンショット、ファイルを暗号化したローカル接続で iPhone へ直送。画面収録、OCR、スクロールキャプチャ、画像編集も備えます。アカウントもクラウドも不要です。',
      macCta: 'Mac 版をダウンロード',
      iosCta: 'iPhone で入手',
      note: '基本機能は無料 · Pro は $19.99 の買い切り · macOS 14+ / iOS 16+',
      editorTitle: '製品ロードマップ.png',
      editorNote: '次のリリース重点',
    },
    proofs: [
      { title: 'ローカルネットワークのみ', description: '検出と転送は LAN 内で完結します。' },
      { title: 'エンドツーエンド暗号化', description: '鍵はペアリング済み端末だけにあります。' },
      { title: 'アカウントもクラウドも不要', description: '登録・アップロード・代行保存はありません。' },
    ],
    workflows: {
      heading: 'Mac から iPhone へ。遠回りを三つ減らす。',
      lead: 'チャット、クラウドドライブ、写真アプリを経由せず、端末どうしで内容を引き継ぎます。',
      items: [
        { number: '01', title: 'コピーして、そのままペースト', description: 'Mac でコピーし、iPhone の Tandem キーボードから挿入。' },
        { number: '02', title: '撮って、注釈して、同期', description: '切り抜き、マスキング、矢印を加えた結果が iPhone に届きます。' },
        { number: '03', title: '長い内容も一つの流れで', description: '長いページ、OCR、画面収録、GIF は同じメニューから。' },
      ],
    },
    toolkit: {
      heading: '五つの作業を、一つの引き継ぎに。',
      lead: '同期、キャプチャ、編集、収録、履歴は、別々のツールではなく一つの流れです。',
      items: [
        { id: 'sync', label: '同期', title: 'クリップボード同期', description: '自分宛てに送信せず、どちらかでコピーしてそのまま続けられます。', bullets: ['テキスト・リンク・コード・カラーを双方向同期', 'QR または 6 桁コードでペアリング', 'iOS 共有拡張とカスタムキーボード'] },
        { id: 'capture', label: 'キャプチャ', title: 'スクリーンショット', description: 'ウインドウ、範囲、スクロールページを一つの入口から扱います。', bullets: ['ウインドウと UI 要素を自動検出', 'スクロールキャプチャと OCR', 'すぐに編集・コピー・同期'] },
        { id: 'edit', label: '編集', title: '画像マークアップ', description: 'スクリーンショットを説明・共有・保存できる状態まで仕上げます。', bullets: ['矢印・図形・テキスト・吹き出し', 'ぼかし・モザイク・OCR 対応マスキング', '切り抜き・計測・履歴への書き出し'] },
        { id: 'record', label: '収録', title: '画面収録', description: '全画面または範囲を録画し、Tandem 内で編集して書き出します。', bullets: ['マイクとシステム音声', 'キー入力とポインタ表示', 'トリミング・速度・自動ズーム・動画/GIF'] },
        { id: 'history', label: '履歴', title: 'クリップボード履歴', description: '五分前の内容を、もう一度コピーせずに見つけられます。', bullets: ['カード表示とクイックプレビュー', 'Core は 20 件、Pro は 500 件', 'Pro の全文検索とスマートフィルター'] },
      ],
      visual: { selection: '1280 × 720', capture: 'キャプチャ', copied: 'コピー済み', synced: 'iPhone に同期済み', recording: '収録 00:18', search: '履歴を検索' },
    },
    privacy: {
      heading: '内容は近道へ。クラウドは通らない。',
      lead: '同じネットワーク上の端末を Bonjour で検出し、ペアリング済み端末間でエンドツーエンド暗号化して転送します。',
      mac: 'あなたの Mac',
      relay: 'ローカルネットワーク中継',
      encrypted: 'エンドツーエンド暗号化',
      iphone: 'あなたの iPhone',
      bypass: 'クラウドを経由しない',
      points: [
        { title: 'LAN で直接接続', description: 'Bonjour で検出し、外部サーバーに依存しません。' },
        { title: '履歴は端末内に保存', description: '内容は自分が管理する端末に残ります。' },
        { title: 'アカウントもクラウド保存も不要', description: '登録もアップロードもありません。' },
      ],
    },
    pro: {
      heading: 'Core は無料。高度な作業は一度の購入で。',
      lead: 'まずは基本同期から。長い履歴、ファイル転送、高度な検索が必要になったらアップグレードできます。',
      label: 'Tandem Pro',
      price: '$19.99',
      priceNote: '買い切り · 永続ライセンス、サブスクなし',
      macCta: 'Mac 版をダウンロード',
      compareCta: '詳しい比較を見る',
      free: 'Core',
      pro: 'Pro',
      rows: [
        { feature: 'テキスト履歴', free: '20 件', pro: '500 件' },
        { feature: '画像とファイル', free: '—', pro: '最大 50 MB' },
        { feature: '検索とフィルター', free: '—', pro: '対応' },
        { feature: '暗号化 LAN 同期', free: '対応', pro: '対応' },
      ],
    },
    faq: {
      heading: '始める前に知っておきたいこと',
      lead: 'ネットワーク、アカウント、動作環境、無料版について。',
      items: [
        { question: 'Mac と iPhone は同じ Wi-Fi が必要ですか？', answer: '同じローカルネットワークにある必要があります。Tandem は Bonjour でペアリング済み端末を自動検出し、内容をクラウドへアップロードしません。' },
        { question: 'アカウント登録は必要ですか？', answer: '不要です。QR または 6 桁コードで一度ペアリングすれば使えます。登録もクラウドアカウントもありません。' },
        { question: '無料版では何を同期できますか？', answer: 'Core はテキスト、リンク、コード、カラーを同期し、最近の 20 件を保持します。Pro はファイル、画像、長い履歴、検索、フィルターを追加します。' },
        { question: 'Apple のユニバーサルクリップボードとの違いは？', answer: 'Tandem は見える履歴、検索、ファイル転送、キャプチャ、編集を備え、転送はローカルネットワーク内に保ちます。' },
        { question: '対応する OS は？', answer: 'Mac は macOS 14 以降、iPhone は iOS 16 以降が必要です。' },
      ],
    },
    closing: {
      heading: 'Mac で捉えて、iPhone で続ける。',
      lead: '基本同期はずっと無料。長い履歴やファイル転送が必要なときだけ Pro へ。',
      macCta: 'Mac 版をダウンロード',
      iosCta: 'iPhone で入手',
      note: 'macOS 14+ · iOS 16+',
    },
    footer: {
      tagline: 'ローカルネットワーク内のプライベートな端末引き継ぎ。',
      groups: [
        { title: '製品', links: ['ツール', 'Pro', '更新履歴', 'ブログ', 'ダウンロード'] },
        { title: 'サポート', links: ['よくある質問', '比較', 'プライバシー', '利用規約'] },
        { title: '言語', links: ['简体中文', 'English', '日本語'] },
      ],
      closing: 'ローカルネットワーク内の端末引き継ぎ。',
    },
  },
};
