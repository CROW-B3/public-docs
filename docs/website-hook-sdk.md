# Website Hook SDK

A lightweight JavaScript/TypeScript SDK for capturing user interactions on web pages and sending them into the CROW-B3 analytics and data pipeline.

## Overview

The CROW-B3 Website Hook SDK provides a simple and efficient way to track user interactions on your website. It captures events and sends them to the CROW-B3 analytics pipeline for processing and analysis.

**Key Features:**
- Lightweight and easy to integrate
- Full TypeScript support with type definitions
- Modern HTTP client using Ky library
- Event tracking and analytics integration
- ESLint and Prettier pre-configured
- Automated workflows with Husky and lint-staged
- Commit message validation with commitlint
- MIT License

## Getting Started

### Installation

```bash
bun add @b3-crow/website-hook-sdk
```

### Basic Usage

```typescript
import { WebsiteHook } from '@b3-crow/website-hook-sdk';

const hook = new WebsiteHook({
  apiKey: 'your-api-key',
  endpoint: 'https://analytics.example.com'
});

// Track events
hook.trackPageView({ page: '/products', title: 'Products' });
hook.trackEvent({ event: 'button_click', properties: { buttonId: 'signup' } });
```

## Development

### Setup

```bash
git clone https://github.com/CROW-B3/website-hook-sdk.git
cd website-hook-sdk
bun install
```

Common commands: `bun run build`, `bun run lint`, `bun run format`

## Features

Track various user interactions including page views, button clicks, form submissions, custom events, and user sessions. Built with Ky for modern HTTP requests with automatic retries, request/response interceptors, timeout handling, and JSON serialization.

## API Reference

### WebsiteHook

Main class for tracking events.

**Constructor**: `new WebsiteHook(config: HookConfig)`

**Methods**:
- `trackPageView(data: PageViewData): Promise<void>` - Track page views
- `trackEvent(data: EventData): Promise<void>` - Track custom events
- `trackUser(data: UserData): void` - Track user information
- `flush(): Promise<void>` - Flush pending events

## Resources

- **Repository**: [GitHub](https://github.com/CROW-B3/website-hook-sdk)
- **Package**: `@b3-crow/website-hook-sdk`
- **License**: MIT

## Contributing

Contributions are welcome. Please follow the conventional commits specification for commit messages.
