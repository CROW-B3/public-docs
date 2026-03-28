---
sidebar_position: 6
---

# Local Dev Toolkit

`CROW-B3/local-dev` is a developer utility that lets you clone, sync, and manage all CROW-B3 repositories with a single command. It also includes commands for cross-repo branch checkout, Cloudflare resource cleanup, and starting dev servers.

- **GitHub**: [CROW-B3/local-dev](https://github.com/CROW-B3/local-dev)

## Prerequisites

- [Bun](https://bun.sh) v1.0+
- [Git](https://git-scm.com)
- GitHub access to the CROW-B3 organisation

## Setup

```bash
git clone https://github.com/CROW-B3/local-dev.git
cd local-dev
bun install

# Clone all default repositories into the parent directory
bun run clone
```

All 22 default repositories will be cloned side-by-side in the parent directory and their dependencies installed.

## Commands

### `clone` — Clone repositories

```bash
bun run clone              # Clone default repos
bun run clone --all        # Include optional repos
bun run clone --only NAME  # Clone a single repo
```

### `sync` — Pull latest changes

```bash
bun run sync               # Sync all repos (skips dirty working trees)
bun run sync --force       # Stash changes before syncing
bun run sync --parallel    # Sync 3 repos concurrently
bun run sync --only NAME   # Sync a single repo
```

### `checkout` — Cross-repo branch checkout

Checks out a branch by keyword across all cloned repositories.

```bash
bun run checkout CROW-156             # Checkout branch matching keyword
bun run checkout CROW-156 --start     # Checkout and start dev servers
bun run checkout CROW-156 --only NAME # Checkout a single repo
```

Features:
- **Fuzzy keyword matching** — finds branches containing the keyword (case-insensitive)
- **Auto-checkout** — checks out automatically if only one branch matches
- **Smart selection** — prompts with PR indicators if multiple branches match
- **Auto-install** — installs deps and linked packages before starting servers (with `--start`)
- **Named output** — dev server output is prefixed with the repo name for clarity

### `clean` — Interactive Cloudflare resource cleanup

```bash
bun run clean              # Interactive D1/R2 cleanup
```

Requires `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` environment variables for R2 operations.

### `cleanup` — Destroy all Cloudflare resources for an environment

> **Destructive** — deletes D1 databases, R2 buckets, KV namespaces, and Queues.

```bash
bun run cleanup:dev        # Clean dev environment (crow-*-dev)
bun run cleanup:prod       # Clean prod environment (crow-*)
```

Safety features: pattern matching, per-resource confirmation prompts, detailed listing before deletion, and a summary report.

## Workspace Layout

After running `bun run clone`, your workspace will look like this:

```
~/workspace/
├── local-dev/           ← you are here
├── core-api-gateway/
├── core-auth-service/
├── dashboard-client/
└── ...                  (all other repos)
```

## Configuration

Edit `repos.config.ts` to add, remove, or customise which repositories are cloned by default.

## Troubleshooting

| Problem | Solution |
|---|---|
| Auth failed | Run `gh auth login` or configure SSH keys |
| Permission denied | Check CROW-B3 organisation access |
| Sync skipping repos | Has uncommitted changes — use `--force` |
| Checkout finds no branch | Branch doesn't exist on remote, check spelling |
| Dev servers don't start | Ensure dependencies are installed with `bun install` |
| Port already in use | Another process using port, check with `lsof -i :PORT` |
| R2 cleanup fails | Set `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` |
