---
sidebar_position: 1
slug: /
title: CROW Developer Documentation
---

# CROW Developer Documentation

:::info Source-Available
CROW is **source-available**. The entire platform — 20+ microservices, 3 frontend clients, SDKs, CLI tools, and AI protocol servers — is available for anyone to use, study, fork, and self-host. The project is **not actively maintained**; there is no guaranteed support, updates, or bug fixes. Community contributions are welcome.
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
- **[Source Availability](./open-source.md)** -- Explore the full CROW platform, self-host it, or fork it for your own use.
