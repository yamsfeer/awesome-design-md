# Awesome DESIGN.md

[English](README.md)

把 DESIGN.md 复制到你的项目里，告诉 AI 代理"按照这个风格生成页面"，就能得到精确匹配的 UI。

![DESIGN.md 数量](https://img.shields.io/badge/DESIGN.md%20count-59-10b981?style=flat-square)
[![画廊](https://img.shields.io/badge/%E7%94%BB%E5%BB%8A-live-blue?style=flat-square)](https://yamsfeer.github.io/awesome-design-md/)

## DESIGN.md 是什么？

[DESIGN.md](https://stitch.withgoogle.com/docs/design-md/overview/) 是 Google Stitch 提出的概念。一个纯文本的设计系统文档，AI 代理读取后可以生成风格一致的 UI。

它就是一个 Markdown 文件。不需要 Figma 导出，不需要 JSON Schema，不需要特殊工具。放到项目根目录，任何 AI 编码代理或 Google Stitch 都能立刻理解你的 UI 应该长什么样。Markdown 是 LLM 最擅长阅读的格式，无需解析或配置。

| 文件 | 谁来读 | 定义了什么 |
|------|--------|-----------|
| `AGENTS.md` | 编码代理 | 如何构建项目 |
| `DESIGN.md` | 设计代理 | 项目应该长什么样、感觉如何 |

**本仓库提供了从真实网站提取的、可直接使用的 DESIGN.md 文件。**

## 画廊

在 [yamsfeer.github.io/awesome-design-md](https://yamsfeer.github.io/awesome-design-md/) 可视化浏览所有设计。

## CLI

命令行工具，用于列出、预览和安装设计。零依赖。

```bash
# 全局安装
npm install -g awesome-design-md

# 列出所有设计
awesome-design list

# 按分类筛选
awesome-design list --category "AI & Machine Learning"

# 搜索
awesome-design list --search stripe

# JSON 输出
awesome-design list --json

# 在浏览器中预览
awesome-design preview claude
awesome-design preview claude --dark

# 安装 DESIGN.md 到你的项目
awesome-design install claude ./my-project

# 安装完整目录（包含预览文件）
awesome-design install claude ./my-project --full

# 覆盖已有文件
awesome-design install claude ./my-project --force
```

也可以不安装直接使用：`npx awesome-design-md list`

## 每个 DESIGN.md 包含什么

每个文件遵循 [Stitch DESIGN.md 格式](https://stitch.withgoogle.com/docs/design-md/format/)，并扩展了更多章节：

| # | 章节 | 描述的内容 |
|---|------|-----------|
| 1 | 视觉主题与氛围 | 情绪、密度、设计哲学 |
| 2 | 色彩调色板与角色 | 语义化名称 + 十六进制值 + 功能角色 |
| 3 | 排版规则 | 字体族、完整层级表 |
| 4 | 组件样式 | 按钮、卡片、输入框、导航及各状态 |
| 5 | 布局原则 | 间距系统、网格、留白哲学 |
| 6 | 深度与层次 | 阴影系统、表面层级 |
| 7 | 宜与忌 | 设计约束和反模式 |
| 8 | 响应式行为 | 断点、触控目标、折叠策略 |
| 9 | 代理提示指南 | 快速颜色参考、可直接使用的提示词 |

每个站点包含：

| 文件 | 用途 |
|------|------|
| `DESIGN.md` | 设计系统文档（AI 代理读取的内容） |
| `preview.html` | 可视化目录：色板、字体层级、按钮、卡片 |
| `preview-dark.html` | 暗色模式下的可视化目录 |

## 如何使用

1. 将某个站点的 `DESIGN.md` 复制到你的项目根目录
2. 告诉你的 AI 代理使用它

## 合集

### AI 与机器学习

- [**Claude**](design-md/claude/DESIGN.md) - Anthropic 的 AI 助手。温暖的赤陶色点缀，干净的编辑排版
- [**Cohere**](design-md/cohere/DESIGN.md) - 企业 AI 平台。鲜明渐变，数据密集的仪表板美学
- [**ElevenLabs**](design-md/elevenlabs/DESIGN.md) - AI 语音平台。暗色电影感 UI，音频波形美学
- [**Minimax**](design-md/minimax/DESIGN.md) - AI 模型提供商。大胆的暗色界面搭配霓虹色点缀
- [**Mistral AI**](design-md/mistral.ai/DESIGN.md) - 开源 LLM 提供商。法式极简主义，紫色调
- [**Ollama**](design-md/ollama/DESIGN.md) - 本地运行 LLM。终端优先，单色简洁
- [**OpenCode AI**](design-md/opencode.ai/DESIGN.md) - AI 编程平台。开发者中心的暗色主题
- [**Replicate**](design-md/replicate/DESIGN.md) - 通过 API 运行 ML 模型。干净的白色画布，代码优先
- [**RunwayML**](design-md/runwayml/DESIGN.md) - AI 视频生成。电影感暗色 UI，媒体丰富的布局
- [**Together AI**](design-md/together.ai/DESIGN.md) - 开源 AI 基础设施。技术感、蓝图风格设计
- [**VoltAgent**](design-md/voltagent/DESIGN.md) - AI 代理框架。深黑画布，翡翠色点缀，终端原生
- [**xAI**](design-md/x.ai/DESIGN.md) - Elon Musk 的 AI 实验室。极端单色，未来主义极简

### 开发者工具与平台

- [**Cursor**](design-md/cursor/DESIGN.md) - AI 优先的代码编辑器。流畅暗色界面，渐变点缀
- [**Expo**](design-md/expo/DESIGN.md) - React Native 平台。暗色主题，紧凑字距，代码为中心
- [**Linear**](design-md/linear.app/DESIGN.md) - 工程师的项目管理。超极简，精确，紫色点缀
- [**Lovable**](design-md/lovable/DESIGN.md) - AI 全栈构建器。活泼渐变，友好的开发者美学
- [**Mintlify**](design-md/mintlify/DESIGN.md) - 文档平台。干净，绿色点缀，阅读优化
- [**PostHog**](design-md/posthog/DESIGN.md) - 产品分析。有趣的刺猬品牌，开发者友好的暗色 UI
- [**Raycast**](design-md/raycast/DESIGN.md) - 效率启动器。流畅暗色界面，鲜亮渐变点缀
- [**Resend**](design-md/resend/DESIGN.md) - 开发者邮件 API。极简暗色主题，等宽字体点缀
- [**Sentry**](design-md/sentry/DESIGN.md) - 错误监控。暗色仪表板，数据密集，粉紫点缀
- [**Supabase**](design-md/supabase/DESIGN.md) - 开源 Firebase 替代品。暗翡翠主题，代码优先
- [**Superhuman**](design-md/superhuman/DESIGN.md) - 高速邮件客户端。高级暗色 UI，键盘优先，紫色光晕
- [**Vercel**](design-md/vercel/DESIGN.md) - 前端部署平台。黑白精准，Geist 字体
- [**Warp**](design-md/warp/DESIGN.md) - 现代终端。暗色 IDE 风格界面，块状命令 UI
- [**Zapier**](design-md/zapier/DESIGN.md) - 自动化平台。温暖橙色，友好的插画风格

### 基础设施与云

- [**ClickHouse**](design-md/clickhouse/DESIGN.md) - 高速分析数据库。黄色点缀，技术文档风格
- [**Composio**](design-md/composio/DESIGN.md) - 工具集成平台。现代暗色，多彩集成图标
- [**HashiCorp**](design-md/hashicorp/DESIGN.md) - 基础设施自动化。企业级简洁，黑白配色
- [**MongoDB**](design-md/mongodb/DESIGN.md) - 文档数据库。绿色树叶品牌，开发者文档风格
- [**Sanity**](design-md/sanity/DESIGN.md) - 无头 CMS。红色点缀，内容优先的编辑排版
- [**Stripe**](design-md/stripe/DESIGN.md) - 支付基础设施。标志性的紫色渐变，300 字重的优雅

### 设计与效率

- [**Airtable**](design-md/airtable/DESIGN.md) - 电子表格-数据库混合体。多彩、友好、结构化数据美学
- [**Cal.com**](design-md/cal/DESIGN.md) - 开源日程安排。干净中性 UI，开发者导向的简洁
- [**Clay**](design-md/clay/DESIGN.md) - 创意机构。有机形状，柔和渐变，艺术化排版
- [**Figma**](design-md/figma/DESIGN.md) - 协作设计工具。鲜艳多色，活泼而专业
- [**Framer**](design-md/framer/DESIGN.md) - 网站构建器。大胆的黑色与蓝色，动效优先，设计导向
- [**Intercom**](design-md/intercom/DESIGN.md) - 客户消息。友好的蓝色调，对话式 UI 模式
- [**Miro**](design-md/miro/DESIGN.md) - 视觉协作。明亮黄色点缀，无限画布美学
- [**Notion**](design-md/notion/DESIGN.md) - 一站式工作空间。温暖极简，衬线标题，柔和表面
- [**Pinterest**](design-md/pinterest/DESIGN.md) - 视觉发现平台。红色点缀，瀑布流网格，图片优先
- [**Webflow**](design-md/webflow/DESIGN.md) - 可视化网页构建器。蓝色点缀，精致的营销站美学

### 金融科技与加密

- [**Coinbase**](design-md/coinbase/DESIGN.md) - 加密货币交易所。干净的蓝色身份，信任导向，机构感
- [**Kraken**](design-md/kraken/DESIGN.md) - 加密货币交易平台。紫色点缀的暗色 UI，数据密集的仪表板
- [**Revolut**](design-md/revolut/DESIGN.md) - 数字银行。流畅暗色界面，渐变卡片，金融科技精准度
- [**Wise**](design-md/wise/DESIGN.md) - 国际汇款。明亮绿色点缀，友好而清晰

### 企业与消费

- [**Airbnb**](design-md/airbnb/DESIGN.md) - 旅行市场。温暖的珊瑚色点缀，摄影驱动，圆润 UI
- [**Apple**](design-md/apple/DESIGN.md) - 消费电子。高级留白，SF Pro 字体，电影感图像
- [**IBM**](design-md/ibm/DESIGN.md) - 企业技术。Carbon 设计系统，结构化蓝色调
- [**NVIDIA**](design-md/nvidia/DESIGN.md) - GPU 计算。绿黑能量，技术力量美学
- [**SpaceX**](design-md/spacex/DESIGN.md) - 太空技术。极端黑白，全出血图像，未来感
- [**Spotify**](design-md/spotify/DESIGN.md) - 音乐流媒体。暗色上的鲜艳绿色，大胆字体，专辑封面驱动
- [**Uber**](design-md/uber/DESIGN.md) - 出行平台。大胆黑白，紧凑字体，都市能量

### 汽车品牌

- [**BMW**](design-md/bmw/DESIGN.md) - 豪华汽车。暗色高级表面，精确的德式工程美学
- [**Ferrari**](design-md/ferrari/DESIGN.md) - 豪华汽车。明暗对比的黑白编辑风格，法拉利红搭配极致稀疏
- [**Lamborghini**](design-md/lamborghini/DESIGN.md) - 豪华汽车。纯黑教堂，金色点缀，LamboType 定制新无衬线体
- [**Renault**](design-md/renault/DESIGN.md) - 法系汽车。鲜明极光渐变，NouvelR 专属字体，零圆角按钮
- [**Tesla**](design-md/tesla/DESIGN.md) - 电动车。极致减法，电影感全视口摄影，Universal Sans 字体

## 贡献

查看 [CONTRIBUTING.md](CONTRIBUTING.md) 了解贡献指南。

- **改进现有文件**：修正错误的颜色、缺失的 token、薄弱的描述
- **添加新设计**：遵循现有格式和结构

提交 PR 之前，请先[开一个 issue](https://github.com/yamsfeer/awesome-design-md/issues) 讨论你的想法。

## 许可证

MIT 许可证 - 详见 [LICENSE](LICENSE)

本仓库是从公开网站提取的设计系统文档的策展集合。所有 DESIGN.md 文件按"原样"提供，不做任何担保。提取的设计 token 代表公开可见的 CSS 值。我们不声称拥有任何网站视觉形象的所有权。这些文档旨在帮助 AI 代理生成一致的 UI。
