# UI Kit

The CROW-B3 UI Kit is a modern React component library built with Framer Motion for smooth animations and designed for dark-themed web applications.

## Overview

A collection of beautiful animated components for hero sections and landing pages that follow CROW-B3 design standards. Built with performance in mind using Framer Motion.

**Key Features:**
- Beautiful animated components for hero sections and landing pages
- Designed for dark themes with elegant gradients
- Built with performance in mind using Framer Motion
- TypeScript support with full type definitions
- Tailwind CSS v4 compatible
- Easy to customize and extend

## Getting Started

### Installation

```bash
bun add @b3-crow/ui-kit react@^19.2.0 react-dom@^19.2.0 framer-motion react-icons cobe
```

### Basic Usage

```tsx
import { AnimatedBackground, HeroText, TypewriterText, Subtitle } from '@b3-crow/ui-kit';

function App() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh' }}>
      <AnimatedBackground />
      <HeroText text="Your Brand" />
      <TypewriterText text="COMING SOON" />
      <Subtitle>Building something amazing</Subtitle>
    </section>
  );
}
```

## Components

The UI Kit includes **40 components** organized into 7 categories:

### Background Components (3)

- **AnimatedBackground** - Animated gradient background with blurred circles
- **Globe** - Interactive 3D globe using cobe library
- **GradientBackground** - Radial gradient effects with customizable positioning

### Button Components (2)

- **Button** - Customizable button with outline/solid variants and optional arrow icons
- **CompanyPageButton** - Specialized button for company page interactions

### Card Components (10)

- **Card** - Flexible layout component for features and documentation
- **CheckoutSummary** - Summary card for checkout flows
- **ConnectionOption** - Card for displaying connection options
- **InvitationDetailsCard** - Displays invitation information
- **OrderSummaryCard** - Order summary and details display
- **PendingInviteCard** - Shows pending invitation status
- **PlanCard** - Subscription or pricing plan display
- **PricingCard** - Pricing information and feature comparison
- **RunAgentCard** - Agent execution status and controls
- **SyncStatusCard** - Synchronization status display

### Display Components (4)

- **CodeBlock** - Syntax-highlighted code display
- **ConnectionStatus** - Connection state indicator
- **Logo** - Animated logo with breathing effect
- **PackageManagerSelector** - Package manager choice selector (npm/yarn/pnpm/bun)

### Input Components (10)

- **ApiKeyInput** - Secure API key input field
- **Checkbox** - Standard checkbox with label
- **EmailTagInput** - Multi-email tag input field
- **Input** - Basic text input field
- **InputField** - Enhanced input with submit button
- **NumberStepper** - Numeric input with increment/decrement
- **PermissionToggle** - Permission toggle switch
- **Select** - Dropdown select component
- **TagInput** - Multi-tag input field
- **ToggleOption** - Toggle switch option

### Layout Components (7)

- **Divider** - Visual content separator
- **Footer** - Page footer with links and info
- **FormSection** - Form section container and grouping
- **LinkGroup** - Grouped navigation links
- **Navbar** - Navigation bar component
- **PageHeader** - Page title and breadcrumb header
- **SegmentedControl** - Segmented control/tab selector

### Typography Components (4)

- **HeroText** - Large gradient text with fade-in animation
- **SectionLabel** - Animated bracket-styled section labels
- **Subtitle** - Subtitle text with fade-in effect
- **TypewriterText** - Typewriter animation with blinking cursor

## Component Usage Examples

The UI kit components are designed for easy integration. Import and use them directly:

```tsx
import { Button, Card, Input, Navbar } from '@b3-crow/ui-kit';

// Button with variants
<Button variant="outline" showArrow>Get Started</Button>

// Card with configuration
<Card type="feature" title="Fast Performance" description="Built for speed" />

// Input with state management
<Input placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />

// Navigation bar
<Navbar logo={<Logo />} links={[{ label: 'Home', href: '/' }]} />
```

For detailed examples and API documentation, visit the [Component Reference](https://github.com/CROW-B3/ui-kit/blob/main/docs/components.md).

## Documentation

The UI kit includes comprehensive documentation in the `/docs` directory of the repository:

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

**Note:** Adjust the path based on your local directory structure.

For Next.js projects, add to `next.config.ts`:
```typescript
export default {
  transpilePackages: ['@b3-crow/ui-kit'],
};
```

Common commands: `bun install`, `bun run build`, `bun run lint`, `bun run format`

## Resources

- **Repository**: [GitHub](https://github.com/CROW-B3/ui-kit)
- **Package**: `@b3-crow/ui-kit`
- **License**: MIT
