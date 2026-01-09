# UI Kit

The CROW-B3 UI Kit is a modern React component library built with Framer Motion for smooth animations and designed for dark-themed web applications.

## Overview

A collection of beautiful animated components for hero sections and landing pages that follow CROW-B3 design standards. Built with performance in mind using Framer Motion.

**Key Features:**
- 🎨 Beautiful animated components for hero sections and landing pages
- 🌙 Designed for dark themes with elegant gradients
- ⚡ Built with performance in mind using Framer Motion
- 📦 TypeScript support with full type definitions
- 🎯 Tailwind CSS v4 compatible
- 🔧 Easy to customize and extend

## Getting Started

### Installation

```bash
bun add @b3-crow/ui-kit
```

### Install Dependencies

This library requires React 19.2.0 or later. Ensure your application has React installed:

```bash
# If you haven't installed React yet
bun add react@^19.2.0 react-dom@^19.2.0
```

Then install the UI kit's dependencies:

```bash
bun add framer-motion react-icons cobe
```

### Basic Usage

```tsx
import {
  AnimatedBackground,
  HeroText,
  TypewriterText,
  Subtitle,
} from '@b3-crow/ui-kit';

function App() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AnimatedBackground />
      <HeroText text="Your Brand" />
      <TypewriterText text="COMING SOON" />
      <Subtitle>Building something amazing</Subtitle>
    </section>
  );
}
```

## Components

### Hero Components

- **AnimatedBackground** - Animated gradient background
- **HeroText** - Large gradient text with fade-in
- **Logo** - Animated logo with breathing effect
- **TypewriterText** - Typewriter effect with cursor
- **Subtitle** - Subtitle text with fade-in

### UI Components

- **Button** - Customizable button with variants
- **Card** - Feature and documentation cards
- **Globe** - Interactive 3D globe
- **GradientBackground** - Radial gradient effects
- **SectionLabel** - Animated section labels
- **InputField** - Input with submit button

## Documentation

- **[Setup Guide](https://github.com/CROW-B3/ui-kit/blob/main/docs/setup.md)** - Installation and configuration
- **[Component Reference](https://github.com/CROW-B3/ui-kit/blob/main/docs/components.md)** - Complete API documentation
- **[Usage Examples](https://github.com/CROW-B3/ui-kit/blob/main/docs/examples.md)** - Code examples and patterns
- **[Development Guide](https://github.com/CROW-B3/ui-kit/blob/main/docs/development.md)** - Contributing and building

## Local Development

Link the package for local development:

```json
{
  "dependencies": {
    "@b3-crow/ui-kit": "file:../ui-kit"
  }
}
```

**Note:** Adjust the path `../ui-kit` based on your local directory structure. This assumes the UI kit repository is cloned in a sibling directory.

For Next.js projects:

```typescript
// next.config.ts
export default {
  transpilePackages: ['@b3-crow/ui-kit'],
};
```

Common commands:

```bash
# Install dependencies
bun install

# Build the library
bun run build

# Watch mode
bun run build:watch

# Lint and format
bun run lint
bun run format
```

## Resources

- **Repository**: [GitHub](https://github.com/CROW-B3/ui-kit)
- **Package**: `@b3-crow/ui-kit`
- **License**: MIT
