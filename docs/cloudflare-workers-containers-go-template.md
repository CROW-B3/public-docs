---
sidebar_position: 14
---

# Cloudflare Workers Containers — Go Template

`CROW-B3/cloudflare-workers-containers-go-template` is a starter for running **Go** applications in Cloudflare Workers Containers — containerised Go at the global edge.

- **GitHub**: [CROW-B3/cloudflare-workers-containers-go-template](https://github.com/CROW-B3/cloudflare-workers-containers-go-template)
- **Live Demo**: [cloudflare-workers-containers-go-template.bitbybit-b3.workers.dev](https://cloudflare-workers-containers-go-template.bitbybit-b3.workers.dev)
- **License**: MIT

## Features

- Go application running inside a Cloudflare Workers Container
- TypeScript Worker as the edge entry point (routing, auth, rate limiting)
- Up to 10 container instances via Durable Objects
- Smart placement for optimal global latency
- Logpush observability enabled by default
- GitHub Actions CI/CD included

## Getting Started

```bash
git clone https://github.com/CROW-B3/cloudflare-workers-containers-go-template.git
cd cloudflare-workers-containers-go-template
bun install
bun run dev
```

## Deployment

```bash
bun run deploy
```

This builds the Go Docker container, pushes it to Cloudflare, and deploys it globally.

## Architecture

```
Request → Cloudflare Edge → TypeScript Worker → Go Container → Response
```

The TypeScript Worker (`src/index.ts`) is the edge entry point. It forwards requests to the Go container via the `MY_CONTAINER` Durable Object binding. The container runs your Go HTTP server.

## Configuration

The `wrangler.jsonc` includes:

```jsonc
{
  "containers": [
    {
      "class_name": "MyContainer",
      "image": "./Dockerfile",
      "max_instances": 10
    }
  ],
  "placement": { "mode": "smart" },
  "observability": { "enabled": true },
  "logpush": true
}
```

Adjust `max_instances`, add KV/R2/D1 bindings, and configure routes in `wrangler.jsonc` to match your application needs.

## Resources

- [Cloudflare Workers Containers Docs](https://developers.cloudflare.com/workers/containers/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- [Go Documentation](https://go.dev/doc/)
