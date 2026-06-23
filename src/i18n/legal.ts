/**
 * 法律页面文案（隐私政策）。三语（en / zh / ja），结构与 ui.ts 对齐。
 * 内容如实反映 Tandem 的数据实践：无账号、无云端、无服务器，内容仅在用户自己的
 * 配对设备之间经局域网端到端加密传输；iOS 端不收集任何数据、无第三方 SDK。
 */
import type { Lang } from './ui';

export interface LegalSection {
  h: string;
  /** 段落 */
  p?: string[];
  /** 无序列表项 */
  list?: string[];
}

export interface LegalDoc {
  /** 浏览器标题 / H1 */
  title: string;
  /** SEO 描述 */
  metaDescription: string;
  updatedLabel: string;
  updated: string;
  intro: string[];
  sections: LegalSection[];
  /** 返回首页链接文案 */
  backHome: string;
}

export type PrivacyDoc = LegalDoc;

/** 开发者联系邮箱（用于隐私政策与 App Store 审核）。如需更换支持邮箱，改这一处即可。 */
export const CONTACT_EMAIL = 'nesocks@gmail.com';
const UPDATED = '2026-06-17';

export const privacy: Record<Lang, LegalDoc> = {
  // ───────────────────────────── English ─────────────────────────────
  en: {
    title: 'Privacy Policy',
    metaDescription:
      "Tandem's privacy policy. Tandem has no account, no cloud and no servers — your clipboard and files stay on your own devices and travel only over your local network, end-to-end encrypted. The iPhone app collects no data.",
    updatedLabel: 'Last updated',
    updated: UPDATED,
    intro: [
      'Tandem ("Tandem", "we", "us") is a clipboard and file-transfer app for Mac and iPhone. This policy explains what data the app handles and how. The short version: Tandem has no user accounts, no cloud and no servers of our own, so we cannot — and do not — collect your content.',
      'The Tandem app for iPhone collects no personal data and contains no analytics, advertising or third-party tracking SDKs.',
    ],
    sections: [
      {
        h: 'Our approach',
        p: [
          'Tandem syncs your clipboard and transfers files directly between your own paired devices over the local network (Wi-Fi / LAN), discovered via Apple Bonjour. Your content is never routed through the internet and never reaches a server, because Tandem operates no server for syncing.',
        ],
      },
      {
        h: 'Information we do not collect',
        list: [
          'No account or sign-up — Tandem does not ask for your name, email or phone number to use the app.',
          'No analytics or usage tracking, no advertising identifiers, no third-party tracking SDKs.',
          'No clipboard content, files, or history are uploaded to us or to any cloud service.',
        ],
      },
      {
        h: 'How your data is handled',
        p: [
          'Clipboard content and files: processed on your device and transmitted only between your own paired devices over the local network, end-to-end encrypted. We never receive or store this content.',
          'Clipboard history: stored locally on your device. You can clear it at any time, and it is removed when you delete the app.',
          'Pairing information: the keys and device identifiers used to recognise your paired devices are stored locally on your devices and used only to establish the encrypted local connection.',
        ],
      },
      {
        h: 'Permissions we request',
        list: [
          'Local Network: required to discover and connect to your other Tandem device on the same Wi-Fi. It is used only for device-to-device transfer and never to send data to us.',
          'Other system permissions (e.g. when you choose to send a file via the share sheet) are used only to perform the action you requested, at the moment you request it.',
        ],
      },
      {
        h: "Children's privacy",
        p: [
          'Tandem is not directed to children and does not knowingly collect any personal information from anyone, including children.',
        ],
      },
      {
        h: 'Data retention and deletion',
        p: [
          'Because we hold none of your content, there is nothing for us to retain or delete on a server. All data stays on your devices; uninstalling the app removes it.',
        ],
      },
      {
        h: 'Changes to this policy',
        p: [
          'We may update this policy from time to time. Material changes will be reflected by updating the "Last updated" date above.',
        ],
      },
      {
        h: 'Contact',
        p: [`Questions about this policy? Email us at ${CONTACT_EMAIL}.`],
      },
    ],
    backHome: '← Back to home',
  },

  // ───────────────────────────── 简体中文 ─────────────────────────────
  zh: {
    title: '隐私政策',
    metaDescription:
      'Tandem 隐私政策。Tandem 无账号、无云端、无自有服务器——你的剪贴板与文件仅保存在你自己的设备上，并只在局域网内端到端加密传输。iPhone 应用不收集任何数据。',
    updatedLabel: '最后更新',
    updated: UPDATED,
    intro: [
      'Tandem（以下称"Tandem"或"我们"）是一款用于 Mac 与 iPhone 的剪贴板与文件传输应用。本政策说明应用会处理哪些数据、如何处理。简而言之：Tandem 没有用户账号、没有云端、也没有我们自己的服务器，因此我们无法、也不会收集你的内容。',
      'iPhone 版 Tandem 不收集任何个人数据，也不含任何统计分析、广告或第三方追踪 SDK。',
    ],
    sections: [
      {
        h: '我们的原则',
        p: [
          'Tandem 通过 Apple Bonjour 在局域网（Wi-Fi / LAN）内发现你已配对的设备，并在这些你自己的设备之间直接同步剪贴板、传输文件。你的内容不经过互联网、也不会到达任何服务器——因为 Tandem 的同步不依赖任何服务器。',
        ],
      },
      {
        h: '我们不收集的信息',
        list: [
          '无账号、无注册——使用 Tandem 无需提供姓名、邮箱或手机号。',
          '无统计分析或使用追踪，无广告标识符，无第三方追踪 SDK。',
          '不会将任何剪贴板内容、文件或历史记录上传给我们或任何云服务。',
        ],
      },
      {
        h: '你的数据如何被处理',
        p: [
          '剪贴板内容与文件：在你的设备本地处理，仅在你自己已配对的设备之间经局域网端到端加密传输。我们从不接收或存储这些内容。',
          '剪贴板历史：保存在你的设备本地。你可随时清空；删除应用时一并移除。',
          '配对信息：用于识别已配对设备的密钥与设备标识符保存在你的设备本地，仅用于建立加密的本地连接。',
        ],
      },
      {
        h: '我们申请的权限',
        list: [
          '本地网络：用于在同一 Wi-Fi 下发现并连接你的另一台 Tandem 设备。仅用于设备间传输，绝不用于向我们发送数据。',
          '其他系统权限（例如你通过分享菜单发送文件时）仅在你发起该操作的当下，用于完成你请求的动作。',
        ],
      },
      {
        h: '儿童隐私',
        p: ['Tandem 并非面向儿童，也不会在知情情况下收集任何人（包括儿童）的个人信息。'],
      },
      {
        h: '数据留存与删除',
        p: [
          '由于我们不持有你的任何内容，服务器上没有需要我们留存或删除的数据。所有数据都保存在你的设备上；卸载应用即随之删除。',
        ],
      },
      {
        h: '本政策的变更',
        p: ['我们可能不时更新本政策。重大变更将通过更新上方"最后更新"日期予以体现。'],
      },
      {
        h: '联系我们',
        p: [`对本政策有疑问？请发邮件至 ${CONTACT_EMAIL}。`],
      },
    ],
    backHome: '← 返回首页',
  },

  // ───────────────────────────── 日本語 ─────────────────────────────
  ja: {
    title: 'プライバシーポリシー',
    metaDescription:
      'Tandem のプライバシーポリシー。Tandem はアカウントなし・クラウドなし・自社サーバーなし——クリップボードとファイルはご自身のデバイス内にとどまり、ローカルネットワークのみをエンドツーエンド暗号化で移動します。iPhone アプリはデータを一切収集しません。',
    updatedLabel: '最終更新',
    updated: UPDATED,
    intro: [
      'Tandem（以下「Tandem」「当方」）は、Mac と iPhone 向けのクリップボード・ファイル転送アプリです。本ポリシーは、アプリが扱うデータとその扱い方を説明します。要点：Tandem にはユーザーアカウント・クラウド・当方のサーバーがありません。したがって、当方があなたの内容を収集することはできず、また収集しません。',
      'iPhone 版 Tandem は個人データを一切収集せず、解析・広告・サードパーティのトラッキング SDK も含みません。',
    ],
    sections: [
      {
        h: '私たちの考え方',
        p: [
          'Tandem は Apple Bonjour を用いてローカルネットワーク（Wi-Fi / LAN）上のペアリング済みデバイスを検出し、あなた自身のデバイス間で直接クリップボードを同期し、ファイルを転送します。あなたの内容がインターネットを経由したりサーバーに届いたりすることはありません。Tandem の同期はサーバーを必要としないからです。',
        ],
      },
      {
        h: '収集しない情報',
        list: [
          'アカウント・登録なし——Tandem の利用に氏名・メール・電話番号は不要です。',
          '解析や利用トラッキングなし、広告識別子なし、サードパーティのトラッキング SDK なし。',
          'クリップボードの内容・ファイル・履歴を当方やクラウドにアップロードすることはありません。',
        ],
      },
      {
        h: 'データの扱い',
        p: [
          'クリップボードの内容とファイル：デバイス上で処理され、あなた自身のペアリング済みデバイス間でのみ、ローカルネットワークを通じてエンドツーエンド暗号化で送信されます。当方が受信・保存することはありません。',
          'クリップボード履歴：デバイス内にローカル保存されます。いつでも消去でき、アプリを削除すると一緒に削除されます。',
          'ペアリング情報：ペアリング済みデバイスを識別するための鍵やデバイス識別子はデバイス内にローカル保存され、暗号化されたローカル接続の確立にのみ使用されます。',
        ],
      },
      {
        h: '要求する権限',
        list: [
          'ローカルネットワーク：同じ Wi-Fi 上のもう一方の Tandem デバイスを検出・接続するために必要です。デバイス間転送のみに使用し、当方へデータを送ることは一切ありません。',
          'その他のシステム権限（共有シートからファイルを送る場合など）は、あなたが操作を行ったその時に、要求した動作の実行のためにのみ使用されます。',
        ],
      },
      {
        h: '子どものプライバシー',
        p: ['Tandem は子ども向けではなく、子どもを含むいかなる人物の個人情報も故意に収集することはありません。'],
      },
      {
        h: 'データの保持と削除',
        p: [
          '当方はあなたの内容を一切保持しないため、サーバー上に保持・削除すべきデータはありません。すべてのデータはあなたのデバイス内にとどまり、アプリを削除すれば消去されます。',
        ],
      },
      {
        h: '本ポリシーの変更',
        p: ['本ポリシーは随時更新する場合があります。重要な変更は、上記の「最終更新」日付を更新して反映します。'],
      },
      {
        h: 'お問い合わせ',
        p: [`本ポリシーに関するご質問は ${CONTACT_EMAIL} までメールください。`],
      },
    ],
    backHome: '← ホームに戻る',
  },
};

