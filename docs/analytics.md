# 官网访问统计领域说明

## 业务背景

产品官网需要用真实访问与转化数据判断内容是否有效。当前产品决策是直接加载 Google Analytics，不展示站内授权弹窗。因此统计能力必须满足：

- 覆盖首页、对比页、法律页、Blog 列表和文章等全部使用 `Base.astro` 的页面；
- 页面打开后异步加载，不阻塞正文、导航或下载入口；
- 只统计页面访问与关键官网转化，不接触剪贴板、文件或 Tandem App 历史；
- 没有配置或配置错误时，行为明确且不会静默产生错误数据。

## 领域概念

| 概念 | 规则 |
| --- | --- |
| Measurement ID | GA4 网站数据流 ID，格式为 `G-` 加字母数字 |
| 页面浏览 | Google tag 初始化后由 GA4 发送的默认 `page_view` |
| 关键转化 | Mac 下载、iPhone App Store、RSS 订阅三种稳定入口 |
| 产品数据边界 | 不向 GA4 发送剪贴板内容、文件名、文章正文或用户输入 |

## 业务流程

```mermaid
flowchart LR
  A[访问任意官网页面] --> B{已配置 Measurement ID?}
  B -- 否 --> C[不渲染统计代码]
  B -- 是 --> D[异步加载 gtag.js]
  D --> E[记录 page_view]
  D --> F[监听关键转化入口]
  F --> G[记录下载或订阅事件]
```

## 关键实现

- `src/components/GoogleAnalytics.astro` 负责配置校验、Google tag 初始化和转化事件。
- `src/layouts/Base.astro` 在所有页面内容之后统一挂载统计能力，子页面无需重复接入。
- `.github/workflows/deploy-pages.yml` 为 GitHub Pages 生产构建提供 Measurement ID。
- `src/i18n/legal.ts` 明确区分 App 数据实践与官网统计实践。

当前自定义事件：

| GA4 事件名 | 触发条件 |
| --- | --- |
| `mac_download_click` | 点击 `rambocode/tandem/releases` 下载入口 |
| `ios_app_store_click` | 点击 Apple App Store 入口 |
| `rss_subscribe` | 点击任一语言的 RSS 订阅入口 |

## 隐私与失败边界

- `PUBLIC_GOOGLE_ANALYTICS_ID` 为空时不输出 Google Analytics 脚本。
- ID 不符合 GA4 `G-...` 格式时构建直接失败，避免上线后静默丢失数据。
- Google 脚本异步加载，网络失败不会阻塞页面内容、导航或下载入口。
- 官网不展示统计授权弹窗；隐私政策必须如实说明 Google Analytics 会随页面加载。
- Tandem App 继续保持无统计 SDK；官网统计不会接触 App 内剪贴板、文件或历史记录。
- Blog 保持纯阅读；统计能力不会增加 Blog 评论或用户身份体系。
- 运营方必须根据目标访问地区和适用政策自行确认 Cookie 与同意管理要求。

## 扩展规则

新增自定义事件前先回答“它会改变哪项产品决策”。事件名必须稳定、使用小写英文与下划线，不发送用户输入、文章正文、剪贴板内容、文件名或其他可能包含个人信息的数据。
