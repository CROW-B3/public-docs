---
sidebar_position: 5
title: Cloudflare Workers Containers Go Template
---

# Cloudflare Workers Containers Go Template

A starter for building a Go HTTP service behind a Cloudflare Worker using Workers Containers.

## Overview

This template pairs a TypeScript edge worker with a Go container application. The worker uses `@cloudflare/containers` and Durable Objects to start, reuse, and load-balance container instances while keeping the public API on Cloudflare's edge.

**Key Features:**
- Go HTTP server in `container_src/main.go`
- Cloudflare Workers Containers support via `@cloudflare/containers`
- Hono-based edge routing layer in `src/index.ts`
- Durable Object-backed container lifecycle management
- Smart placement enabled in `wrangler.jsonc`
- Example routes for singleton access, per-ID containers, load balancing, and error handling

## Getting Started

### Installation

```bash
git clone https://github.com/CROW-B3/cloudflare-workers-containers-go-template.git
cd cloudflare-workers-containers-go-template
bun install
bun run dev
```

### Deployment

```bash
bun run deploy
```

Wrangler builds the Docker image from `Dockerfile`, uploads it to Cloudflare, and deploys the worker and container class together.

## Architecture

The worker exposes four example routes:

- `GET /container/:id` -- start or reuse a named container instance
- `GET /lb` -- load balance across a small pool of container instances
- `GET /singleton` -- target one shared container instance
- `GET /error` -- trigger container error handling for local testing

Inside the container, the Go service reads `MESSAGE` and `CLOUDFLARE_DURABLE_OBJECT_ID` from the environment and responds over port `8080`.

## Project Structure

```text
cloudflare-workers-containers-go-template/
├── src/index.ts          # Edge worker and container routing
├── container_src/main.go # Go HTTP server
├── Dockerfile            # Container build
├── wrangler.jsonc        # Worker + container configuration
└── package.json          # Dev and deploy scripts
```

## Resources

- **Repository**: [GitHub](https://github.com/CROW-B3/cloudflare-workers-containers-go-template)
- **Cloudflare Containers Docs**: [developers.cloudflare.com/containers](https://developers.cloudflare.com/containers/)
- **Go Documentation**: [go.dev](https://go.dev/)
- **License**: MIT
