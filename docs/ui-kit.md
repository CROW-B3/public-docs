# UI Kit

The CROW-B3 UI Kit is a modern React component library built with shadcn/ui and Tailwind CSS v4, designed specifically for CROW-B3 applications.

## Overview

A collection of accessible, customizable, and production-ready components that follow CROW-B3 design standards. Built on Radix UI primitives and styled with Tailwind CSS v4.

**Key Features:**
- Modern React components with TypeScript support
- Built on Radix UI for accessibility
- Tailwind CSS v4 for styling
- Customizable theming system

## Getting Started

### Installation

```bash
pnpm add @crow-b3/ui-kit
```

Install peer dependencies:
```bash
pnpm add react@^19.2.0 react-dom@^19.2.0
pnpm add -D tailwindcss@^4.1.17 @tailwindcss/postcss postcss
```

### Setup

Configure PostCSS (`postcss.config.mjs`):
```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

Import global styles in your app entry:
```tsx
import '@crow-b3/ui-kit/dist/styles/globals.css';
```

### Usage

```tsx
import { Button } from '@crow-b3/ui-kit';

function App() {
  return <Button>Click me</Button>;
}
```

## Local Development

For local development, link the package:

```json
{
  "dependencies": {
    "@crow-b3/ui-kit": "file:../ui-kit"
  }
}
```

Common commands:
```bash
pnpm run build    # Build the library
pnpm run lint     # Lint code
pnpm run format   # Format code
```

## Resources

- **Repository**: [GitHub](https://github.com/CROW-B3/ui-kit)
- **Package**: `@crow-b3/ui-kit`
- **License**: MIT
