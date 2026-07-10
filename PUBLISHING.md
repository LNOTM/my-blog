# Publishing Guide

## 推荐发布路径

建议使用 GitHub Pages + GitHub Actions。

优点：
- 不需要手动复制到 `gh-pages` 分支
- 每次更新内容后，直接 push 即可自动发布
- 后续加评论、统计、自动生成内容时更好扩展

## 首次发布检查

1. 确认仓库地址是否为 `https://lnotm.github.io/my-blog/`
2. 确认 `feed.xml` 与 `sitemap.xml` 中的链接是否正确
3. 确认 `about.html` 中的以下占位内容已替换：
   - 公众号名称 / 落地页
   - YouTube 频道地址
   - 联系邮箱
4. 刷新本地预览，检查晴天 / 暮色两个主题都正常
5. 检查移动端下导航是否换行正常

## 推荐的首次提交内容

- 整站静态页面
- `assets/` 资源
- `posts/` 示例文章
- `content-templates/` 内容模板
- `.github/workflows/deploy-pages.yml`
- `.nojekyll`

## 后续可继续增强

- 接入 Giscus 评论
- 给文章加统一发布日期与作者信息
- 用脚本自动生成 `feed.xml` 和 `sitemap.xml`
- 把文章数据抽成 JSON 或 Markdown 源文件