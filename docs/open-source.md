---
sidebar_position: 7
title: Source Availability
---

# Source Availability

:::caution Not Actively Maintained
CROW is provided **as-is, without warranty or guaranteed support**. The project is not actively maintained — there are no scheduled updates, bug fixes, or security patches. Use at your own risk. Community contributions are welcome but not guaranteed to be reviewed or merged.
:::

The entire CROW platform is **source-available**. Every microservice, client application, SDK, CLI tool, and AI protocol server is available for you to inspect, use, fork, and self-host.

## The Full Platform

CROW consists of 20+ deployable services, all built on **Cloudflare Workers** (many fit within the free tier):

| Category | Services | Tech |
|----------|----------|------|
| **API Gateway** | `core-api-gateway` | Hono, Better Auth, Cloudflare Workers |
| **Core Services** | `core-auth-service`, `core-user-service`, `core-organization-service`, `core-interaction-service`, `core-pattern-service`, `core-product-service`, `core-billing-service`, `core-notification-service`, `core-analytics-service`, `core-chat-service` | Hono, D1, Vectorize, Queues, R2 |
| **AI Protocol Servers** | `mcp-service` (Model Context Protocol), `a2a-service` (Agent-to-Agent) | MCP SDK, A2A SDK, Workers AI |
| **Social Pipeline** | `core-social-collector`, `core-social-processor` | Tavily API, Workers AI, Queues |
| **BFF Services** | `bff-chat-service`, `bff-qna-service` | Workers AI (Llama 3.3 70B), AI Gateway |
| **Ingestion** | `web-ingest-service`, `cctv-ingest-service` | Durable Objects, Queues, Workers AI |
| **Infrastructure** | `infra-crawl-service` | Workers Containers, Puppeteer |
| **Frontend Clients** | `dashboard-client`, `auth-client`, `landing-client` | Next.js 15, OpenNext, React 19 |
| **Demo App** | `rogue-store` | Next.js 15, Tailwind CSS v4 |
| **CLI Tools** | `cctv-cli` | Node.js, RTSP frame capture |
| **SDKs** | `website-hook-sdk` | TypeScript, auto-instrumentation |
| **Component Library** | `ui-kit` | React, Framer Motion, Tailwind CSS v4 |

## Self-Hosting

All services deploy to Cloudflare Workers. To self-host:

**Prerequisites:**
- Cloudflare account (free tier works for most services)
- Node.js 18+ and Wrangler CLI (`npm install -g wrangler`)
- `wrangler login` to authenticate

**Steps:**
1. Clone the repository
2. For each service, configure `wrangler.jsonc` with your Cloudflare account details
3. Create D1 databases: `npx wrangler d1 create <db-name>`
4. Run migrations: `npx wrangler d1 migrations apply <db-name>`
5. Set secrets: `npx wrangler secret put <SECRET_NAME>`
6. Deploy: `npx wrangler deploy`

For Next.js clients (dashboard, auth):
```bash
npx next build && npx opennextjs-cloudflare build && npx wrangler deploy
```

See the **internal-docs** for detailed deployment guides covering Workers Containers, Durable Objects, Queue topology, and domain configuration.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Runtime** | Cloudflare Workers, Workers Containers |
| **Database** | Cloudflare D1 (SQLite) |
| **Vector Search** | Cloudflare Vectorize |
| **Message Queues** | Cloudflare Queues |
| **Object Storage** | Cloudflare R2 |
| **AI Inference** | Cloudflare Workers AI (Llama 3.3 70B), AI Gateway |
| **Auth** | Better Auth (email + Google OAuth) |
| **Payments** | Stripe (Checkout, Portal, Webhooks) |
| **Frontend** | Next.js 15, React 19, Tailwind CSS v4 |
| **Hosting** | OpenNext for Cloudflare |
| **Protocols** | MCP (Model Context Protocol), A2A (Agent-to-Agent) |

## NPM Packages

### UI Kit

A modern React component library built with Framer Motion and Tailwind CSS v4, designed for dark-themed web applications. Includes 40 components across 7 categories.

**Installation:**
```bash
npm install @b3-crow/ui-kit
```

