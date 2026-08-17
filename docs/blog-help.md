# Blog 发布与反馈管理帮助

## 发布一篇文章

1. 在 `src/data/blog/zh/`、`en/` 或 `ja/` 新建 `.md`、`.mdx` 或 `.html` 文件。
2. 复制同目录现有文章的 frontmatter，并填写标题、摘要、permalink、分类、日期和阅读时长。
3. 一篇文章只回答一个具体问题。先提供有用答案，再说明 Tandem 能在哪一步减少绕路。
4. 草稿阶段设置 `draft: true`；准备发布时改为 `false`。
5. 本地检查 Blog 首页、文章页和移动端，再运行站点检查与构建。
6. 发布后确认对应语言的 RSS 和 `/sitemap.xml` 已出现新地址。

### Markdown 示例

```markdown
---
title: 文章标题
description: 一句话摘要
lang: zh
permalink: article-path
category: 工作流
publishedAt: 2026-08-17
readingMinutes: 5
draft: true
---

正文使用 Markdown。

## 第二级标题
```

### HTML 示例

```html
---
title: 文章标题
description: 一句话摘要
lang: zh
permalink: article-path
category: 工作流
publishedAt: 2026-08-17
readingMinutes: 5
draft: true
---

<p>正文使用语义化 HTML。</p>
<h2>第二级标题</h2>
```

HTML 文章不能包含脚本、iframe、表单、内联事件或 `javascript:` URL。需要交互演示时，应在官网组件层实现并经过单独审核，不把可执行代码直接放进文章。

同一文章的不同语言版本使用相同 `permalink`，这样搜索引擎可以识别语言对应关系。只有真实存在的语言版本才会输出 `hreflang`。

## 更新旧文章

- 只修正错别字时不必填写 `updatedAt`；
- 能力、步骤或结论发生实质变化时填写更新日期；
- 删除或修改已公开 permalink 会让旧链接失效，必须同时配置跳转后再更改；
- 文章不得把开发中能力写成已经发布，也不得使用无法核验的评分、用户数量或效率数字。

## 用户反馈在哪里

Blog 不开放评论。用户反馈入口位于官网首页，启用后由 GitHub 承载公开内容。

管理反馈时：

1. 回答可公开解决的问题；
2. 将具体缺陷或需求整理为独立工作项，不在评论线程里承诺发布时间；
3. 删除垃圾信息、隐私泄露和攻击性内容；
4. 需要停止讨论时锁定对应 Issue；
5. 只有取得作者许可且保留可核验来源时，才把反馈整理成官网用户评价。
