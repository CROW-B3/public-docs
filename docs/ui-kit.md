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

### Background Components

```tsx
import { AnimatedBackground, Globe, GradientBackground } from '@b3-crow/ui-kit';

// Animated gradient background (requires parent with position: relative)
<AnimatedBackground />

// Interactive 3D globe with custom data points
<Globe
  size={400}
  markers={[
    { location: [40.7128, -74.0060], size: 0.1, label: 'New York' },
    { location: [51.5074, -0.1278], size: 0.1, label: 'London' }
  ]}
/>

// Radial gradient positioned at top or bottom
<GradientBackground position="top" color="#3b82f6" blur={120} />
```

### Button Components

```tsx
import { Button } from '@b3-crow/ui-kit';

// Outline button with arrow
<Button variant="outline" showArrow>
  Get Started
</Button>

// Solid button with link
<Button variant="solid" href="/pricing">
  View Pricing
</Button>

// Button with click handler
<Button onClick={() => console.log('clicked')}>
  Click Me
</Button>
```

### Card Components

```tsx
import { Card, PricingCard } from '@b3-crow/ui-kit';

// Feature card
<Card
  type="feature"
  title="Fast Performance"
  description="Built for speed and efficiency"
  icon={<RocketIcon />}
  buttonText="Learn More"
  buttonLink="/features"
/>

// Pricing card
<PricingCard
  title="Pro Plan"
  price="$29"
  period="/month"
  features={['Feature 1', 'Feature 2', 'Feature 3']}
  buttonText="Subscribe"
/>
```

### Input Components

```tsx
import { Input, Select, Checkbox, TagInput } from '@b3-crow/ui-kit';

// Basic input
<Input
  placeholder="Enter your name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

// Select dropdown
<Select
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ]}
  onChange={(value) => setSelected(value)}
/>

// Checkbox with label
<Checkbox
  label="Accept terms and conditions"
  checked={accepted}
  onChange={(checked) => setAccepted(checked)}
/>

// Multi-tag input
<TagInput
  tags={tags}
  onTagsChange={setTags}
  placeholder="Add tags..."
/>
```

### Layout Components

```tsx
import { Navbar, PageHeader, Footer, Divider } from '@b3-crow/ui-kit';

// Navigation bar
<Navbar
  logo={<Logo src="/logo.png" alt="Brand" />}
  links={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' }
  ]}
/>

// Page header with breadcrumb
<PageHeader
  title="Documentation"
  breadcrumb={['Home', 'Docs', 'Components']}
/>

// Divider
<Divider />

// Footer with link groups
<Footer
  linkGroups={[
    {
      title: 'Product',
      links: [{ label: 'Features', href: '/features' }]
    }
  ]}
/>
```

### Typography Components

```tsx
import { HeroText, TypewriterText, Subtitle, SectionLabel } from '@b3-crow/ui-kit';

// Large hero text with gradient
<HeroText text="Welcome to CROW-B3" />

// Typewriter animation
<TypewriterText text="COMING SOON" />

// Subtitle with fade-in
<Subtitle>Building the future of development</Subtitle>

// Section label with brackets
<SectionLabel>Featured Projects</SectionLabel>
```

## Documentation

The UI kit includes comprehensive documentation in the `/docs` directory of the repository:

- **[Setup Guide](https://github.com/CROW-B3/ui-kit/blob/main/docs/setup.md)** - Installation and configuration
- **[Component Reference](https://github.com/CROW-B3/ui-kit/blob/main/docs/components.md)** - Complete API documentation
- **[Usage Examples](https://github.com/CROW-B3/ui-kit/blob/main/docs/examples.md)** - Code examples and patterns
- **[Development Guide](https://github.com/CROW-B3/ui-kit/blob/main/docs/development.md)** - Contributing and building

## Project Structure

```
ui-kit/
├── docs/                # Comprehensive documentation
│   ├── setup.md
│   ├── components.md
│   ├── examples.md
│   └── development.md
├── src/                 # Component source code
├── package.json
├── tsconfig.json        # TypeScript configuration
├── eslint.config.mts    # ESLint configuration
├── .prettierrc          # Code formatting rules
└── bun.lock             # Bun dependency lockfile
```

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
