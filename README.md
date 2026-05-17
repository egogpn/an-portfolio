# an-portfolio

This project is built with **TanStack Start** and is currently configured to build a **Cloudflare Worker** (see `dist/server/index.js` + `dist/server/wrangler.json` after `npm run build`).

## Why Vercel shows `404: NOT_FOUND`

Vercel serves either:

- a static site output (expects an `index.html` in the output directory), or
- a Vercel-compatible serverless/edge function output.

This repo's build output is a **Cloudflare Worker** bundle, and the client build does **not** emit an `index.html` (it only emits assets), so Vercel has nothing to render at `/` and returns `NOT_FOUND`.

## Deploy (Cloudflare Workers)

1. Install deps:
   - `npm ci`
2. Build:
   - `npm run build`
3. Run locally (Worker dev server):
   - `npm run preview`
4. Deploy to Cloudflare Workers:
   - `npx wrangler deploy --config dist/server/wrangler.json`

## If you must deploy on Vercel

You’ll need to **change the runtime target** (move away from the Cloudflare Worker adapter) or **convert the app to a pure Vite SPA** (add an `index.html` + client entry and remove TanStack Start SSR).