**Resources:**
- **NPM Package**: [`@b3-crow/ui-kit`](https://www.npmjs.com/package/@b3-crow/ui-kit)
- **GitHub Repository**: [CROW-B3/ui-kit](https://github.com/CROW-B3/ui-kit)
- **License**: MIT
- **[Full Documentation](./ui-kit.md)**

### Website Hook SDK

A lightweight JavaScript/TypeScript SDK for capturing user interactions on web pages and sending them into the CROW analytics pipeline. Tracks page views, clicks, scroll depth, errors, performance metrics, session replays, and e-commerce events.

**Installation:**
```bash
npm install @b3-crow/website-hook-sdk
```

**Basic Usage:**
```typescript
import { initializeCrow } from '@b3-crow/website-hook-sdk';

const crow = await initializeCrow({
  apiKey: 'your-api-key',
  projectId: 'your-project-id',
});

// Auto-captures page views, clicks, errors, navigation, performance, and replays.
// Manually track e-commerce events:
crow.trackAddToCart({ productId: 'prod_123', productName: 'Shoes', price: 99.99, quantity: 1 });
```

**Resources:**
- **NPM Package**: [`@b3-crow/website-hook-sdk`](https://www.npmjs.com/package/@b3-crow/website-hook-sdk)
- **GitHub Repository**: [CROW-B3/website-hook-sdk](https://github.com/CROW-B3/website-hook-sdk)
- **License**: MIT
- **[Full Documentation](./website-hook-sdk.md)**
- **[Integration Guide](./integrations/web-sdk.md)**

### CCTV CLI

A command-line tool for ingesting video frames from RTSP camera streams. Supports single-frame capture, continuous sampling, multi-camera configuration, mosaic generation, and local video file processing.

**Installation:**
```bash
npm install -g @b3-crow/cctv-cli
```

**Resources:**
- **NPM Package**: [`@b3-crow/cctv-cli`](https://www.npmjs.com/package/@b3-crow/cctv-cli)
- **GitHub Repository**: [CROW-B3/cctv-cli](https://github.com/CROW-B3/cctv-cli)
- **License**: MIT
- **[Integration Guide](./integrations/cctv-cli.md)**

## Developer Tools

### NPM SDK Template

A template repository for creating NPM packages with TypeScript, ESLint, Prettier, and automated workflows.

**Features:**
- TypeScript configuration optimized for library development
- ESLint and Prettier pre-configured with best practices
- Husky pre-commit hooks for code quality
- GitHub Actions workflows for CI/CD
- Ready for publishing to NPM

**Resources:**
- **GitHub Repository**: [CROW-B3/npm-sdk-template](https://github.com/CROW-B3/npm-sdk-template)
- **License**: MIT

### Local Dev

A developer tool to clone and sync all CROW-B3 repositories with a single command.

**Features:**
- Clone all CROW-B3 repositories at once
- Sync repositories with upstream changes
- Smart dependency installation
- Configurable repository selection

**Installation:**
```bash
git clone https://github.com/CROW-B3/local-dev.git
cd local-dev
bun install
bun run clone
```

**Resources:**
- **GitHub Repository**: [CROW-B3/local-dev](https://github.com/CROW-B3/local-dev)

## Demo Applications

### Rogue Store

A modern e-commerce storefront built with Next.js 15, React 19, and Tailwind CSS v4. Serves as a test bed for CROW integrations and demonstrations.

**Tech Stack:**
- Next.js 15 with App Router
- React 19 and TypeScript
- Tailwind CSS v4
- Radix UI components
- Zustand for state management
- Framer Motion animations
- Playwright E2E testing

**Features:**
- Product catalog with filtering and search
- Shopping cart with persistent storage
- Product variants (size, color, etc.)
- Checkout flow with order tracking
- Fully responsive design
- Dark mode support

**Quick Start:**
```bash
# Using Docker
docker run -p 3000:3000 bitbybitb3/rogue-store:latest

# Or local development
git clone https://github.com/CROW-B3/rogue-store.git
cd rogue-store
pnpm install
pnpm run dev
```

**Resources:**
- **GitHub Repository**: [CROW-B3/rogue-store](https://github.com/CROW-B3/rogue-store)
- **Docker Hub**: [bitbybitb3/rogue-store](https://hub.docker.com/r/bitbybitb3/rogue-store)
- **Live Demo**: Check repository for deployment URL

### Web Ingest Worker

A Cloudflare Worker that receives and processes events from the website-hook-sdk.

**Features:**
- Runs on Cloudflare's edge network
- Validates and transforms incoming events
- Stores events in Cloudflare D1
- Queues events for AI processing
- Low latency global distribution

**Resources:**
- **GitHub Repository**: [CROW-B3/web-ingest-worker](https://github.com/CROW-B3/web-ingest-worker)
- **Blog Post**: [Website Hook SDK Evolution](https://blog.crowai.dev/website-hook-sdk-evolution)

## Contributing

Community contributions are welcome. Since the project is not actively maintained, pull requests may not be reviewed promptly. If you fork the project, you are free to maintain your own version.

General contribution workflow:
1. Fork the repository
2. Create a feature branch
3. Make your changes with tests
4. Run linting and formatting (`bun run lint && bun run format`)
5. Submit a pull request

## Community

- **GitHub Organization**: [CROW-B3](https://github.com/CROW-B3)
- **Engineering Blog**: [blog.crowai.dev](https://blog.crowai.dev)
- **Public Documentation**: [docs.crowai.dev](https://docs.crowai.dev)

## License & Disclaimer

Individual NPM packages (`@b3-crow/ui-kit`, `@b3-crow/website-hook-sdk`, `@b3-crow/cctv-cli`) are released under the **MIT License**. The platform services are **source-available** — see individual repositories for specific license terms.

**This software is provided "as-is" without warranty of any kind. The authors are not liable for any damages arising from its use. You are responsible for your own deployment, security, and compliance.**
