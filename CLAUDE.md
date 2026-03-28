# London Desperados Cricket Club Website

## What
Official website for London Desperados CC, a cricket club in London (Est. 2019, Play Cricket site ID: 19891).

## Stack
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss`, tw-animate-css, shadcn/ui (new-york style)
- **Fonts**: Bebas Neue (display), Roboto Condensed (subheadings), Inter (body), Oswald (accents)
- **Package manager**: pnpm
- **Deployment**: Vercel (with Analytics + Speed Insights)

## Architecture
- Server Components by default; `"use client"` only for interactive parts (Header, FixtureTabs, HomeFixtures, HomeStats, Contact, ErrorBoundary, NotFound, ScrollReveal, AnimatedCounter)
- Play Cricket API integration in `lib/play-cricket.ts` (server-only, env var `PLAY_CRICKET_API_TOKEN`). Falls back to hard-coded data if API key is missing or call fails.
- 15-minute ISR revalidation on API fetches

## Key Directories
- `app/` — Pages (home, about, teams, fixtures, news, contact, privacy, terms, not-found)
- `components/` — Header, Footer, ErrorBoundary, FixtureTabs, HomeFixtures, HomeStats, ScrollReveal, AnimatedCounter + `ui/` (shadcn)
- `lib/` — utils.ts, play-cricket.ts
- `types/` — cricket.ts (Play Cricket API + normalized UI types)
- `hooks/` — useMobile, useComposition, usePersistFn

## CSS Notes
- tw-animate-css import: `@import "../node_modules/tw-animate-css/dist/tw-animate.css"`
- Custom CSS classes: `.diagonal-both`, `.diagonal-top`, `.diagonal-bottom` (clip-path dividers), `.scroll-reveal`, `.card-hover-lift`, `.gradient-text`, `.shimmer-badge`, `.bg-dots`, `.bg-grid`, `.glow-divider`
- Hero animations: `.hero-fade-in-up`, `.hero-ken-burns`, `.hero-accent-line`, `.hero-pulse-glow`
