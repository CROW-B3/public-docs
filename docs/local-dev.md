---
sidebar_position: 6
title: Local Dev
---

# Local Dev

`local-dev` is the multi-repo workspace helper for CROW contributors and self-hosters. It clones the standard repository set, keeps repos in sync, and helps you switch branches across the workspace with one command.

## Overview

The tool is built with Bun and is meant for teams working across many CROW repositories at once. Instead of cloning and updating each repo manually, you manage the workspace from a single place.

**Key Features:**
- Clone the default CROW repository set with one command
- Include optional repos such as docs sites and starter templates with `--all`
- Sync repos while skipping dirty worktrees by default
- Check out matching ticket branches across multiple repos
- Run destructive Cloudflare cleanup commands with explicit confirmation

## Getting Started

### Prerequisites

- Bun v1.0+
- Git
- GitHub access to the `CROW-B3` organization

### Setup

```bash
git clone https://github.com/CROW-B3/local-dev.git
cd local-dev
bun install
bun run clone
```

The default clone set currently pulls 22 repositories into the parent directory.

## Common Commands

### Clone

```bash
bun run clone
bun run clone --all
bun run clone --only dashboard-client
```

### Sync

```bash
bun run sync
bun run sync --force
bun run sync --parallel
bun run sync --only core-api-gateway
```

### Checkout

```bash
bun run checkout CROW-156
bun run checkout CROW-156 --start
bun run checkout CROW-156 --only dashboard-client
```

`--start` installs dependencies and starts the matching development servers after checkout.

## Cleanup Commands

Interactive cleanup:

```bash
bun run clean
```

Environment teardown:

```bash
bun run cleanup:dev
bun run cleanup:prod
```

`cleanup:*` removes matching D1 databases, R2 buckets, KV namespaces, and Queues. Use those commands only when you want to rebuild an environment from scratch.

## Workspace Shape

```text
~/workspace/
├── local-dev/
├── core-api-gateway/
├── core-auth-service/
├── dashboard-client/
└── ...
```

## Resources

- **Repository**: [GitHub](https://github.com/CROW-B3/local-dev)
- **Package Name**: `@crow-b3/local-dev`
- **License**: See repository
