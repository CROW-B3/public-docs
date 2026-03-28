---
sidebar_position: 4
---

# Website Hook SDK

`@b3-crow/website-hook-sdk` is a lightweight JavaScript/TypeScript SDK that captures user interactions on any web page and streams them into the CROW analytics and data pipeline.

- **NPM**: [`@b3-crow/website-hook-sdk`](https://www.npmjs.com/package/@b3-crow/website-hook-sdk)
- **GitHub**: [CROW-B3/website-hook-sdk](https://github.com/CROW-B3/website-hook-sdk)
- **License**: MIT

## Installation

```bash
bun add @b3-crow/website-hook-sdk
# or
pnpm add @b3-crow/website-hook-sdk
```

## Quick Start

```typescript
import { WebsiteHook } from '@b3-crow/website-hook-sdk';

const hook = new WebsiteHook({
  apiKey: 'your-api-key',
  endpoint: 'https://analytics.example.com',
});

// Track a page view
hook.trackPageView({ page: '/products', title: 'Products' });

// Track a custom event
hook.trackEvent({ event: 'button_click', properties: { buttonId: 'signup' } });

// Track user identity
hook.trackUser({ userId: 'user-123', email: 'user@example.com' });

// Flush all buffered events
await hook.flush();
```

## API Reference

### `WebsiteHook`

Main class for event tracking.

**Constructor**

```typescript
new WebsiteHook(config: HookConfig)
```

| Parameter | Type | Description |
|---|---|---|
| `config.apiKey` | `string` | Your CROW API key |
| `config.endpoint` | `string` | CROW ingest endpoint URL |

**Methods**

| Method | Signature | Description |
|---|---|---|
| `trackPageView` | `(data: PageViewData) => Promise<void>` | Track a page view |
| `trackEvent` | `(data: EventData) => Promise<void>` | Track a custom event |
| `trackUser` | `(data: UserData) => void` | Associate a user identity |
| `flush` | `() => Promise<void>` | Flush all buffered events |

## Features

- **Lightweight** — minimal footprint, no heavy dependencies
- **TypeScript** — full type definitions included
- **Modern HTTP** — uses [Ky](https://github.com/sindresorhus/ky) with automatic retries, timeout handling, and JSON serialization
- **Flexible** — track page views, clicks, form submissions, and any custom event
- **Code quality** — ESLint, Prettier, Husky, lint-staged, and commitlint pre-configured

## Development

```bash
git clone https://github.com/CROW-B3/website-hook-sdk.git
cd website-hook-sdk
bun install
```

| Command | Description |
|---|---|
| `bun run build` | Compile TypeScript |
| `bun run lint` | Run ESLint |
| `bun run format` | Format with Prettier |

## Contributing

Contributions are welcome. Please use [Conventional Commits](https://www.conventionalcommits.org/) for all commit messages.
