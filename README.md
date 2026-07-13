# LNOTM / my-blog

一个部署在 GitHub Pages 上的静态个人博客，保留像素场景气质、文章页阅读体验，以及暮色 / 晴天主题切换。

## 当前公开页面

- `index.html`：首页，负责导览和精选内容
- `projects.html`：项目页，只维护真实项目和作品入口
- `archive.html`：归档页，集中维护全部文章入口
- `about.html`：关于页，集中维护联系方式和社交链接
- `posts/`：文章页面
- `404.html`：错误页

## 内部管理文件

- `content-templates/`：写作模板和发布检查清单，不作为公开导航入口
- `templates.html`：旧模板中心页面，暂时保留但不再从导航展示
- `CUSTOMIZE.md`：站点个性化检查清单
- `PUBLISHING.md`：发布检查说明
- `.github/workflows/deploy-pages.yml`：GitHub Pages 自动部署

## 日常管理流程

### 发布新文章

1. 从 `content-templates/technical-article-template.md` 复制结构起草文章。
2. 新建 `posts/<slug>.html`，把文章正文整理成正式页面。
3. 在 `archive.html` 增加文章入口。
4. 如果文章适合作为精选内容，再更新 `index.html` 的文章卡片。
5. 更新 `feed.xml` 和 `sitemap.xml`。
6. 提交并 push 到 `main`，GitHub Actions 会自动发布。

### 更新项目

1. 只在 `projects.html` 维护项目卡片。
2. 每个项目卡片保留：项目名、简短说明、技术栈、仓库或演示入口。
3. 文章里可以链接项目，但不要重复维护项目详情。

### 更新联系方式

1. 只在 `about.html` 维护 GitHub、YouTube、微信、反馈入口。
2. 如果后续要展示微信二维码，把图片放到 `assets/`，再从 `about.html` 引用。

## GitHub Pages 发布方式

1. 推送到 `main` 分支。
2. GitHub Actions 自动运行 `.github/workflows/deploy-pages.yml`。
3. 发布地址：`https://lnotm.github.io/my-blog/`

## GitHub 仓库 About 建议

- Description：`A static personal blog built for GitHub Pages.`
- Website：`https://lnotm.github.io/my-blog/`
- Topics：`blog`, `github-pages`, `static-site`, `html`, `css`, `personal-website`
