# Game Catalog

A video game catalog built on Next.js and the IGDB API: browse games, open a game page, and (later) curated collections managed through an admin panel.

**Status: in progress.** Route skeleton and layout are done; the server-side IGDB client is being built now. See the roadmap below.

**[Live](https://game-catalog-khat.vercel.app/)**

## Stack

- Next.js 16 (App Router), React 19, TypeScript (strict)
- Tailwind CSS v4, shadcn/ui (Radix)
- IGDB API via Twitch OAuth (client credentials), server-only
- Vercel, pnpm, Node 24 LTS
- Planned: Zod, PostgreSQL + Drizzle ORM with migrations, Docker Compose for local dev, React Hook Form

## Architecture

- `src/app` is a thin layer: pages, route handlers and server actions. They validate input, call a service and return the result.
- `src/server/igdb` holds the token, requests and response schemas. It is marked `server-only`, so the Twitch credentials never reach the browser.
- `src/server/services` holds business logic and access checks.
- Pages read data through services directly, not by fetching their own route handlers.

Why Next.js instead of a Vite SPA, and other decisions, are logged in [decisions.md](decisions.md).

## Roadmap

- [x] Layer 0: project setup, deploy on Vercel, decisions log
- [~] Layer 1: route skeleton and header (done); IGDB client with token caching, request deduplication, retry on 401 and handling of 429/5xx; Zod schemas; catalog and game pages with real data
- [ ] Layer 2: caching and static generation within IGDB rate limits, revalidation
- [ ] Layer 3: own data: PostgreSQL + Drizzle, migrations, admin panel for collections, server actions
- [ ] Layer 4: filters, search, sorting and pagination in the URL
- [ ] Layer 5: metadata, sitemap, JSON-LD, accessibility and Lighthouse pass

## Getting started

```bash
pnpm install
cp .env.example .env.local   # Twitch client id and secret
pnpm dev
```