# UI Kit

The CROW-B3 UI Kit is a modern React component library built with shadcn/ui and Tailwind CSS v4, designed specifically for CROW-B3 applications.

## Overview

The UI Kit provides a collection of accessible, customizable, and production-ready components that follow CROW-B3 design standards. Built on top of Radix UI primitives and styled with Tailwind CSS v4, it offers both flexibility and consistency across your applications.

**Key Features:**
- Modern React components with TypeScript support
- Built on Radix UI for accessibility
- Tailwind CSS v4 for styling
- Customizable theming system
- Tree-shakeable exports

## Installation

```bash
pnpm add @crow-b3/ui-kit
```

**Peer Dependencies:**
```bash
pnpm add react@^19.2.0 react-dom@^19.2.0
pnpm add -D tailwindcss@^4.1.17 @tailwindcss/postcss postcss
```

## Quick Setup

1. Configure PostCSS (`postcss.config.mjs`):
```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

2. Import global styles in your app entry:
```tsx
import '@crow-b3/ui-kit/dist/styles/globals.css';
```

3. Start using components:
```tsx
import { Button } from '@crow-b3/ui-kit';

function App() {
  return <Button>Click me</Button>;
}
```

## Available Components

### Button

Versatile button component with multiple variants and sizes.

```tsx
import { Button } from '@crow-b3/ui-kit';

// Variants
<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🔍</Button>

// As different element (polymorphic)
<Button asChild>
  <a href="/dashboard">Go to Dashboard</a>
</Button>
```

**Props:**
- `variant`: `'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'`
- `size`: `'default' | 'sm' | 'lg' | 'icon'`
- `asChild`: `boolean` - Render as child element
- All standard button HTML attributes

## Utilities

### cn()

Intelligent class name merger using `clsx` and `tailwind-merge`:

```tsx
import { cn } from '@crow-b3/ui-kit';

// Merge classes
cn('px-4 py-2', 'bg-blue-500')

// Conditional classes
cn('base-class', isActive && 'active-class')

// Tailwind class conflicts handled automatically
cn('px-4', 'px-8') // Results in 'px-8'
```

## Theming

The UI Kit uses CSS variables for theming:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
}
```

Override these variables in your application to customize the theme.

## Development

### Local Development

Link the package for local development:

```json
{
  "dependencies": {
    "@crow-b3/ui-kit": "file:../ui-kit"
  }
}
```

### Building

The UI Kit uses modern build tools for optimal output:

```bash
pnpm run build    # Build the library
pnpm run lint     # Lint code
pnpm run format   # Format code
```

## Architecture

```
@crow-b3/ui-kit/
├── components/ui/    # UI components
├── lib/             # Utilities
└── styles/          # Global styles
```

**Core Dependencies:**
- `@radix-ui/react-slot` - Polymorphic components
- `class-variance-authority` - Variant styling
- `clsx` + `tailwind-merge` - Class management

## Resources

- **Repository**: [GitHub](https://github.com/CROW-B3/npm-sdk-template)
- **Package**: `@crow-b3/ui-kit`
- **License**: MIT
