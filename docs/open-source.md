---
sidebar_position: 2
---

# Open Source Projects

CROW By B3 maintains several open source projects and developer tools. All projects are available on [GitHub](https://github.com/CROW-B3) under the MIT license unless otherwise specified.

## NPM Packages

### UI Kit

A modern React component library built with Framer Motion and Tailwind CSS v4, designed for dark-themed web applications.

**Features:**
- Beautiful animated components for hero sections and landing pages
- Built with performance in mind using Framer Motion
- TypeScript support with full type definitions
- Tailwind CSS v4 compatible
- Easy to customize and extend

**Installation:**
```bash
bun add @b3-crow/ui-kit
# or
pnpm add @b3-crow/ui-kit
```

**Resources:**
- **NPM Package**: [`@b3-crow/ui-kit`](https://www.npmjs.com/package/@b3-crow/ui-kit)
- **GitHub Repository**: [CROW-B3/ui-kit](https://github.com/CROW-B3/ui-kit)
- **License**: MIT
- **[Full Documentation](./ui-kit.md)**

### Website Hook SDK

A lightweight JavaScript/TypeScript SDK for capturing user interactions on web pages and sending them into the CROW analytics pipeline.

**Features:**
- Lightweight and performant client-side tracking
- TypeScript support
- Captures pageviews, clicks, and custom events
- Integrates with CROW's analytics infrastructure
- Simple integration with any web application

**Installation:**
```bash
bun install @b3-crow/website-hook-sdk
# or
pnpm add @b3-crow/website-hook-sdk
```

**Basic Usage:**
```typescript
import { CrowTracker } from '@b3-crow/website-hook-sdk';

const tracker = new CrowTracker({
  apiKey: 'your-api-key',
  endpoint: 'https://your-endpoint.com'
});

// Track pageview
tracker.trackPageview();

// Track custom event
tracker.trackEvent('button_click', { button_id: 'signup' });
```

**Resources:**
- **NPM Package**: [`@b3-crow/website-hook-sdk`](https://www.npmjs.com/package/@b3-crow/website-hook-sdk)
- **GitHub Repository**: [CROW-B3/website-hook-sdk](https://github.com/CROW-B3/website-hook-sdk)
- **License**: MIT
- **Blog Post**: [Website Hook SDK Evolution](https://blog.crowai.dev/website-hook-sdk-evolution)

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

We welcome contributions to all our open source projects! Each repository has its own contribution guidelines. Please check the individual repository README files for specific instructions.

General contribution workflow:
1. Fork the repository
2. Create a feature branch
3. Make your changes with tests
4. Run linting and formatting (`bun run lint && bun run format`)
5. Submit a pull request

## Community

- **GitHub Organization**: [CROW-B3](https://github.com/CROW-B3)
- **Engineering Blog**: [blog.crowai.dev](https://blog.crowai.dev)
- **Public Documentation**: [crow-public-docs.pages.dev](https://crow-public-docs.pages.dev)

## License

Unless otherwise specified, all CROW By B3 open source projects are released under the MIT License. See individual repositories for specific license information.
