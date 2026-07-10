# LNOTM / my-blog

一个适合 GitHub Pages 的静态个人博客成品目录，保留像素场景气质、文章页阅读体验，以及暮色 / 晴天主题切换。

## 当前包含

- 多页面静态站：首页、项目页、归档页、模板页、关于页、404 页
- 4 篇示例文章和文章页目录 / 阅读进度
- RSS、sitemap、robots、manifest
- 主题切换：默认暮色，可切换晴天并记住选择
- 内容模板：技术文章模板、项目更新模板、发布检查清单、社交链接样例
- GitHub Pages 自动部署工作流

## 仓库结构

- `index.html`：首页
- `about.html`：关于与联系方式结构
- `projects.html`：项目入口页
- `archive.html`：归档页
- `templates.html`：模板中心
- `posts/`：文章页面
- `assets/`：样式、脚本、图标
- `content-templates/`：写作和发布模板
- `.github/workflows/deploy-pages.yml`：GitHub Pages 自动部署

## 发布前建议先替换

1. `about.html` 中的公众号、YouTube、邮箱占位信息
2. `feed.xml`、`sitemap.xml` 中的站点链接（如果仓库名或域名变化）
3. `site.webmanifest` 中的站点标题与主题色（如果你后续想微调）
4. 示例文章内容、作者信息与版权信息

## GitHub Pages 发布方式

### 方式一：GitHub Actions 自动部署

1. 把这个目录内容放到仓库根目录。
2. 推送到 `main` 分支。
3. 在 GitHub 仓库设置里打开 `Pages`。
4. Source 选择 `GitHub Actions`。
5. 之后每次 push 到 `main` 都会自动发布。

### 方式二：直接从仓库根目录发布

1. 把这个目录内容放到仓库根目录。
2. 在 `Settings > Pages` 里选择从分支部署。
3. 选择 `main` 分支和 `/ (root)`。

如果你准备让我直接帮你推送到仓库，下一步只需要给我一个新的 GitHub token，我会在这套目录基础上继续完成仓库发布。