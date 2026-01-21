# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production (outputs to dist/)
npm run preview  # Preview production build locally
```

Auto-deployment: Pushing to `main` triggers GitHub Actions to build and deploy to Cloudflare Pages.

Manual deploy: `wrangler pages deploy dist --project-name=aprende-trading`

## Architecture

Spanish-language trading education site built with Astro 5, deployed to Cloudflare Pages.

### Content Types

**Markdown articles** (`src/content/blog/*.md`): Standard blog posts with frontmatter. Schema in `src/content.config.ts` requires `title`, `description`, `pubDate`. Rendered via `src/pages/blog/[...slug].astro`.

**Widget pages** (`src/pages/blog/*.astro`): Standalone pages with TradingView embeds. These take priority over markdown files with the same slug. Current widget pages:
- Currency pages: `forex.astro`, `dolar-estadounidense.astro`, `euro.astro`, `libra-esterlina.astro`, `yen-japones.astro`, `franco-suizo.astro`, `dolar-canadiense.astro`, `dolar-australiano.astro`, `dolar-neozelandes.astro`, `dolar-hong-kong.astro`
- Tool pages: `graficos.astro`, `calendario-economico.astro`, `convertidor-de-moneda.astro`, `mercados-de-divisas.astro`
- Reference: `glosario.astro`

### TradingViewWidget Component

`src/components/TradingViewWidget.astro` embeds TradingView widgets. Types:
- `market-overview`: Multi-symbol price list with chart
- `advanced-chart`: Full interactive chart for single symbol
- `economic-calendar`: Economic events calendar
- `forex-cross-rates`: Currency cross-rate matrix
- `technical-analysis`: Technical indicators summary
- `ticker-tape`: Scrolling price ticker
- `mini-chart`: Compact single-symbol chart

Usage: `<TradingViewWidget type="advanced-chart" symbol="FX:EURUSD" height={500} />`

### Layout Structure

Pages use MH Magazine-style layout with main content + sidebar. Key components:
- `Header.astro`: Navigation with dropdown menus
- `Sidebar.astro`: Widget sidebar
- `BlogPost.astro`: Layout for markdown posts

## Deployment

- GitHub Secret: `CLOUDFLARE_API_TOKEN`
- Account ID: `aa0e0c2dc9970514c7bd624c985284a8`
- Project: `aprende-trading`
- Live URL: https://aprende-trading.com
