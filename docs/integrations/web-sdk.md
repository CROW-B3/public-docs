---
sidebar_position: 1
title: Web SDK
---

# Web SDK Integration

The `@b3-crow/website-hook-sdk` is a lightweight JavaScript/TypeScript SDK that captures user interactions on your website and sends them to the CROW analytics pipeline. It supports automatic event collection (page views, clicks, errors, navigation, performance, session replays) and manual tracking for e-commerce events.

## Installation

```bash
npm install @b3-crow/website-hook-sdk
# or
pnpm add @b3-crow/website-hook-sdk
# or
bun add @b3-crow/website-hook-sdk
```

**Peer dependency:** The SDK uses [ky](https://github.com/sindresorhus/ky) for HTTP requests and [rrweb](https://github.com/rrweb-io/rrweb) for session replays. Both are bundled as dependencies.

## Quick Start

```typescript
import { initializeCrow } from '@b3-crow/website-hook-sdk';

const crow = await initializeCrow({
  apiKey: 'your-api-key',
  projectId: 'your-project-id',
});
```

That is it. The SDK immediately begins capturing page views, clicks, errors, navigation events, scroll behavior, performance metrics, and session replays. No additional configuration is required for basic usage.

## Configuration

The `initializeCrow` function accepts a `CrowConfig` object:

```typescript
interface CrowConfig {
  apiKey?: string;         // Your CROW API key
  projectId?: string;      // Project identifier within your organization
  ingestUrl?: string;      // Custom ingest endpoint (defaults to CROW cloud)
  debug?: boolean;         // Enable console debug logging (default: false)
  capture?: {
    pageViews?: boolean;         // Auto-capture page views (default: true)
    clicks?: boolean;            // Auto-capture clicks (default: true)
    errors?: boolean;            // Auto-capture JS errors (default: true)
    navigation?: boolean;        // Auto-capture route changes (default: true)
    engagement?: boolean;        // Track scroll depth and time on page (default: true)
    interactions?: boolean;      // Track form interactions and clipboard events (default: true)
    performance?: boolean;       // Capture Web Vitals and performance metrics (default: true)
    replay?: boolean;            // Record session replays via rrweb (default: true)
    sendAnalyticsEvents?: boolean; // Send analytics-only events to backend (default: false)
  };
}
```

### Example: Disable Session Replays

```typescript
const crow = await initializeCrow({
  apiKey: 'your-api-key',
  projectId: 'your-project-id',
  capture: {
    replay: false,
  },
});
```

### Example: Debug Mode

```typescript
const crow = await initializeCrow({
  apiKey: 'your-api-key',
  projectId: 'your-project-id',
  debug: true, // Logs all events to browser console
});
```

## Automatic Event Collection

Once initialized, the SDK automatically captures the following events without any additional code:

| Collector | Events captured |
|-----------|----------------|
| **Navigation** | Route changes (SPA and MPA), referrer tracking |
| **Engagement** | Scroll depth, time on page, visibility changes |
| **Interaction** | Click details, rage click detection, form focus/blur/input, clipboard copy/paste, media play/pause, file downloads |
| **Performance** | Web Vitals (LCP, FID, CLS), network requests, API errors |
| **Error** | Unhandled JS errors and promise rejections |
| **Replay** | Full session replay recording via rrweb |

## Manual Event Tracking

### Track Page Views

Page views are captured automatically, but you can trigger them manually for SPA navigation:

```typescript
crow.trackPageView({ customProperty: 'value' });
```

### Track Clicks

```typescript
crow.trackClick({
  elementId: 'signup-button',
  elementText: 'Sign Up',
});
```

### Track Custom Events

```typescript
crow.trackEvent('form_submit', {
  formId: 'contact-form',
  fields: ['name', 'email', 'message'],
});
```

### E-Commerce Events

The SDK includes dedicated methods for e-commerce tracking:

```typescript
// Add to cart
crow.trackAddToCart({
  productId: 'prod_123',
  productName: 'Running Shoes',
  price: 129.99,
  quantity: 1,
  variant: 'Size 10 / Black',
});

// Variant selection
crow.trackVariantSelect({
  productId: 'prod_123',
  variantId: 'var_456',
  variantName: 'Size 10',
});

// Image zoom
crow.trackImageZoom({
  productId: 'prod_123',
  imageUrl: '/images/shoes-front.jpg',
});
```

## Event Batching

The SDK batches events to reduce network requests. By default:

- Events are queued and sent in batches of **10**
- The queue is flushed every **5 seconds**
- All queued events are flushed on page unload (`beforeunload`)

You can manually flush the queue:

```typescript
await crow.flushQueuedEvents();
```

## Session Management

The SDK automatically manages sessions:

- A unique session ID is generated or restored from storage on initialization
- A `session_start` event is sent to the backend
- Session expiry is extended with each tracked event
- A `session_end` event (with exit context) is sent on page unload

Exit context includes:
- Last page visited and time spent
- Exit trigger (tab close, navigation away, idle timeout)
- Whether the user had items in their cart
- The last 10 user interactions with descriptions

## Supported Event Types

The SDK supports these event types:

| Category | Event types |
|----------|-------------|
| **Page** | `pageview` |
| **Interaction** | `click`, `rage_click`, `scroll`, `navigation` |
| **Form** | `form`, `form_focus`, `form_blur`, `form_input`, `form_validation` |
| **E-Commerce** | `add_to_cart`, `variant_select`, `image_zoom` |
| **Media** | `media_play`, `media_pause`, `download`, `clipboard_copy`, `clipboard_paste` |
| **Performance** | `performance`, `web_vital`, `performance_metric`, `network_request`, `api_error` |
| **Error** | `error` |
| **Replay** | `rrweb_snapshot`, `rrweb_incremental` |
| **Other** | `custom`, `visibility_change`, `mousemove` |

## Framework Integration

### Next.js

Initialize the SDK in a client component:

```tsx
'use client';

import { useEffect, useRef } from 'react';
import type { CrowSDK } from '@b3-crow/website-hook-sdk';
import { initializeCrow } from '@b3-crow/website-hook-sdk';

export function CrowProvider({ children }: { children: React.ReactNode }) {
  const crowRef = useRef<CrowSDK | null>(null);

  useEffect(() => {
    initializeCrow({
      apiKey: process.env.NEXT_PUBLIC_CROW_API_KEY,
      projectId: process.env.NEXT_PUBLIC_CROW_PROJECT_ID,
    }).then(sdk => {
      crowRef.current = sdk;
    });

    return () => {
      crowRef.current?.destroySdk();
    };
  }, []);

  return <>{children}</>;
}
```

Add the provider to your root layout:

```tsx
// app/layout.tsx
import { CrowProvider } from './crow-provider';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <CrowProvider>{children}</CrowProvider>
      </body>
    </html>
  );
}
```

### Cleanup

When your app unmounts, destroy the SDK to flush pending events and end the session:

```typescript
crow.destroySdk();
```

## Debugging

Enable debug mode to see all SDK activity in the browser console:

```typescript
const crow = await initializeCrow({
  apiKey: 'your-api-key',
  debug: true,
});
```

The SDK also attaches itself to `window.crow` for debugging in the browser console:

```javascript
// In browser DevTools console:
window.crow.trackEvent('test_event', { foo: 'bar' });
```

## Resources

- **NPM Package**: [`@b3-crow/website-hook-sdk`](https://www.npmjs.com/package/@b3-crow/website-hook-sdk)
- **GitHub Repository**: [CROW-B3/website-hook-sdk](https://github.com/CROW-B3/website-hook-sdk)
- **License**: MIT
