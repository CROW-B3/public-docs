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

### Prerequisites

- pnpm package manager

### Using Docker

Run the pre-built Docker image:

```bash
docker run -p 3000:3000 bitbybitb3/rogue-store:latest
```

Docker Hub: [bitbybitb3/rogue-store](https://hub.docker.com/r/bitbybitb3/rogue-store)

### Local Development

Clone and install:

```bash
git clone https://github.com/CROW-B3/rogue-store.git
cd rogue-store
pnpm install
```

Start the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
rogue-store/
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── cart/        # Shopping cart components
│   ├── layout/      # Layout components
│   ├── product/     # Product display components
│   └── ui/          # UI primitives and elements
├── data/            # Static product and category data
├── lib/             # Utilities and state management
├── tests/           # Playwright end-to-end tests
├── public/          # Static assets
└── package.json     # Project dependencies
```

## Available Scripts

### Development

```bash
pnpm run dev              # Start development server
pnpm run build            # Build for production
pnpm run lint             # Run ESLint
pnpm run format           # Format code with Prettier
```

### Testing

```bash
pnpm run test             # Run Playwright tests
pnpm run test:ui          # Run tests in UI mode
```

### Deployment

```bash
pnpm run deploy           # Deploy to Cloudflare Pages
```

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

Deploy to Cloudflare Pages:

```bash
wrangler login
pnpm run deploy
```

### Vercel

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CROW-B3/rogue-store)

### Docker

Build and run the Docker container:

```bash
# Build the image
docker build -t rogue-store .

# Run the container
docker run -p 3000:3000 rogue-store
```

## Testing

End-to-end testing with Playwright:

```bash
# Run all tests
pnpm run test

# Run tests in UI mode
pnpm run test:ui

# Run specific test file
pnpm exec playwright test tests/checkout.spec.ts
```

## CROW-B3 Integration

Rogue Store integrates with the CROW-B3 tracking SDK to demonstrate:
- User interaction tracking
- Event capture
- Analytics pipeline integration
- Real-time data collection
- User session tracking

## Configuration

### Environment Variables

Configure the application with environment variables:

```bash
# .env.local
NEXT_PUBLIC_API_URL=your-api-url
NEXT_PUBLIC_CROW_API_KEY=your-crow-api-key
```

### Tailwind Configuration

Customize the design system in `tailwind.config.js`:

```javascript
export default {
  // Your Tailwind configuration
}
```

## Resources

- **Repository**: [GitHub](https://github.com/CROW-B3/rogue-store)
- **Docker Hub**: [bitbybitb3/rogue-store](https://hub.docker.com/r/bitbybitb3/rogue-store)
- **License**: Private and proprietary

## Contributing

This is a demonstration project. For questions or issues:
- Check the [GitHub Issues](https://github.com/CROW-B3/rogue-store/issues)
- Review the documentation
- Contact the CROW-B3 team
