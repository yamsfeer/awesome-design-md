# Awesome DESIGN.md

[中文文档](README_zh.md)

Copy a DESIGN.md into your project, tell your AI agent "build me a page that looks like this" and get pixel-perfect UI that actually matches.

![DESIGN.md Count](https://img.shields.io/badge/DESIGN.md%20count-59-10b981?style=flat-square)
[![Gallery](https://img.shields.io/badge/gallery-live-blue?style=flat-square)](https://yamsfeer.github.io/awesome-design-md/)

## What is DESIGN.md?

[DESIGN.md](https://stitch.withgoogle.com/docs/design-md/overview/) is a concept introduced by Google Stitch. A plain-text design system document that AI agents read to generate consistent UI.

It's just a markdown file. No Figma exports, no JSON schemas, no special tooling. Drop it into your project root and any AI coding agent or Google Stitch instantly understands how your UI should look. Markdown is the format LLMs read best, so there's nothing to parse or configure.

| File | Who reads it | What it defines |
|------|-------------|-----------------|
| `AGENTS.md` | Coding agents | How to build the project |
| `DESIGN.md` | Design agents | How the project should look and feel |

**This repo provides ready-to-use DESIGN.md files** extracted from real websites.

## Gallery

Browse all designs visually at [yamsfeer.github.io/awesome-design-md](https://yamsfeer.github.io/awesome-design-md/).

## CLI

A command-line tool to list, preview, and install designs. Zero dependencies.

```bash
# Install globally
npm install -g awesome-design-md

# List all designs
awesome-design list

# Filter by category
awesome-design list --category "AI & Machine Learning"

# Search
awesome-design list --search stripe

# JSON output
awesome-design list --json

# Preview in browser
awesome-design preview claude
awesome-design preview claude --dark

# Install DESIGN.md to your project
awesome-design install claude ./my-project

# Install full directory (includes previews)
awesome-design install claude ./my-project --full

# Overwrite existing files
awesome-design install claude ./my-project --force
```

Or use without installing: `npx awesome-design-md list`

## What's Inside Each DESIGN.md

Every file follows the [Stitch DESIGN.md format](https://stitch.withgoogle.com/docs/design-md/format/) with extended sections:

| # | Section | What it captures |
|---|---------|-----------------|
| 1 | Visual Theme & Atmosphere | Mood, density, design philosophy |
| 2 | Color Palette & Roles | Semantic name + hex + functional role |
| 3 | Typography Rules | Font families, full hierarchy table |
| 4 | Component Stylings | Buttons, cards, inputs, navigation with states |
| 5 | Layout Principles | Spacing scale, grid, whitespace philosophy |
| 6 | Depth & Elevation | Shadow system, surface hierarchy |
| 7 | Do's and Don'ts | Design guardrails and anti-patterns |
| 8 | Responsive Behavior | Breakpoints, touch targets, collapsing strategy |
| 9 | Agent Prompt Guide | Quick color reference, ready-to-use prompts |

Each site includes:

| File | Purpose |
|------|---------|
| `DESIGN.md` | The design system (what agents read) |
| `preview.html` | Visual catalog showing color swatches, type scale, buttons, cards |
| `preview-dark.html` | Same catalog with dark surfaces |

## How to Use

1. Copy a site's `DESIGN.md` into your project root
2. Tell your AI agent to use it

## Collection

### AI & Machine Learning

- [**Claude**](design-md/claude/DESIGN.md) - Anthropic's AI assistant. Warm terracotta accent, clean editorial layout
- [**Cohere**](design-md/cohere/DESIGN.md) - Enterprise AI platform. Vibrant gradients, data-rich dashboard aesthetic
- [**ElevenLabs**](design-md/elevenlabs/DESIGN.md) - AI voice platform. Dark cinematic UI, audio-waveform aesthetics
- [**Minimax**](design-md/minimax/DESIGN.md) - AI model provider. Bold dark interface with neon accents
- [**Mistral AI**](design-md/mistral.ai/DESIGN.md) - Open-weight LLM provider. French-engineered minimalism, purple-toned
- [**Ollama**](design-md/ollama/DESIGN.md) - Run LLMs locally. Terminal-first, monochrome simplicity
- [**OpenCode AI**](design-md/opencode.ai/DESIGN.md) - AI coding platform. Developer-centric dark theme
- [**Replicate**](design-md/replicate/DESIGN.md) - Run ML models via API. Clean white canvas, code-forward
- [**RunwayML**](design-md/runwayml/DESIGN.md) - AI video generation. Cinematic dark UI, media-rich layout
- [**Together AI**](design-md/together.ai/DESIGN.md) - Open-source AI infrastructure. Technical, blueprint-style design
- [**VoltAgent**](design-md/voltagent/DESIGN.md) - AI agent framework. Void-black canvas, emerald accent, terminal-native
- [**xAI**](design-md/x.ai/DESIGN.md) - Elon Musk's AI lab. Stark monochrome, futuristic minimalism

### Developer Tools & Platforms

- [**Cursor**](design-md/cursor/DESIGN.md) - AI-first code editor. Sleek dark interface, gradient accents
- [**Expo**](design-md/expo/DESIGN.md) - React Native platform. Dark theme, tight letter-spacing, code-centric
- [**Linear**](design-md/linear.app/DESIGN.md) - Project management for engineers. Ultra-minimal, precise, purple accent
- [**Lovable**](design-md/lovable/DESIGN.md) - AI full-stack builder. Playful gradients, friendly dev aesthetic
- [**Mintlify**](design-md/mintlify/DESIGN.md) - Documentation platform. Clean, green-accented, reading-optimized
- [**PostHog**](design-md/posthog/DESIGN.md) - Product analytics. Playful hedgehog branding, developer-friendly dark UI
- [**Raycast**](design-md/raycast/DESIGN.md) - Productivity launcher. Sleek dark chrome, vibrant gradient accents
- [**Resend**](design-md/resend/DESIGN.md) - Email API for developers. Minimal dark theme, monospace accents
- [**Sentry**](design-md/sentry/DESIGN.md) - Error monitoring. Dark dashboard, data-dense, pink-purple accent
- [**Supabase**](design-md/supabase/DESIGN.md) - Open-source Firebase alternative. Dark emerald theme, code-first
- [**Superhuman**](design-md/superhuman/DESIGN.md) - Fast email client. Premium dark UI, keyboard-first, purple glow
- [**Vercel**](design-md/vercel/DESIGN.md) - Frontend deployment platform. Black and white precision, Geist font
- [**Warp**](design-md/warp/DESIGN.md) - Modern terminal. Dark IDE-like interface, block-based command UI
- [**Zapier**](design-md/zapier/DESIGN.md) - Automation platform. Warm orange, friendly illustration-driven

### Infrastructure & Cloud

- [**ClickHouse**](design-md/clickhouse/DESIGN.md) - Fast analytics database. Yellow-accented, technical documentation style
- [**Composio**](design-md/composio/DESIGN.md) - Tool integration platform. Modern dark with colorful integration icons
- [**HashiCorp**](design-md/hashicorp/DESIGN.md) - Infrastructure automation. Enterprise-clean, black and white
- [**MongoDB**](design-md/mongodb/DESIGN.md) - Document database. Green leaf branding, developer documentation focus
- [**Sanity**](design-md/sanity/DESIGN.md) - Headless CMS. Red accent, content-first editorial layout
- [**Stripe**](design-md/stripe/DESIGN.md) - Payment infrastructure. Signature purple gradients, weight-300 elegance

### Design & Productivity

- [**Airtable**](design-md/airtable/DESIGN.md) - Spreadsheet-database hybrid. Colorful, friendly, structured data aesthetic
- [**Cal.com**](design-md/cal/DESIGN.md) - Open-source scheduling. Clean neutral UI, developer-oriented simplicity
- [**Clay**](design-md/clay/DESIGN.md) - Creative agency. Organic shapes, soft gradients, art-directed layout
- [**Figma**](design-md/figma/DESIGN.md) - Collaborative design tool. Vibrant multi-color, playful yet professional
- [**Framer**](design-md/framer/DESIGN.md) - Website builder. Bold black and blue, motion-first, design-forward
- [**Intercom**](design-md/intercom/DESIGN.md) - Customer messaging. Friendly blue palette, conversational UI patterns
- [**Miro**](design-md/miro/DESIGN.md) - Visual collaboration. Bright yellow accent, infinite canvas aesthetic
- [**Notion**](design-md/notion/DESIGN.md) - All-in-one workspace. Warm minimalism, serif headings, soft surfaces
- [**Pinterest**](design-md/pinterest/DESIGN.md) - Visual discovery platform. Red accent, masonry grid, image-first
- [**Webflow**](design-md/webflow/DESIGN.md) - Visual web builder. Blue-accented, polished marketing site aesthetic

### Fintech & Crypto

- [**Coinbase**](design-md/coinbase/DESIGN.md) - Crypto exchange. Clean blue identity, trust-focused, institutional feel
- [**Kraken**](design-md/kraken/DESIGN.md) - Crypto trading platform. Purple-accented dark UI, data-dense dashboards
- [**Revolut**](design-md/revolut/DESIGN.md) - Digital banking. Sleek dark interface, gradient cards, fintech precision
- [**Wise**](design-md/wise/DESIGN.md) - International money transfer. Bright green accent, friendly and clear

### Enterprise & Consumer

- [**Airbnb**](design-md/airbnb/DESIGN.md) - Travel marketplace. Warm coral accent, photography-driven, rounded UI
- [**Apple**](design-md/apple/DESIGN.md) - Consumer electronics. Premium white space, SF Pro, cinematic imagery
- [**IBM**](design-md/ibm/DESIGN.md) - Enterprise technology. Carbon design system, structured blue palette
- [**NVIDIA**](design-md/nvidia/DESIGN.md) - GPU computing. Green-black energy, technical power aesthetic
- [**SpaceX**](design-md/spacex/DESIGN.md) - Space technology. Stark black and white, full-bleed imagery, futuristic
- [**Spotify**](design-md/spotify/DESIGN.md) - Music streaming. Vibrant green on dark, bold type, album-art-driven
- [**Uber**](design-md/uber/DESIGN.md) - Mobility platform. Bold black and white, tight type, urban energy

### Car Brands

- [**BMW**](design-md/bmw/DESIGN.md) - Luxury automotive. Dark premium surfaces, precise German engineering aesthetic
- [**Ferrari**](design-md/ferrari/DESIGN.md) - Luxury automotive. Chiaroscuro black-white editorial, Ferrari Red with extreme sparseness
- [**Lamborghini**](design-md/lamborghini/DESIGN.md) - Luxury automotive. True black cathedral, gold accent, LamboType custom Neo-Grotesk
- [**Renault**](design-md/renault/DESIGN.md) - French automotive. Vivid aurora gradients, NouvelR proprietary typeface, zero-radius buttons
- [**Tesla**](design-md/tesla/DESIGN.md) - Electric vehicles. Radical subtraction, cinematic full-viewport photography, Universal Sans

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

- **Improve existing files**: Fix wrong colors, missing tokens, weak descriptions
- **Add new designs**: Follow the existing format and structure

Before opening a PR, please [open an issue](https://github.com/yamsfeer/awesome-design-md/issues) first to discuss your idea.

## License

MIT License - see [LICENSE](LICENSE)

This repository is a curated collection of design system documents extracted from public websites. All DESIGN.md files are provided "as is" without warranty. The extracted design tokens represent publicly visible CSS values. We do not claim ownership of any site's visual identity. These documents exist to help AI agents generate consistent UI.
