---
sidebar_position: 2
---

# Open Source Projects

CROW by B3 maintains a growing collection of open-source NPM packages, developer tools, Cloudflare templates, and demo applications. All projects are available on [GitHub](https://github.com/CROW-B3).

## NPM Packages

| Package | Description | NPM |
|---|---|---|
| [`@b3-crow/ui-kit`](./ui-kit.md) | React component library with Framer Motion animations and dark-theme design | [![npm](https://img.shields.io/npm/v/@b3-crow/ui-kit)](https://www.npmjs.com/package/@b3-crow/ui-kit) |
| [`@b3-crow/website-hook-sdk`](./website-hook-sdk.md) | Lightweight SDK for capturing web interactions and sending them into the CROW pipeline | [![npm](https://img.shields.io/npm/v/@b3-crow/website-hook-sdk)](https://www.npmjs.com/package/@b3-crow/website-hook-sdk) |

## Developer Tools

| Repository | Description |
|---|---|
| [cctv-cli](./cctv-cli.md) | Bun CLI for sampling RTSP feeds and streaming frames to CROW's edge ingest service |
| [local-dev](./local-dev.md) | Clone, sync, and manage all CROW repos with a single command |
| [npm-sdk-template](./npm-sdk-template.md) | Ready-to-publish TypeScript SDK starter with CI/CD and lint pre-configured |

## AI & Agent Integrations

| Repository | Description |
|---|---|
| [mcp-service](./mcp-service.md) | Model Context Protocol server exposing CROW tools to AI assistants (Claude, Cursor, etc.) |
| [a2a-service](./a2a-service.md) | Agent-to-Agent JSON-RPC service for autonomous agent interoperability |
| [pattern-recognition-poc](./pattern-recognition-poc.md) | POC for AI-powered CCTV behavior analysis using MediaPipe and Gemini |

## Cloudflare Templates

Opinionated, ready-to-deploy starters for Cloudflare's edge platform.

| Repository | Description | Live Demo |
|---|---|---|
| [cloudflare-opennext-nextjs-template](./cloudflare-opennext-nextjs-template.md) | Next.js 15 + OpenNext.js on Cloudflare Workers | [Demo](https://cloudflare-opennext-nextjs-template.bitbybit-b3.workers.dev) |
| [cloudflare-workers-containers-hono-template](./cloudflare-workers-containers-hono-template.md) | Hono worker routing to a serverless container backend | [Demo](https://cloudflare-workers-containers-hono-template.bitbybit-b3.workers.dev) |
| [cloudflare-workers-containers-python-template](./cloudflare-workers-containers-python-template.md) | Python app running in a Cloudflare Workers Container | [Demo](https://cloudflare-workers-containers-python-template.bitbybit-b3.workers.dev) |
| [cloudflare-workers-containers-go-template](./cloudflare-workers-containers-go-template.md) | Go app running in a Cloudflare Workers Container | [Demo](https://cloudflare-workers-containers-go-template.bitbybit-b3.workers.dev) |

## Demo Applications & Blog

| Repository | Description | URL |
|---|---|---|
| [rogue-store](./rogue-store.md) | Full-stack demo clothing e-commerce app and CROW SDK test client | [rogue.crowai.dev](https://rogue.crowai.dev) |
| [blog.crowai.dev](./blog.md) | CROW engineering blog built with Astro | [blog.crowai.dev](https://blog.crowai.dev) |

## Contributing

Contributions are welcome across all open-source repositories. General workflow:

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/your-feature`)
3. Make your changes with tests where applicable
4. Run linting and formatting (`bun run lint && bun run format`)
5. Commit using [Conventional Commits](https://www.conventionalcommits.org/) format
6. Submit a pull request

Check individual repository README files for project-specific guidelines.

## License

Unless otherwise specified, all CROW by B3 open-source projects are released under the **MIT License**. See each repository for specific license information.
