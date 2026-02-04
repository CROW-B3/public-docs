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

// Initialize the SDK
const hook = new WebsiteHook({
  apiKey: 'your-api-key',
  endpoint: 'https://analytics.example.com'
});

// Track page views
hook.trackPageView({
  page: '/products',
  title: 'Products'
});

// Track custom events
hook.trackEvent({
  event: 'button_click',
  properties: {
    buttonId: 'signup',
    location: 'header'
  }
});
```

## Development

### Prerequisites

- Bun runtime

### Setup

Clone the repository:

```bash
git clone https://github.com/CROW-B3/website-hook-sdk.git
cd website-hook-sdk
```

Install dependencies:

```bash
bun install
```

### Common Commands

```bash
# Build the SDK
bun run build

# Watch mode for development
bun run build:watch

# Lint code
bun run lint

# Fix linting issues
bun run lint:fix

# Format code
bun run format
```

### Development Workflow

1. Make your changes to the source files in the `src/` directory
2. Run `bun run build` to compile TypeScript to JavaScript
3. Use `bun run lint` to check for code quality issues
4. Use `bun run format` to format your code
5. Commit your changes (commits are automatically validated via Husky)

## Features

### Event Tracking

Track various user interactions:
- Page views
- Button clicks
- Form submissions
- Custom events
- User sessions

### HTTP Client

Built with Ky for modern HTTP requests:
- Automatic retries
- Request/response interceptors
- Timeout handling
- JSON serialization

### Code Quality Tools

Pre-configured development tools:
- **TypeScript**: Full type safety for development
- **ESLint**: Code linting with @antfu/eslint-config
- **Prettier**: Consistent code formatting
- **Husky**: Git hooks for pre-commit checks
- **lint-staged**: Run linters on staged files
- **commitlint**: Enforce conventional commit messages

## Project Structure

```
website-hook-sdk/
├── src/              # Source code directory
├── dist/             # Compiled output (generated)
├── package.json      # Package configuration
├── tsconfig.json     # TypeScript configuration
├── eslint.config.mts # ESLint configuration
├── .prettierrc       # Prettier configuration
├── .husky/           # Git hooks
└── bun.lock          # Bun dependency lockfile
```

## Local Development

For local development in another project, link the package:

```json
{
  "dependencies": {
    "@b3-crow/website-hook-sdk": "file:../website-hook-sdk"
  }
}
```

## API Reference

### WebsiteHook

Main class for tracking events.

#### Constructor

```typescript
new WebsiteHook(config: HookConfig)
```

#### Methods

- `trackPageView(data: PageViewData): Promise<void>` - Track page views
- `trackEvent(data: EventData): Promise<void>` - Track custom events
- `trackUser(data: UserData): void` - Track user information
- `flush(): Promise<void>` - Flush pending events

## Publishing

The package is set up for publishing to NPM:

```bash
# Build the package
bun run build

# Publish to NPM (requires authentication)
npm publish
```

## Resources

- **Repository**: [GitHub](https://github.com/CROW-B3/website-hook-sdk)
- **Package**: `@b3-crow/website-hook-sdk`
- **License**: MIT

## Contributing

Contributions are welcome. Please follow the conventional commits specification for commit messages.
