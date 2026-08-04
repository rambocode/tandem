/**
 * 更新日志文案（三语：en / zh / ja）。entries 按版本倒序排列（最新在前）。
 * 每次发布新版本时在每个语言的 entries 数组头部插入一条，条目为面向用户的
 * 功能摘要（非原始 commit message）。version/date 需与 macOS 客户端 tag 一致，
 * 详见 .claude/skills/release-web/SKILL.md。
 */
import type { Lang } from './ui';

export interface ChangelogEntry {
  version: string;
  date: string;
  items: string[];
}

export interface ChangelogDoc {
  title: string;
  metaDescription: string;
  backHome: string;
  entries: ChangelogEntry[];
}

export const changelog: Record<Lang, ChangelogDoc> = {
  // ───────────────────────────── English ─────────────────────────────
  en: {
    title: 'Changelog',
    metaDescription: 'Tandem release history for macOS — what changed in each version.',
    backHome: '← Back to home',
    entries: [
      {
        version: '0.2.10',
        date: '2026-08-04',
        items: [
          'Slimmer menu bar menu — the capture group shows the four most-used items, with the rest tucked behind “Show More”, which expands in place without closing the menu',
          '“Launch at login”, “Check for Updates” and “Keyboard Shortcuts” left the menu; all three remain available in Preferences',
          'Area and window capture can now shoot Tandem’s own menus, and default to live mode',
          'A single click in the large history preview now selects and copies the item',
          'Screen recording permission is checked once at launch, and the permission walkthrough was redesigned',
          'Fixed the menu collapsing and the frozen backdrop failing to render when starting an area capture from the menu bar',
        ],
      },
      {
        version: '0.2.9',
        date: '2026-08-03',
        items: [
          'New history window — browse the full clipboard history as cards',
          'Dedicated card layouts for images, plain text, links, code and files, with text shown in full inline',
          'Quick actions appear on a card as you hover it; a single click selects, a double click runs the default action',
          'Preferences rebuilt on the native macOS Settings scene, with the category tabs in the title bar',
          'Fixed text fields losing their normal editing behaviour',
        ],
      },
      {
        version: '0.2.8',
        date: '2026-07-31',
        items: [
          'Image editor gained a bottom bar with three modes — Annotate, Effects and Preview',
          'Backdrop controls moved from the floating panel to an inline strip along the bottom; colour and gradient presets are unchanged',
          '3D effects no longer shrink the image as you tilt it, and the drop shadow now follows the tilt',
          'Edited images can be dragged straight into another app, or sent through the system share sheet',
          "Fixed the crosshair being replaced by the foreground app's cursor when starting an area capture",
          'Fixed the measurement tool expanding the canvas and adding blank margins to exports',
        ],
      },
      {
        version: '0.2.7',
        date: '2026-07-29',
        items: [
          'Screen recording: capture the full screen or a region, with microphone and system audio, plus keystroke and mouse-click overlays',
          'New video editor: trimming, speed segments, zoom segments with auto-focus, backgrounds, and video or GIF export',
          'OCR: pull text out of any capture, including vertical Chinese and Japanese, with QR-code detection',
          'Scrolling capture: stitch a long page into a single image',
          'Smart element capture: hover to detect and shoot an individual interface element',
          'Subject cutout: lift the foreground out of a screenshot',
          'Quick Access panel keeps recent captures within reach and lets you drag them into any app',
          'Added first-run onboarding, a colour-sampling magnifier during area selection, and a configurable image format',
        ],
      },
      {
        version: '0.2.6',
        date: '2026-07-25',
        items: [
          'Area screenshots now keep popovers that would otherwise close themselves',
          'Area capture starts noticeably faster',
          'Simplified the screen-recording permission flow',
        ],
      },
      {
        version: '0.2.5',
        date: '2026-07-17',
        items: [
          'Copying something already in the list now refreshes it to the top instead of adding a duplicate',
          'Image editor is responsive: the toolbar adapts to the window width instead of overflowing',
          "Preview window's edit action moved to the titlebar",
          'Fixed clip details shifting around while hovering a card',
        ],
      },
      {
        version: '0.2.4',
        date: '2026-07-17',
        items: [
          'Refined area capture and editor zoom behaviour',
          'Fixed the area-selection overlay showing up in the screenshot',
        ],
      },
      {
        version: '0.2.3',
        date: '2026-07-16',
        items: [
          'Image editor gained zoom controls',
          'Added Shottr-style selection on the editor canvas',
          'Fixed colour sampling drifting after zooming or panning',
        ],
      },
      {
        version: '0.2.2',
        date: '2026-07-16',
        items: [
          'Screenshots keep their original Retina pixels instead of being downscaled',
        ],
      },
      {
        version: '0.2.1',
        date: '2026-07-16',
        items: [
          'Brand-new Shottr-style image editor with a complete tool set',
          'Closed shapes gained style presets: hand-drawn outline, classic outline, translucent fill and solid fill',
          'Line tool gained dash styles and angle snapping',
          'Markup handles now use directional resize cursors',
          'Command-D duplicates the selected markup layer',
          'Paste an image to overlay it; the canvas grows automatically when markup runs past the edge',
        ],
      },
      {
        version: '0.2.0',
        date: '2026-07-13',
        items: [
          'Clipboard list gained a date filter',
          'Fixed card timestamps being stuck at "just now"',
        ],
      },
      {
        version: '0.1.9',
        date: '2026-07-08',
        items: [
          "Window screenshots can now capture Tandem's own visible windows (e.g. the clipboard panel), which were previously unselectable",
          "Clipboard cards gained a two-step delete confirmation and a \"Show in Finder\" button for saved images",
        ],
      },
      {
        version: '0.1.8',
        date: '2026-07-08',
        items: [
          'Fixed area screenshots losing floating panels (e.g. web page popovers) that closed themselves before the shot was taken',
          'Preview window no longer forces itself to stay on top',
        ],
      },
      {
        version: '0.1.7',
        date: '2026-07-07',
        items: [
          'Added a Shottr-style measurement ruler to the image editor',
          'Preview window now supports arrow-key navigation between images, made more reliable',
          'Added more backdrop color presets',
        ],
      },
      {
        version: '0.1.6',
        date: '2026-07-06',
        items: [
          'Brand-new image markup editor: arrows, rectangles, text bubbles, blur/mosaic and erase tools',
          'OCR now recognizes Chinese text with improved bounding-box accuracy',
          'Share extension gained an offline inbox and better image thumbnails',
        ],
      },
    ],
  },

  // ───────────────────────────── 简体中文 ─────────────────────────────
  zh: {
    title: '更新日志',
    metaDescription: 'Tandem macOS 客户端版本更新记录。',
    backHome: '← 返回首页',
    entries: [
      {
        version: '0.2.10',
        date: '2026-08-04',
        items: [
          '菜单栏菜单精简：截图组默认只显示 4 个最常用的项，其余折叠在「显示更多」后，点击原地展开且菜单不关闭',
          '「开机自启动」「检查更新」「键盘快捷键」从菜单移出，三者在偏好设置里仍可使用',
          '区域截图与窗口截图现在可以截到 Tandem 自己的菜单，并默认使用实时模式',
          '历史大预览中单击即选中并复制',
          '屏幕录制权限改为启动时检查一次，权限引导重新设计',
          '修复从菜单栏发起区域截图时菜单被收起、冻结背景不渲染的问题',
        ],
      },
      {
        version: '0.2.9',
        date: '2026-08-03',
        items: [
          '新增历史记录窗口，可用卡片形式浏览完整的剪贴板历史',
          '图片、纯文本、链接、代码、文件各有专属卡片样式，文本内容直接完整展示',
          '悬停卡片即显示快捷操作，单击选中、双击执行默认动作',
          '偏好设置改用 macOS 原生 Settings 场景，分类标签移到标题栏',
          '修复文本输入框的正常编辑行为被破坏',
        ],
      },
      {
        version: '0.2.8',
        date: '2026-07-31',
        items: [
          '图片编辑器新增底部栏，分「标注 / 效果展示 / 预览」三种模式',
          '衬底控件从右上浮动面板移到底部内联条，背景色与混色预设保持不变',
          '3D 效果不再随倾角缩小图片，投影会跟着倾斜方向走',
          '编辑好的图片可以直接拖到其它 App，或通过系统分享面板发送',
          '修复区域截图时十字光标被前台 App 的光标盖掉',
          '修复测量工具撑大画布、导致导出图片多出空白边',
        ],
      },
      {
        version: '0.2.7',
        date: '2026-07-29',
        items: [
          '屏幕录制：可录全屏或指定区域，支持麦克风与系统声音，并可叠加按键与鼠标点击提示',
          '全新视频编辑器：裁剪、变速片段、带自动追焦的缩放片段、背景设置，可导出视频或 GIF',
          'OCR：从任意截图中提取文字，支持中日文竖排，并可识别二维码',
          '滚动长截图：把长页面拼接成一张完整图片',
          '智能元素截图：悬停即可识别并单独截取界面元素',
          '主体抠图：把截图中的前景主体单独抠出来',
          '快捷面板：最近的截图录屏随手可取，可直接拖进任意 App',
          '新增首次使用引导、区域选取时的取色放大镜，以及可配置的图片格式',
        ],
      },
      {
        version: '0.2.6',
        date: '2026-07-25',
        items: [
          '区域截图不再丢失会自行收起的弹出层',
          '区域截图启动明显更快',
          '屏幕录制的权限引导流程更简洁',
        ],
      },
      {
        version: '0.2.5',
        date: '2026-07-17',
        items: [
          '重复复制已在列表中的内容会刷新到顶部，而不是新增一条',
          '图片编辑器改为响应式：工具栏按窗口宽度自适应，不再溢出',
          '预览窗口的编辑入口移到标题栏',
          '修复悬停卡片时详情信息跳动',
        ],
      },
      {
        version: '0.2.4',
        date: '2026-07-17',
        items: [
          '区域截图与编辑器缩放体验优化',
          '修复区域选取的遮罩被拍进截图',
        ],
      },
      {
        version: '0.2.3',
        date: '2026-07-16',
        items: [
          '图片编辑器新增缩放控件',
          '编辑器画布新增 Shottr 式框选',
          '修复缩放或平移后取色偏移',
        ],
      },
      {
        version: '0.2.2',
        date: '2026-07-16',
        items: [
          '截图保留原始 Retina 像素，不再被降采样',
        ],
      },
      {
        version: '0.2.1',
        date: '2026-07-16',
        items: [
          '全新 Shottr 式图片编辑器，工具集完整',
          '封闭图形新增样式预设：手绘轮廓、经典轮廓、半透明填充、纯色填充',
          '直线工具新增线型与角度吸附',
          '标注手柄改用方向性缩放光标',
          'Command-D 复制选中的标注图层',
          '粘贴图片即可叠加；标注超出边界时画布自动扩展',
        ],
      },
      {
        version: '0.2.0',
        date: '2026-07-13',
        items: [
          '剪贴板列表新增按日期筛选',
          '修复卡片时间戳一直停在「刚刚」',
        ],
      },
      {
        version: '0.1.9',
        date: '2026-07-08',
        items: [
          '窗口截图现在可以选取 Tandem 自身的可见窗口（如剪贴板面板），此前无法选中',
          '剪贴板卡片新增两段式删除确认，以及已落盘图片的「在 Finder 中显示」按钮',
        ],
      },
      {
        version: '0.1.8',
        date: '2026-07-08',
        items: [
          '修复自由截图时网页弹出层等浮层会在截图前自行收起的问题',
          '预览窗口不再强制保持置顶',
        ],
      },
      {
        version: '0.1.7',
        date: '2026-07-07',
        items: [
          '图片编辑器新增 Shottr 式测量标尺',
          '预览窗口支持方向键切换图片，且切换更可靠',
          '新增更多背景色预设',
        ],
      },
      {
        version: '0.1.6',
        date: '2026-07-06',
        items: [
          '全新图片标注编辑器：箭头、矩形、文字气泡、模糊/马赛克与擦除工具',
          'OCR 支持中文识别，文字识别框更精确',
          '分享扩展新增离线收件箱，图片缩略图体验优化',
        ],
      },
    ],
  },

  // ───────────────────────────── 日本語 ─────────────────────────────
  ja: {
    title: '更新履歴',
    metaDescription: 'Tandem macOS 版のリリース履歴。',
    backHome: '← ホームに戻る',
    entries: [
      {
        version: '0.2.10',
        date: '2026-08-04',
        items: [
          'メニューバーのメニューを整理：キャプチャ項目は使用頻度の高い 4 つのみを表示し、残りは「さらに表示」に折りたたみ。クリックするとメニューを閉じずにその場で展開',
          '「ログイン時に起動」「アップデートを確認」「キーボードショートカット」をメニューから削除（いずれも環境設定から引き続き利用可能）',
          '範囲キャプチャとウィンドウキャプチャで Tandem 自身のメニューも撮影できるようになり、既定でライブモードに',
          '履歴の大きいプレビューでシングルクリックすると選択と同時にコピーされるように',
          '画面収録の権限を起動時に一度だけ確認するように変更し、権限の案内画面を刷新',
          'メニューバーから範囲キャプチャを開始するとメニューが閉じる、静止背景が描画されない問題を修正',
        ],
      },
      {
        version: '0.2.9',
        date: '2026-08-03',
        items: [
          'クリップボード履歴をカード形式で一覧できる履歴ウィンドウを追加',
          '画像・テキスト・リンク・コード・ファイルそれぞれに専用のカード表示を用意し、テキストは全文をその場で表示',
          'カードにホバーするとクイック操作を表示。シングルクリックで選択、ダブルクリックで既定の動作を実行',
          '環境設定を macOS ネイティブの Settings シーンで再構築し、カテゴリタブをタイトルバーへ移動',
          'テキスト入力欄の通常の編集動作が損なわれる問題を修正',
        ],
      },
      {
        version: '0.2.8',
        date: '2026-07-31',
        items: [
          '画像エディタに「注釈 / エフェクト / プレビュー」の 3 モードを切り替える下部バーを追加',
          '背景の各種設定をフローティングパネルから下部のインラインバーへ移動（単色・グラデーションのプリセットは従来どおり）',
          '3D エフェクトで傾けても画像が縮まなくなり、影が傾きに追従するように',
          '編集した画像を他のアプリへ直接ドラッグ、またはシステムの共有シートから送信できるように',
          '範囲キャプチャ開始時に十字カーソルが前面アプリのカーソルで上書きされる問題を修正',
          '計測ツールがキャンバスを広げ、書き出し画像に余白が付く問題を修正',
        ],
      },
      {
        version: '0.2.7',
        date: '2026-07-29',
        items: [
          '画面収録：全画面または範囲を指定して録画でき、マイクとシステム音声、キー入力とマウスクリックの表示にも対応',
          '新しい動画エディタ：トリミング、速度セグメント、自動追尾付きのズームセグメント、背景設定、動画または GIF での書き出し',
          'OCR：あらゆるキャプチャからテキストを抽出。中国語・日本語の縦書きに対応し、QR コードも認識',
          'スクロールキャプチャ：長いページを 1 枚の画像として繋ぎ合わせ',
          'スマート要素キャプチャ：ホバーするだけで UI 要素を検出し、単体で撮影',
          '被写体の切り抜き：スクリーンショットから前景だけを抜き出し',
          'クイックアクセスパネル：最近のキャプチャにすぐ手が届き、任意のアプリへドラッグ可能',
          '初回起動時のオンボーディング、範囲選択中のカラーピッカー用ルーペ、画像フォーマットの設定を追加',
        ],
      },
      {
        version: '0.2.6',
        date: '2026-07-25',
        items: [
          '範囲スクリーンショットで、自動的に閉じてしまうポップオーバーも残るように',
          '範囲キャプチャの起動が体感できるほど高速に',
          '画面収録の権限案内フローを簡素化',
        ],
      },
      {
        version: '0.2.5',
        date: '2026-07-17',
        items: [
          '既にリストにある内容を再度コピーすると、重複追加ではなく先頭へ更新されるように',
          '画像エディタをレスポンシブ化：ツールバーがウィンドウ幅に合わせて調整され、はみ出さなくなりました',
          'プレビューウィンドウの編集ボタンをタイトルバーへ移動',
          'カードにホバーした際に詳細情報がずれる問題を修正',
        ],
      },
      {
        version: '0.2.4',
        date: '2026-07-17',
        items: [
          '範囲キャプチャとエディタのズーム挙動を改善',
          '範囲選択のオーバーレイがスクリーンショットに写り込む問題を修正',
        ],
      },
      {
        version: '0.2.3',
        date: '2026-07-16',
        items: [
          '画像エディタにズームコントロールを追加',
          'エディタのキャンバスに Shottr 風の範囲選択を追加',
          'ズームやパンの後にカラーピッカーがずれる問題を修正',
        ],
      },
      {
        version: '0.2.2',
        date: '2026-07-16',
        items: [
          'スクリーンショットが縮小されず、Retina の元ピクセルを保持するように',
        ],
      },
      {
        version: '0.2.1',
        date: '2026-07-16',
        items: [
          'ツールを一通り揃えた、まったく新しい Shottr 風の画像エディタ',
          '閉じた図形にスタイルプリセットを追加：手描き輪郭、クラシック輪郭、半透明塗り、ベタ塗り',
          '直線ツールに線種と角度スナップを追加',
          '注釈ハンドルに方向付きのリサイズカーソルを採用',
          'Command-D で選択中の注釈レイヤーを複製',
          '画像を貼り付けるとオーバーレイとして重なり、注釈が端をはみ出すとキャンバスが自動で拡張',
        ],
      },
      {
        version: '0.2.0',
        date: '2026-07-13',
        items: [
          'クリップボード一覧に日付での絞り込みを追加',
          'カードのタイムスタンプが「たった今」のまま止まる問題を修正',
        ],
      },
      {
        version: '0.1.9',
        date: '2026-07-08',
        items: [
          'ウィンドウスクリーンショットで、これまで選択できなかった Tandem 自身の表示ウィンドウ（クリップボードパネルなど）も選択可能に',
          'クリップボードカードに二段階の削除確認と、保存済み画像用の「Finder で表示」ボタンを追加',
        ],
      },
      {
        version: '0.1.8',
        date: '2026-07-08',
        items: [
          'エリアスクリーンショット撮影前に、Web ページのポップオーバーなどのフローティング要素が自動的に閉じてしまう不具合を修正',
          'プレビューウィンドウが常に最前面に固定されないよう修正',
        ],
      },
      {
        version: '0.1.7',
        date: '2026-07-07',
        items: [
          '画像エディタに Shottr 風の計測ルーラーを追加',
          'プレビューウィンドウで矢印キーによる画像切り替えに対応し、より確実に動作するよう改善',
          '背景色プリセットを追加',
        ],
      },
      {
        version: '0.1.6',
        date: '2026-07-06',
        items: [
          '新しい画像マークアップエディタ：矢印・矩形・テキスト吹き出し・ぼかし/モザイク・消しゴムツール',
          'OCR が中国語認識に対応し、文字枠の精度が向上',
          '共有機能拡張にオフライン受信箱を追加、画像サムネイルを改善',
        ],
      },
    ],
  },
};
