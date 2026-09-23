# Decisions

Short log of technical decisions: what was chosen, why, and what was rejected.

## 1. Next.js (App Router) instead of a Vite SPA

**Decision:** Next.js with the App Router.
**Why:** this is a content site. Game pages need to be indexed by search engines and load fast, so HTML is rendered on the server. The IGDB API also requires a server anyway: CORS is closed and the credentials must never reach the browser. Next.js gives routing, server rendering, caching and a server runtime out of the box.
**Rejected:** Vite SPA - the page is rendered in the browser, so search engines see an empty HTML shell, and a separate backend would be needed to call IGDB.

## 2. shadcn/ui on Radix

**Decision:** shadcn/ui with Radix primitives, Nova preset as a neutral starting point.
**Why:** accessible primitives (Dialog, Sheet, Select) without writing them from scratch. Radix has a familiar API (`asChild`) and the most examples. The preset only sets defaults - the theme will be adjusted to the final design.
**Rejected:** Base UI - the new shadcn default, but a new API to learn with no benefit for this project.