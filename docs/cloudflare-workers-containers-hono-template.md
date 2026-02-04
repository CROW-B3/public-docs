# Cloudflare Workers Containers Hono Template

A Hono-powered Cloudflare Worker template that routes requests to a serverless Container backend using Cloudflare Workers Containers.

## Overview

This template provides a modern starter for building Cloudflare Workers applications using the Hono web framework. It's designed to route requests to serverless container backends via `@cloudflare/containers`, combining the power of edge computing with containerized applications.

**Key Features:**
- Fast and lightweight with Hono framework
- Cloudflare Workers Containers support
- OpenAPI/Swagger documentation with Zod schema validation
- Full TypeScript support (75.2% of codebase)
- Modern ESLint configuration
- Code formatting with Prettier
- Git hooks with Husky and lint-staged
- Built-in dev server and deployment scripts
- Commit message validation with commitlint
- Live deployment example available

## Getting Started

### Installation

```bash
git clone https://github.com/CROW-B3/cloudflare-workers-containers-hono-template.git
cd cloudflare-workers-containers-hono-template
bun install
bun run dev  # or wrangler dev
```

### Deployment

```bash
bun run deploy  # Minifies and deploys to Cloudflare's edge network
```

## Available Scripts

- `bun run dev` - Start Wrangler dev server
- `bun run deploy` - Deploy to Cloudflare Workers (minified)
- `bun run cf-typegen` - Generate TypeScript types for Cloudflare bindings
- `bun run lint` / `bun run format` - Code quality tools

## Configuration

Configure your worker in `wrangler.jsonc` with your worker name, compatibility date, and bindings. Generate Cloudflare binding types with `bun run cf-typegen` to create type definitions for KV, D1, R2, and other services.

## Code Quality

The template includes pre-configured ESLint, Prettier, Husky git hooks, lint-staged for staged files, and commitlint for conventional commit messages.

## Resources

- **Repository**: [GitHub](https://github.com/CROW-B3/cloudflare-workers-containers-hono-template)
- **Live Demo**: [cloudflare-workers-containers-hono-template.bitbybit-b3.workers.dev](https://cloudflare-workers-containers-hono-template.bitbybit-b3.workers.dev)
- **Hono Documentation**: [hono.dev](https://hono.dev)
- **Cloudflare Workers Docs**: [developers.cloudflare.com](https://developers.cloudflare.com/workers/)
- **Wrangler CLI**: [developers.cloudflare.com/workers/wrangler](https://developers.cloudflare.com/workers/wrangler/)
- **License**: MIT

## Contributing

Contributions are welcome! Please follow the conventional commits specification for commit messages.
