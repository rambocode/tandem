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

export interface PrivacyDoc {
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

/** 开发者联系邮箱（用于隐私政策与 App Store 审核）。如需更换支持邮箱，改这一处即可。 */
export const CONTACT_EMAIL = 'nesocks@gmail.com';
const UPDATED = '2026-06-17';

export const privacy: Record<Lang, PrivacyDoc> = {
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
        h: 'Payments (Mac only)',
        p: [
          'The iPhone app is free and has no in-app purchases. The optional Tandem Pro upgrade is sold only on the Mac and is handled by our payment processor, Lemon Squeezy, which processes your purchase and the email used for license delivery under its own privacy policy. This does not apply to the iPhone app.',
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
        h: '支付（仅 Mac）',
        p: [
          'iPhone 应用免费，且无任何应用内购买。可选的 Tandem Pro 升级仅在 Mac 上出售，由支付服务商 Lemon Squeezy 处理；你的购买信息及用于发放授权码的邮箱由其依据自身隐私政策处理。此项不适用于 iPhone 应用。',
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
        h: '支払い（Mac のみ）',
        p: [
          'iPhone アプリは無料で、アプリ内課金はありません。任意の Tandem Pro へのアップグレードは Mac でのみ販売され、決済代行の Lemon Squeezy が処理します。購入情報やライセンス送付用のメールは、同社のプライバシーポリシーに基づき扱われます。これは iPhone アプリには適用されません。',
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
