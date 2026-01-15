# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production (outputs to dist/)
npm run preview  # Preview production build locally

# Manual deploy to Cloudflare Pages
wrangler pages deploy dist --project-name=aprende-trading
```

Auto-deployment: Pushing to `main` triggers GitHub Actions to build and deploy to Cloudflare Pages.

## Architecture

Spanish-language trading education site built with Astro 5, deployed to Cloudflare Pages.

### Content Structure

- **Blog articles** (`src/content/blog/*.md`): Markdown files with frontmatter schema defined in `src/content.config.ts`. Required fields: `title`, `description`, `pubDate`. Optional: `updatedDate`, `heroImage`.

- **Widget pages** (`src/pages/blog/*.astro`): Special pages like `forex.astro`, `graficos.astro`, `calendario-economico.astro` that embed TradingView widgets rather than using markdown content.

- **Dynamic blog route** (`src/pages/blog/[...slug].astro`): Renders markdown content from the blog collection.

### Key Components

- `TradingViewWidget.astro`: Reusable component for embedding TradingView widgets. Supports types: `market-overview`, `ticker-tape`, `mini-chart`, `technical-analysis`, `economic-calendar`, `forex-cross-rates`, `advanced-chart`.

- `src/consts.ts`: Site-wide constants (SITE_TITLE, SITE_DESCRIPTION).

### Deployment

- **GitHub Secret required**: `CLOUDFLARE_API_TOKEN` for the Trade the Day Cloudflare account
- **Account ID**: `aa0e0c2dc9970514c7bd624c985284a8`
- **Project name**: `aprende-trading`
