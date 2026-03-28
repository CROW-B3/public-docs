---
sidebar_position: 1
slug: /
---

# CROW by B3

**CROW** (Cognitive Reasoning Observation Watcher) is a multi-channel behavioral intelligence platform built by **B3**. It captures user interactions across web, physical retail, and social media channels, enriches them with AI, detects behavioral patterns, and surfaces actionable insights through a unified dashboard.

## What CROW Does

| Channel | How it works |
|---|---|
| **Web** | The [Website Hook SDK](./website-hook-sdk.md) captures page views, clicks, and custom events from any website and streams them into the CROW pipeline. |
| **Physical Retail** | The [CCTV CLI](./cctv-cli.md) samples RTSP feeds from in-store cameras and forwards frames to CROW's ingest service for AI analysis. |
| **Social Media** | CROW's social collector ingests public mentions from Instagram, TikTok, Reddit, Twitter/X, and Facebook using a privacy-first, aggregate-only architecture. |

All incoming data is enriched by **Google Gemini**, processed through pattern detection, and stored with vector embeddings for semantic search.

## Platform Architecture

```
 Web Browser  ──┐
 CCTV Feeds  ──┤──▶ Edge Ingest ──▶ Interaction Service ──▶ Pattern Service ──▶ Dashboard
 Social APIs ──┘                          │
                                          └──▶ Gemini AI enrichment
```

CROW is built on **Cloudflare Workers**, **Durable Objects**, **R2**, **D1**, and **Queues**, deployed globally at the edge. The backend services communicate through typed queues and are exposed externally via a central API Gateway.

## For Developers

This public documentation covers everything you need to integrate with CROW or use our open-source tools:

### NPM Packages
- **[UI Kit](./ui-kit.md)** — React component library with animations and dark-theme design
- **[Website Hook SDK](./website-hook-sdk.md)** — Lightweight web tracking SDK

### Developer Tools
- **[CCTV CLI](./cctv-cli.md)** — CLI for streaming RTSP feeds into the CROW pipeline
- **[Local Dev Toolkit](./local-dev.md)** — Clone, sync, and manage all CROW repos with one command
- **[NPM SDK Template](./npm-sdk-template.md)** — Starter template for publishing TypeScript SDKs

### AI & Agent Integrations
- **[MCP Service](./mcp-service.md)** — Model Context Protocol server exposing CROW tools to AI assistants
- **[A2A Service](./a2a-service.md)** — Agent-to-Agent protocol service for autonomous agent interoperability
- **[Pattern Recognition POC](./pattern-recognition-poc.md)** — AI-powered CCTV behavior analysis using MediaPipe and Gemini

### Cloudflare Templates
- **[OpenNext.js Template](./cloudflare-opennext-nextjs-template.md)** — Deploy Next.js apps to Cloudflare Workers
- **[Hono Containers Template](./cloudflare-workers-containers-hono-template.md)** — Hono worker routing to serverless containers
- **[Python Containers Template](./cloudflare-workers-containers-python-template.md)** — Python apps on Cloudflare Workers Containers
- **[Go Containers Template](./cloudflare-workers-containers-go-template.md)** — Go apps on Cloudflare Workers Containers

### Demo Applications & Blog
- **[Rogue Store](./rogue-store.md)** — Full-stack demo e-commerce app and CROW SDK test client
- **[Engineering Blog](./blog.md)** — Technical articles from the B3 engineering team

## Community & Resources

- **GitHub Organisation**: [github.com/CROW-B3](https://github.com/CROW-B3)
- **Engineering Blog**: [blog.crowai.dev](https://blog.crowai.dev)
- **Public Docs**: [docs.crow.bbyb.dev](https://docs.crow.bbyb.dev)
- **NPM Packages**: [@b3-crow](https://www.npmjs.com/search?q=%40b3-crow)