export const terms: Record<Lang, LegalDoc> = {
  en: {
    title: 'Terms of Service',
    metaDescription:
      'Terms of Service for Tandem, a local-network clipboard and file-transfer app for Mac and iPhone.',
    updatedLabel: 'Last updated',
    updated: UPDATED,
    intro: [
      'These Terms of Service ("Terms") govern your access to and use of Tandem. By downloading, installing or using Tandem, you agree to these Terms.',
      'If you do not agree to these Terms, do not use Tandem.',
    ],
    sections: [
      {
        h: 'The service',
        p: [
          'Tandem is a local-network clipboard and file-transfer app for Mac and iPhone. It is designed to work between your own paired devices over the same local network.',
          'Tandem does not provide cloud storage, hosted sync, user accounts or a public file-sharing service.',
        ],
      },
      {
        h: 'Your responsibilities',
        list: [
          'Use Tandem only with devices and content that you own or have permission to access.',
          'Do not use Tandem to transmit unlawful, harmful or infringing content.',
          'Keep your devices, operating systems and local network secure.',
        ],
      },
      {
        h: 'Paid features',
        p: [
          'Some Mac features may require a paid license. If you purchase paid features, payment processing, tax handling and license delivery may be handled by our payment provider or merchant of record.',
          'Any prices, supported payment methods, refund windows or regional availability are shown at the point of purchase when checkout is available.',
        ],
      },
      {
        h: 'Updates and availability',
        p: [
          'We may update Tandem to improve reliability, security and compatibility. Features may change over time.',
          'Tandem depends on your devices, operating systems and local network. We cannot guarantee uninterrupted or error-free operation in every environment.',
        ],
      },
      {
        h: 'Privacy',
        p: [
          'Your use of Tandem is also governed by our Privacy Policy, which explains what data Tandem handles and how.',
        ],
      },
      {
        h: 'Disclaimer',
        p: [
          'Tandem is provided "as is" and "as available" to the maximum extent permitted by law. We disclaim warranties of merchantability, fitness for a particular purpose and non-infringement.',
        ],
      },
      {
        h: 'Limitation of liability',
        p: [
          'To the maximum extent permitted by law, Tandem and its developer will not be liable for indirect, incidental, special, consequential or punitive damages, or for loss of data, profits or business opportunities.',
        ],
      },
      {
        h: 'Changes to these Terms',
        p: [
          'We may update these Terms from time to time. Material changes will be reflected by updating the "Last updated" date above.',
        ],
      },
      {
        h: 'Contact',
        p: [`Questions about these Terms? Email us at ${CONTACT_EMAIL}.`],
      },
    ],
    backHome: '← Back to home',
  },

  zh: {
    title: '服务条款',
    metaDescription: 'Tandem 服务条款。Tandem 是用于 Mac 与 iPhone 的局域网剪贴板与文件传输应用。',
    updatedLabel: '最后更新',
    updated: UPDATED,
    intro: [
      '本服务条款（以下简称“条款”）适用于你访问和使用 Tandem。下载、安装或使用 Tandem，即表示你同意本条款。',
      '如果你不同意本条款，请不要使用 Tandem。',
    ],
    sections: [
      {
        h: '服务内容',
        p: [
          'Tandem 是用于 Mac 与 iPhone 的局域网剪贴板与文件传输应用，设计用于你自己已配对的设备之间，在同一局域网内工作。',
          'Tandem 不提供云存储、托管同步、用户账号或公开文件分享服务。',
        ],
      },
      {
        h: '你的责任',
        list: [
          '仅在你拥有或被授权访问的设备和内容上使用 Tandem。',
          '不得使用 Tandem 传输违法、有害或侵权内容。',
          '请自行维护设备、操作系统和本地网络的安全。',
        ],
      },
      {
        h: '付费功能',
        p: [
          '部分 Mac 功能可能需要付费授权。如果你购买付费功能，支付处理、税费处理和授权交付可能由我们的支付服务商或登记商户完成。',
          '当结账可用时，价格、支持的支付方式、退款窗口和地区可用性会在购买页面显示。',
        ],
      },
      {
        h: '更新与可用性',
        p: [
          '我们可能更新 Tandem，以提升可靠性、安全性和兼容性。功能可能随时间变化。',
          'Tandem 依赖你的设备、操作系统与本地网络环境。我们无法保证在所有环境中都持续、无错误运行。',
        ],
      },
      {
        h: '隐私',
        p: ['你使用 Tandem 同时受我们的隐私政策约束。隐私政策说明 Tandem 会处理哪些数据以及如何处理。'],
      },
      {
        h: '免责声明',
        p: [
          '在法律允许的最大范围内，Tandem 按“现状”和“可用状态”提供。我们不作适销性、特定用途适用性或不侵权等明示或默示保证。',
        ],
      },
      {
        h: '责任限制',
        p: [
          '在法律允许的最大范围内，Tandem 及其开发者不对任何间接、附带、特殊、后果性或惩罚性损害，或数据、利润、商业机会损失承担责任。',
        ],
      },
      {
        h: '本条款的变更',
        p: ['我们可能不时更新本条款。重大变更将通过更新上方“最后更新”日期予以体现。'],
      },
      {
        h: '联系我们',
        p: [`对本条款有疑问？请发邮件至 ${CONTACT_EMAIL}。`],
      },
    ],
    backHome: '← 返回首页',
  },

  ja: {
    title: '利用規約',
    metaDescription:
      'Tandem の利用規約。Tandem は Mac と iPhone 向けのローカルネットワーク・クリップボードおよびファイル転送アプリです。',
    updatedLabel: '最終更新',
    updated: UPDATED,
    intro: [
      '本利用規約（以下「本規約」）は、Tandem へのアクセスおよび利用に適用されます。Tandem をダウンロード、インストール、または利用することで、本規約に同意したものとみなされます。',
      '本規約に同意しない場合は、Tandem を利用しないでください。',
    ],
    sections: [
      {
        h: 'サービス内容',
        p: [
          'Tandem は Mac と iPhone 向けのローカルネットワーク・クリップボードおよびファイル転送アプリであり、あなた自身のペアリング済みデバイス間で、同じローカルネットワーク上で動作するよう設計されています。',
          'Tandem はクラウドストレージ、ホスト型同期、ユーザーアカウント、公開ファイル共有サービスを提供しません。',
        ],
      },
      {
        h: '利用者の責任',
        list: [
          '所有している、またはアクセス権限のあるデバイスと内容にのみ Tandem を使用してください。',
          '違法、有害、または権利侵害となる内容の送信に Tandem を使用しないでください。',
          'デバイス、OS、ローカルネットワークの安全性は利用者自身で維持してください。',
        ],
      },
      {
        h: '有料機能',
        p: [
          '一部の Mac 機能には有料ライセンスが必要な場合があります。有料機能を購入する場合、決済処理、税金処理、ライセンス送付は当方の決済サービスまたは Merchant of Record により処理されることがあります。',
          'チェックアウトが利用可能な場合、価格、対応する支払い方法、返金期間、地域別の利用可否は購入画面に表示されます。',
        ],
      },
      {
        h: 'アップデートと可用性',
        p: [
          '当方は信頼性、セキュリティ、互換性を向上させるため Tandem を更新する場合があります。機能は時間とともに変更されることがあります。',
          'Tandem は利用者のデバイス、OS、ローカルネットワーク環境に依存します。すべての環境で中断なく、またはエラーなく動作することは保証できません。',
        ],
      },
      {
        h: 'プライバシー',
        p: ['Tandem の利用にはプライバシーポリシーも適用されます。プライバシーポリシーは Tandem が扱うデータとその扱い方を説明します。'],
      },
      {
        h: '免責事項',
        p: [
          '法令で認められる最大限の範囲で、Tandem は「現状有姿」および「提供可能な状態」で提供されます。当方は商品性、特定目的適合性、非侵害について明示または黙示の保証を行いません。',
        ],
      },
      {
        h: '責任の制限',
        p: [
          '法令で認められる最大限の範囲で、Tandem およびその開発者は、間接的、付随的、特別、結果的、懲罰的損害、またはデータ、利益、事業機会の損失について責任を負いません。',
        ],
      },
      {
        h: '本規約の変更',
        p: ['本規約は随時更新される場合があります。重要な変更は、上記の「最終更新」日付を更新して反映します。'],
      },
      {
        h: 'お問い合わせ',
        p: [`本規約に関するご質問は ${CONTACT_EMAIL} までメールください。`],
      },
    ],
    backHome: '← ホームに戻る',
  },
};
