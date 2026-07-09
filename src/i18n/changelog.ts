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
