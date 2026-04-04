---
sidebar_position: 1
slug: /
title: CROW Developer Documentation
---

# CROW Developer Documentation

:::info Source-Available
CROW is **source-available**. The platform includes the production services plus SDKs, CLI tools, starter templates, frontend clients, and AI protocol servers that power the wider CROW ecosystem. The project is **not actively maintained**; there is no guaranteed support, updates, or bug fixes. Community contributions are welcome.
:::

**CROW** (Cognitive Reasoning Observation Watcher) is an AI-powered customer intelligence platform that collects behavioral data from multiple channels, processes it through AI pipelines, and delivers actionable insights. Built by **B3**, CROW gives businesses a unified view of how customers interact with their products across web, physical retail, and social media.

CROW captures raw interaction data, enriches it with AI-generated analysis (behavioral patterns, session summaries, product understanding), and exposes everything through a developer-friendly API. Whether you are building a dashboard, training a recommendation model, or connecting an AI agent, CROW provides the data layer.

---

## Data Channels

CROW ingests customer interaction data from three sources:

| Channel | What it captures | Integration |
|---------|-----------------|-------------|
| **Web SDK** | Page views, clicks, scroll depth, rage clicks, e-commerce events, session replays | JavaScript SDK installed on your site |
| **CCTV CLI** | Camera frames from physical retail locations via RTSP streams | CLI tool running on edge hardware |
| **Social Collector** | Brand mentions, reviews, and social conversations across platforms | Configured through the CROW dashboard |

## AI Protocols

CROW exposes your organization's data to AI agents through two standard protocols:

| Protocol | Use case | Endpoint |
|----------|----------|----------|
| **MCP Server** | Connect CROW to Claude Desktop, Cursor, or any MCP-compatible client | `https://mcp.crowai.dev/mcp` |
| **A2A Protocol** | Agent-to-agent communication following Google's A2A v0.3.0 spec | `https://a2a.crowai.dev/a2a/jsonrpc` |

---

## Quick Links

- **[Getting Started](./getting-started.md)** -- Sign up, get your API key, and send your first event in minutes.
- **[Web SDK Integration](./integrations/web-sdk.md)** -- Install the JavaScript SDK and start tracking user behavior.
- **[CCTV CLI Integration](./integrations/cctv-cli.md)** -- Sample RTSP camera frames from physical retail locations.
- **[Social Collector](./integrations/social-webhook.md)** -- Configure social media data collection for your organization.
- **[MCP Server](./integrations/mcp-server.md)** -- Connect CROW data to Claude Desktop and other MCP clients.
- **[A2A Protocol](./integrations/a2a-protocol.md)** -- Build agent-to-agent workflows with CROW.
- **[Cloudflare Workers Containers Go Template](./cloudflare-workers-containers-go-template.md)** -- Start a Go service on Cloudflare Workers Containers.
- **[Local Dev](./local-dev.md)** -- Bootstrap and sync the multi-repo CROW workspace.
- **[Engineering Blog](./blog.md)** -- Explore the Astro-based blog used for CROW engineering content.
- **[Source Availability](./open-source.md)** -- Explore the full CROW platform, self-host it, or fork it for your own use.

## Templates and Tools

- **[Cloudflare OpenNext.js Template](./cloudflare-opennext-nextjs-template.md)** -- Starter for Next.js apps deployed to Cloudflare with OpenNext.
- **[Cloudflare Workers Containers Hono Template](./cloudflare-workers-containers-hono-template.md)** -- Hono starter for container-backed Workers.
- **[Cloudflare Workers Containers Python Template](./cloudflare-workers-containers-python-template.md)** -- Python starter for Workers Containers.
- **[Cloudflare Workers Containers Go Template](./cloudflare-workers-containers-go-template.md)** -- Go HTTP server running behind a container-enabled Worker.
- **[NPM SDK Template](./npm-sdk-template.md)** -- Reusable TypeScript package starter.
- **[Local Dev](./local-dev.md)** -- Multi-repo clone, sync, and branch checkout helper for contributors and self-hosters.
