# Google Analytics 配置帮助

## 启用统计

1. 登录 Google Analytics，创建 GA4 媒体资源和网站数据流。
2. 在数据流详情中复制以 `G-` 开头的 Measurement ID。Tandem 官网当前使用 `G-YSS3Q4T1PJ`。
3. GitHub Pages 工作流已经配置该 ID；其他部署环境添加：

   ```dotenv
   PUBLIC_GOOGLE_ANALYTICS_ID=G-YSS3Q4T1PJ
   ```

4. 重新构建并部署官网。
5. 打开官网后，在 Google Analytics Realtime 或 Google Tag Assistant 中确认当前页面访问。
6. 分别点击 Mac 下载、App Store 和 RSS 入口，确认对应自定义事件。

官网会直接加载 Google Analytics，不展示站内授权弹窗。Google Analytics 新建数据流后，普通报告可能延迟显示；接入验收优先使用 Realtime。

## 停用统计

删除部署环境以及 GitHub Pages 工作流中的 `PUBLIC_GOOGLE_ANALYTICS_ID` 并重新部署。停用后：

- 网站不再输出 `googletagmanager.com` 脚本；
- 页面浏览和下载、App Store、RSS 自定义事件不再发送；
- 已进入 Google Analytics 的历史数据不会被网站自动删除，需要在 Google Analytics 后台按其数据管理能力处理。

## 访客如何限制统计

官网不提供单独的统计弹窗或页脚开关。访客可以通过浏览器 Cookie 设置或内容拦截工具限制 Google Analytics；限制统计不会影响页面浏览、Blog 阅读或下载功能。

## 常见问题

### 配置后没有统计数据

- 确认 Measurement ID 以 `G-` 开头且部署环境已重新构建；
- 检查浏览器或网络是否拦截 `googletagmanager.com`；
- 使用 Google Analytics Realtime 或 Google Tag Assistant 验证，不要只等待普通报告；
- 检查当前访问的是否是最新部署版本。

### 本地开发为什么没有统计

本地服务必须在启动时提供 `PUBLIC_GOOGLE_ANALYTICS_ID`。`.env.example` 只提供字段说明，不会自动成为运行环境。

### Google 脚本加载失败会影响官网吗

不会。脚本异步加载，失败时官网正文、导航、Blog 和下载入口仍可正常使用。
