---
sidebar_position: 2
title: Getting Started
---

# Getting Started

This guide walks you through creating a CROW account, generating an API key, and choosing the right integration method for your use case.

## 1. Create Your Account

1. Go to [https://app.crowai.dev](https://app.crowai.dev) and sign up.
2. Create an **organization** for your business. All data, projects, and API keys are scoped to your organization.
3. Navigate to **Settings > API Keys** and generate a new key. Copy it immediately -- it will not be shown again.

:::tip
Store your API key in environment variables or a secret manager. Never commit it to source code.
:::

## 2. Choose Your Integration

CROW supports five integration methods. Choose the one that matches your use case:

| Method | Best for | Language |
|--------|----------|----------|
| [Web SDK](#web-sdk) | Tracking user behavior on websites | JavaScript / TypeScript |
| [CCTV CLI](#cctv-cli) | Ingesting video frames from physical cameras | Node.js CLI (ffmpeg) |
| [Social Collector](#social-collector) | Monitoring social media mentions | Dashboard configuration |
| [MCP Server](#mcp-server) | Connecting CROW to Claude Desktop or Cursor | JSON config |
| [A2A Protocol](#a2a-protocol) | Agent-to-agent communication | Any HTTP client |

---

## Web SDK

Install the SDK and start tracking in under five minutes.

```bash
npm install @b3-crow/website-hook-sdk
```

```typescript
import { initializeCrow } from '@b3-crow/website-hook-sdk';

const crow = await initializeCrow({
  apiKey: 'your-api-key',
  projectId: 'your-project-id',
});

// The SDK automatically tracks page views, clicks, scroll depth,
// navigation, errors, performance metrics, and session replays.

// Track e-commerce events manually:
crow.trackAddToCart({
  productId: 'prod_123',
  productName: 'Running Shoes',
  price: 129.99,
  quantity: 1,
});
```

[Full Web SDK documentation >>>](./integrations/web-sdk.md)

---

## CCTV CLI

Install the CLI and grab your first camera frame.

```bash
npm install -g @b3-crow/cctv-cli
```

```bash
# Grab a single frame from an RTSP stream
cctv grab --rtsp "rtsp://192.168.1.100:554/stream" --out frame.jpg

# Continuously sample at 1 FPS to a local spool directory
cctv sample \
  --store my_store \
  --camera cam_01 \
  --rtsp "rtsp://192.168.1.100:554/stream"
```

[Full CCTV CLI documentation >>>](./integrations/cctv-cli.md)

---

## Social Collector

Social data collection is configured through the CROW dashboard, not through code. Navigate to **Integrations > Social** in your dashboard and add the platforms you want to monitor.

Supported platforms: Twitter, Reddit, Instagram, TikTok, LinkedIn, Facebook, YouTube, and News.

CROW automatically searches for brand mentions on a scheduled basis and processes the results through the AI pipeline.

[Full Social Collector documentation >>>](./integrations/social-webhook.md)

---

## MCP Server

Connect CROW to Claude Desktop by adding this to your Claude Desktop configuration file:

```json
{
  "mcpServers": {
    "crow": {
      "url": "https://mcp.crowai.dev/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_API_KEY"
      }
    }
  }
}
```

Once connected, Claude can search your product catalog, query interaction history, and analyze behavioral patterns using natural language.

[Full MCP Server documentation >>>](./integrations/mcp-server.md)

---

## A2A Protocol

Send a task to the CROW A2A agent using any HTTP client:

```python
import httpx

response = httpx.post(
    "https://a2a.crowai.dev/a2a/jsonrpc",
    json={
        "jsonrpc": "2.0",
        "id": 1,
        "method": "tasks/send",
        "params": {
            "id": "task-001",
            "message": {
                "role": "user",
                "parts": [{"kind": "text", "text": "What are the top selling products?"}],
                "metadata": {"organizationId": "your-org-id"}
            }
        }
    }
)

print(response.json())
```

[Full A2A Protocol documentation >>>](./integrations/a2a-protocol.md)

---

## Self-Hosting

CROW is source-available. You can deploy the entire platform on your own Cloudflare account.

**What you need:**
- Cloudflare account (free tier works for most services)
- Bun 1.x for most CROW repos, plus Node.js 20+ and Wrangler CLI where needed
- Stripe account (for billing features, optional)

**Quick start:**
```bash
# Clone and set up all repos
git clone https://github.com/CROW-B3/local-dev.git
cd local-dev && bun install && bun run clone

# Deploy a service
cd ../core-api-gateway
npx wrangler d1 create crow-auth-db
npx wrangler d1 migrations apply crow-auth-db
npx wrangler secret put INTERNAL_GATEWAY_KEY
npx wrangler deploy
```

See [Local Dev](./local-dev.md) for the multi-repo workflow and [Source Availability](./open-source.md) for the full platform architecture and component listing.

:::caution
CROW is not actively maintained. If you self-host, you are responsible for your own security, updates, and operations.
:::
