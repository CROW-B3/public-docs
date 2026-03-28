---
sidebar_position: 15
---

# Rogue Store

**Rogue Store** is a full-stack demo clothing e-commerce site built with Next.js 15, React 19, and Tailwind CSS v4. It serves as the primary test client for the CROW-B3 tracking SDK, enabling realistic user-interaction flows, event capture, and analytics pipeline validation.

- **GitHub**: [CROW-B3/rogue-store](https://github.com/CROW-B3/rogue-store)
- **Live Demo**: [rogue.crowai.dev](https://rogue.crowai.dev)
- **Docker Hub**: [bitbybitb3/rogue-store](https://hub.docker.com/r/bitbybitb3/rogue-store)

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4 |
| UI Primitives | Radix UI |
| State Management | Zustand |
| Animations | Framer Motion |
| Testing | Playwright (E2E) |
| Deployment | Cloudflare Pages |

## Quick Start

### Docker (recommended for demos)

```bash
docker run -p 3000:3000 bitbybitb3/rogue-store:latest
```

### Local Development

```bash
git clone https://github.com/CROW-B3/rogue-store.git
cd rogue-store
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
rogue-store/
├── app/               # Next.js pages
├── components/
│   ├── cart/          # Cart components
│   ├── layout/        # Layout components
│   ├── product/       # Product components
│   └── ui/            # UI primitives
├── data/              # Static product catalogue
├── lib/               # Utilities & state management
└── tests/             # Playwright E2E tests
```

## Available Scripts

| Command | Description |
|---|---|
| `pnpm run dev` | Start development server |
| `pnpm run build` | Build for production |
| `pnpm run lint` | Run ESLint |
| `pnpm run format` | Format with Prettier |
| `pnpm run test` | Run Playwright tests |
| `pnpm run test:ui` | Run tests in interactive UI mode |
| `pnpm run deploy` | Deploy to Cloudflare Pages |

## Features

### Product Catalogue
- Category filtering, search, and sorting
- Product detail pages with variants (size, colour)

### Shopping Cart
- Persistent cart across sessions (Zustand + localStorage)
- Add/remove items, update quantities, real-time price calculations

### Checkout Flow
- Order summary, customer information, and order confirmation

### CROW-B3 Integration
The store integrates with the [Website Hook SDK](./website-hook-sdk.md) to demonstrate end-to-end interaction tracking. Every page view, product click, add-to-cart, and checkout event is captured and sent to the CROW analytics pipeline, providing a realistic dataset for testing and validation.

## Deployment

### Cloudflare Pages

```bash
wrangler login
pnpm run deploy
```

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CROW-B3/rogue-store)

### Docker

```bash
docker build -t rogue-store .
docker run -p 3000:3000 rogue-store
```
