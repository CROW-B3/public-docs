---
sidebar_position: 3
---

# UI Kit

`@b3-crow/ui-kit` is a React component library built with **Framer Motion** for smooth animations. It is designed for dark-themed web applications and ships with 40 components across seven categories.

- **NPM**: [`@b3-crow/ui-kit`](https://www.npmjs.com/package/@b3-crow/ui-kit)
- **GitHub**: [CROW-B3/ui-kit](https://github.com/CROW-B3/ui-kit)
- **License**: MIT

## Installation

The library requires **React 19.2.0** or later and a few peer dependencies:

```bash
bun add @b3-crow/ui-kit react@^19.2.0 react-dom@^19.2.0 framer-motion react-icons cobe
```

## Basic Usage

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

## Component Reference

The UI Kit ships **40 components** across 7 categories.

### Background (3)

| Component | Description |
|---|---|
| `AnimatedBackground` | Animated gradient background with blurred circles |
| `Globe` | Interactive 3D globe powered by the `cobe` library |
| `GradientBackground` | Radial gradient effects with customizable positioning |

### Buttons (2)

| Component | Description |
|---|---|
| `Button` | Customizable button with `outline` / `solid` variants and optional arrow icon |
| `CompanyPageButton` | Specialised button for company-page interactions |

### Cards (10)

| Component | Description |
|---|---|
| `Card` | Flexible layout component for features and documentation |
| `CheckoutSummary` | Checkout flow summary card |
| `ConnectionOption` | Displays a connection option |
| `InvitationDetailsCard` | Shows invitation details |
| `OrderSummaryCard` | Order summary and details |
| `PendingInviteCard` | Pending invitation status |
| `PlanCard` | Subscription or pricing plan display |
| `PricingCard` | Pricing information and feature comparison |
| `RunAgentCard` | Agent execution status and controls |
| `SyncStatusCard` | Synchronisation status display |

### Display (4)

| Component | Description |
|---|---|
| `CodeBlock` | Syntax-highlighted code display |
| `ConnectionStatus` | Connection state indicator |
| `Logo` | Animated logo with breathing effect |
| `PackageManagerSelector` | Package manager choice (npm / yarn / pnpm / bun) |

### Inputs (10)

| Component | Description |
|---|---|
| `ApiKeyInput` | Secure API key input field |
| `Checkbox` | Standard checkbox with label |
| `EmailTagInput` | Multi-email tag input |
| `Input` | Basic text input |
| `InputField` | Enhanced input with submit button |
| `NumberStepper` | Numeric input with increment/decrement controls |
| `PermissionToggle` | Permission toggle switch |
| `Select` | Dropdown select component |
| `TagInput` | Multi-tag input field |
| `ToggleOption` | Toggle switch option |

### Layout (7)

| Component | Description |
|---|---|
| `Divider` | Visual content separator |
| `Footer` | Page footer with links and info |
| `FormSection` | Form section container |
| `LinkGroup` | Grouped navigation links |
| `Navbar` | Navigation bar |
| `PageHeader` | Page title and breadcrumb header |
| `SegmentedControl` | Segmented control / tab selector |

### Typography (4)

| Component | Description |
|---|---|
| `HeroText` | Large gradient text with fade-in animation |
| `SectionLabel` | Animated bracket-styled section labels |
| `Subtitle` | Subtitle text with fade-in effect |
| `TypewriterText` | Typewriter animation with blinking cursor |

## Usage Examples

```tsx
import { Button, Card, Input, Navbar } from '@b3-crow/ui-kit';

// Button with variants
<Button variant="outline" showArrow>Get Started</Button>

// Feature card
<Card type="feature" title="Fast Performance" description="Built for speed" />

// Controlled input
<Input placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />

// Navigation bar
<Navbar logo={<Logo />} links={[{ label: 'Home', href: '/' }]} />
```

## Local Development

To link the package locally while working on both projects:

```json
{
  "dependencies": {
    "@b3-crow/ui-kit": "file:../ui-kit"
  }
}
```

For **Next.js** projects, add to `next.config.ts`:

```typescript
export default {
  transpilePackages: ['@b3-crow/ui-kit'],
};
```

### Build Commands

```bash
bun install          # Install dependencies
bun run build        # Build the library
bun run build:watch  # Watch mode
bun run lint         # Lint
bun run format       # Format
```

## Documentation

The repository ships full in-repo docs:

- **[Setup Guide](https://github.com/CROW-B3/ui-kit/blob/main/docs/setup.md)**
- **[Component Reference](https://github.com/CROW-B3/ui-kit/blob/main/docs/components.md)**
- **[Usage Examples](https://github.com/CROW-B3/ui-kit/blob/main/docs/examples.md)**
- **[Development Guide](https://github.com/CROW-B3/ui-kit/blob/main/docs/development.md)**
