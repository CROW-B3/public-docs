# Rogue Store

A modern e-commerce storefront built with Next.js 15, React 19, and Tailwind CSS v4, serving as a demonstration and test client for the CROW-B3 tracking SDK.

## Overview

Rogue Store is a full-stack demo clothing e-commerce site used to demonstrate realistic user-interaction flows, event capture, and analytics for the CROW-B3 pipeline. It showcases modern web development practices and provides a complete shopping experience.

**Key Features:**
- Product catalog with filtering, search, and sorting
- Shopping cart with persistent storage
- Product variants (size, color, etc.)
- Checkout flow with order tracking
- Dark mode support
- Fully responsive design
- End-to-end testing with Playwright
- Docker containerization
- Deployed on Cloudflare Pages

## Tech Stack

- **Next.js 15**: App Router, React 19, TypeScript
- **Tailwind CSS v4**: Styling and design system
- **Radix UI**: Accessible component primitives
- **Zustand**: State management
- **Framer Motion**: Animations and transitions
- **Playwright**: End-to-end testing
- **Cloudflare Pages**: Deployment platform

## Getting Started

### Using Docker

```bash
docker run -p 3000:3000 bitbybitb3/rogue-store:latest
```

Docker Hub: [bitbybitb3/rogue-store](https://hub.docker.com/r/bitbybitb3/rogue-store)

### Local Development

```bash
git clone https://github.com/CROW-B3/rogue-store.git
cd rogue-store
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run test` - Run Playwright tests
- `pnpm run deploy` - Deploy to Cloudflare Pages

## Features

### Product Catalog

Browse and search through a complete product catalog:
- Category filtering
- Search functionality
- Sorting options
- Product variants (sizes, colors)
- Product detail pages

### Shopping Cart

Persistent shopping cart with:
- Add/remove items
- Update quantities
- Variant selection
- Cart persistence across sessions
- Real-time price calculations

### Checkout Flow

Complete checkout process:
- Order summary
- Customer information
- Order confirmation
- Order tracking

### User Experience

Enhanced user experience features:
- Dark mode toggle
- Responsive design for all devices
- Smooth animations with Framer Motion
- Accessible components with Radix UI
- Loading states and error handling

## Deployment

### Cloudflare Pages

```bash
wrangler login
pnpm run deploy
```

### Vercel

Deploy to Vercel with one click: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CROW-B3/rogue-store)

### Docker

```bash
docker build -t rogue-store .
docker run -p 3000:3000 rogue-store
```

## Testing

End-to-end testing with Playwright. Use `pnpm run test` to run all tests or `pnpm run test:ui` for interactive mode.

## CROW-B3 Integration

Rogue Store integrates with the CROW-B3 tracking SDK to demonstrate user interaction tracking, event capture, analytics pipeline integration, and real-time data collection.

## Resources

- **Repository**: [GitHub](https://github.com/CROW-B3/rogue-store)
- **Docker Hub**: [bitbybitb3/rogue-store](https://hub.docker.com/r/bitbybitb3/rogue-store)
- **License**: Private and proprietary

## Contributing

This is a demonstration project. For questions or issues:
- Check the [GitHub Issues](https://github.com/CROW-B3/rogue-store/issues)
- Review the documentation
- Contact the CROW-B3 team
