# Google Analytics 配置帮助

## 启用统计

1. 登录 Google Analytics，创建 GA4 媒体资源和网站数据流。
2. 在数据流详情中复制以 `G-` 开头的 Measurement ID。Tandem 官网当前使用 `G-YSS3Q4T1PJ`。
3. GitHub Pages 工作流已经配置该 ID；其他部署环境添加：

   ```dotenv
   PUBLIC_GOOGLE_ANALYTICS_ID=G-YSS3Q4T1PJ
   ```

4. 重新构建并部署官网。
5. 使用无痕窗口访问官网，确认首次访问出现统计授权面板。
6. 选择“允许统计”后，在 Google Analytics Realtime 或 Google Tag Assistant 中确认当前页面访问。
7. 分别点击 Mac 下载、App Store 和 RSS 入口，确认对应自定义事件。

Google Analytics 新建数据流后，普通报告可能延迟显示；接入验收优先使用 Realtime。

## 停用统计

删除部署环境以及 GitHub Pages 工作流中的 `PUBLIC_GOOGLE_ANALYTICS_ID` 并重新部署。停用后：

- 网站不再渲染授权面板；
- 页脚不再显示“统计设置”；
- 浏览器不再加载 `googletagmanager.com` 脚本；
- 已进入 Google Analytics 的历史数据不会被网站自动删除，需要在 Google Analytics 后台按其数据管理能力处理。

## 访客如何更改选择

配置统计后，页脚会显示“统计设置”。访客可随时重新打开面板：

- 选择“允许统计”后开始加载 Google Analytics；
- 选择“暂不允许”后停止后续统计，并尽力移除当前站点的 Google Analytics 第一方 Cookie；
- 拒绝统计不会影响页面浏览、Blog 阅读或下载功能。

## 常见问题

### 配置后没有看到授权面板

- 确认 Measurement ID 以 `G-` 开头且部署环境已重新构建；
- 如果此前已经选择允许或拒绝，使用页脚“统计设置”重新打开；
- 检查当前访问的是否是最新部署版本。

### 本地开发为什么没有统计

`.env.example` 只提供字段说明，不会自动启用。需要本地验收时，在未提交的 `.env` 中配置测试用 Measurement ID 后重启开发服务。不要把真实 ID 或个人测试配置提交到仓库。

### Google 脚本加载失败会影响官网吗

不会。脚本在访客同意后异步加载，失败时官网正文、导航、Blog 和下载入口仍可正常使用。
