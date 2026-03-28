---
sidebar_position: 12
---

# Cloudflare Workers Containers — Hono Template

`CROW-B3/cloudflare-workers-containers-hono-template` is a starter for building Cloudflare Workers applications using the **Hono** web framework, with requests routed to a serverless container backend via `@cloudflare/containers`.

- **GitHub**: [CROW-B3/cloudflare-workers-containers-hono-template](https://github.com/CROW-B3/cloudflare-workers-containers-hono-template)
- **Live Demo**: [cloudflare-workers-containers-hono-template.bitbybit-b3.workers.dev](https://cloudflare-workers-containers-hono-template.bitbybit-b3.workers.dev)
- **License**: MIT

## Features

- **Hono** — fast, lightweight web framework with type-safe routing
- **Cloudflare Workers Containers** — spin up serverless containers from your Worker
- **OpenAPI / Swagger** — auto-generated API docs via Zod schema validation
- **TypeScript** — full type safety throughout
- **ESLint + Prettier** — pre-configured with best practices
- **Husky + lint-staged + commitlint** — automated code quality and conventional commits

## Getting Started

```bash
git clone https://github.com/CROW-B3/cloudflare-workers-containers-hono-template.git
cd cloudflare-workers-containers-hono-template
bun install
bun run dev
```

## Available Scripts

| Command | Description |
|---|---|
| `bun run dev` | Start Wrangler dev server |
| `bun run deploy` | Minify and deploy to Cloudflare Workers |
| `bun run cf-typegen` | Generate TypeScript types for Cloudflare bindings |
| `bun run lint` | Run ESLint |
| `bun run format` | Format with Prettier |

## Deployment

```bash
bun run deploy
```

This minifies your worker bundle and deploys it to Cloudflare's edge network.

## Configuration

Edit `wrangler.jsonc` to configure:
- Worker name and compatibility date
- Container bindings and Durable Object definitions
- KV, R2, D1, and Queue bindings

After adding or changing bindings, regenerate TypeScript types:

```bash
bun run cf-typegen
```

## How It Works

The Hono worker acts as the edge router. It receives all incoming HTTP requests, applies any middleware (auth, rate limiting, etc.), and then forwards requests to the appropriate container instance via the `@cloudflare/containers` binding. The container runs your application logic and returns a response back through the Worker.

```
Request → Cloudflare Edge → Hono Worker → Container → Response
```

## Resources

- [Hono Documentation](https://hono.dev)
- [Cloudflare Workers Containers Docs](https://developers.cloudflare.com/workers/containers/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
