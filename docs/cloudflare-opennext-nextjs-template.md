---
sidebar_position: 11
---

# Cloudflare OpenNext.js Template

`CROW-B3/cloudflare-opennext-nextjs-template` is an opinionated starter for deploying **Next.js 15** applications to Cloudflare Workers using the [OpenNext.js](https://opennextjs.org) adapter.

- **GitHub**: [CROW-B3/cloudflare-opennext-nextjs-template](https://github.com/CROW-B3/cloudflare-opennext-nextjs-template)
- **Live Demo**: [cloudflare-opennext-nextjs-template.bitbybit-b3.workers.dev](https://cloudflare-opennext-nextjs-template.bitbybit-b3.workers.dev)
- **License**: MIT

## Features

- **Next.js 15** with App Router, React 19, and TypeScript
- **OpenNext.js** Cloudflare adapter for edge compatibility
- **Tailwind CSS v4** pre-configured
- **Wrangler CLI** integration for local dev and deployment
- **GitHub Actions** CI/CD workflow included
- **Docker** containerisation support
- Incremental Static Regeneration (ISR) support

## Getting Started

```bash
git clone https://github.com/CROW-B3/cloudflare-opennext-nextjs-template.git
cd cloudflare-opennext-nextjs-template
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your app.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Next.js dev server with Turbopack |
| `npm run build` | Build Next.js app and OpenNext.js adapter |
| `npm run deploy` | Build and deploy to Cloudflare Workers |
| `npm run preview` | Preview deployment locally |
| `npm run lint` | Run Next.js ESLint |
| `npm run cf-typegen` | Generate TypeScript types for Cloudflare bindings |

## Deployment

```bash
# Deploy to Cloudflare Workers
npm run deploy
```

The deploy command builds the Next.js app, runs the OpenNext.js adapter to produce a Cloudflare-compatible output, and deploys with Wrangler.

## Configuration

| File | Purpose |
|---|---|
| `next.config.ts` | Next.js configuration |
| `open-next.config.ts` | OpenNext.js adapter settings |
| `wrangler.jsonc` | Cloudflare Worker name, bindings, and routes |

### Environment Variables

```bash
# Set a secret in Cloudflare
wrangler secret put VARIABLE_NAME

# Regenerate TypeScript types after adding bindings
npm run cf-typegen
```

## Edge Rendering

Your Next.js app runs on Cloudflare's global edge network. Static pages are cached and served from the nearest location; dynamic routes run in a V8 isolate with low-latency cold starts.

## Limitations

Be aware of Cloudflare Workers constraints:
- CPU time limit per request (varies by plan)
- Memory constraints
- Maximum script size
- No persistent filesystem (use R2, D1, or KV instead)
