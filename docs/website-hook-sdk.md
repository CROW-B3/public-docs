---
sidebar_position: 4
title: Website Hook SDK
---

# Website Hook SDK

A lightweight JavaScript/TypeScript SDK for capturing user interactions on web pages and sending them into the CROW analytics and data pipeline.

:::tip
For a full integration guide with framework examples, configuration options, and all supported event types, see the [Web SDK Integration Guide](./integrations/web-sdk.md).
:::

## Overview

The `@b3-crow/website-hook-sdk` automatically captures page views, clicks, scroll depth, rage clicks, navigation, errors, performance metrics (Web Vitals), and full session replays. It also provides manual tracking methods for e-commerce events like add-to-cart, variant selection, and image zoom.

**Key Features:**
- Automatic collection of page views, clicks, errors, navigation, engagement, performance, and session replays
- E-commerce event tracking (add to cart, variant select, image zoom)
- Event batching with configurable flush intervals
- Session management with exit context tracking
- Full TypeScript support with type definitions
- Modern HTTP client using Ky with automatic retries
- rrweb-based session replay recording
- MIT License

## Installation

```bash
npm install @b3-crow/website-hook-sdk
# or
pnpm add @b3-crow/website-hook-sdk
# or
bun add @b3-crow/website-hook-sdk
```

## Quick Start

```typescript
import { initializeCrow } from '@b3-crow/website-hook-sdk';

const crow = await initializeCrow({
  apiKey: 'your-api-key',
  projectId: 'your-project-id',
  debug: true, // optional: log events to console
});

// Everything below is automatic — no code needed for basic tracking.
// The SDK captures page views, clicks, errors, navigation, scroll depth,
// performance metrics, and session replays out of the box.

// For e-commerce sites, manually track these events:
crow.trackAddToCart({
  productId: 'prod_123',
  productName: 'Running Shoes',
  price: 129.99,
  quantity: 1,
});
```

## API Reference

### `initializeCrow(config)`

Initializes the SDK and returns a `CrowSDK` instance. Only one instance can be active at a time; calling this again destroys the previous instance.

### `CrowSDK` Methods

| Method | Description |
|--------|-------------|
| `initializeSdk()` | Start the SDK (called automatically by `initializeCrow`) |
| `trackEvent(type, data?)` | Track a named event with optional data |
| `trackPageView(data?)` | Track a page view |
| `trackClick(data?)` | Track a click event |
| `trackAddToCart(data)` | Track an add-to-cart e-commerce event |
| `trackVariantSelect(data)` | Track a product variant selection |
| `trackImageZoom(data)` | Track a product image zoom |
| `flushQueuedEvents()` | Flush all queued events immediately |
| `destroySdk()` | Destroy the SDK, flush events, and end the session |

## Development

```bash
git clone https://github.com/CROW-B3/website-hook-sdk.git
cd website-hook-sdk
bun install
bun run build
bun run lint
```

## Resources

- **NPM Package**: [`@b3-crow/website-hook-sdk`](https://www.npmjs.com/package/@b3-crow/website-hook-sdk)
- **GitHub Repository**: [CROW-B3/website-hook-sdk](https://github.com/CROW-B3/website-hook-sdk)
- **[Full Integration Guide](./integrations/web-sdk.md)**
- **License**: MIT

## Contributing

Contributions are welcome. Please follow the conventional commits specification for commit messages.
