# Customize Checklist

## 公开页面管理原则

- 首页 `index.html`：只放精选文章、项目入口和整体导览。
- 项目页 `projects.html`：维护真实项目，并保留模板展示入口。
- 模板页 `templates.html`：给别人看博客设计支撑和可复用发布流程。
- 归档页 `archive.html`：所有文章入口都要在这里出现。
- 关于页 `about.html`：只维护联系方式、社交链接和反馈入口。
- 模板文件 `content-templates/`：给 `templates.html` 展示，也给自己写作复用。

## 已完成的基础设置

### about.html
- 微信二维码：已收到二维码图片，建议后续保存到 `assets/` 并在页面中直接展示。
- YouTube 频道：已设置为 `https://www.youtube.com/@LNTOM-L`
- 联系入口：已改为 GitHub Issues。

### GitHub Pages
- 自动部署 workflow 已配置。
- 发布地址为 `https://lnotm.github.io/my-blog/`。

## 发布新文章检查

1. 新建或更新 `posts/<slug>.html`。
2. 更新 `archive.html`。
3. 需要首页推荐时，更新 `index.html`。
4. 更新 `feed.xml`。
5. 更新 `sitemap.xml`。
6. 本地检查链接，再提交到 `main`。

## 更新项目检查

1. 只修改 `projects.html`。
2. 每个真实项目保留一句话说明、技术栈、仓库或演示链接。
3. 如果项目有配套文章，从项目卡片链接到文章。
4. 保留 `Blog Template Kit` 卡片，让访客可以查看模板设计支撑。

## 可选优化

- 把微信二维码保存到 `assets/wechat-qr.jpg` 并在 `about.html` 展示。
- 替换 `assets/icon.svg` 为正式站点图标。
- 把示例文章换成正式首批内容。
- 如果文章数量增加到 10 篇以上，再考虑迁移到 Astro、Hugo 或 Jekyll。
