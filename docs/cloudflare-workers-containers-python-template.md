---
sidebar_position: 13
---

# Cloudflare Workers Containers — Python Template

`CROW-B3/cloudflare-workers-containers-python-template` is a starter for running **Python** applications in Cloudflare Workers Containers — containerised Python at the global edge.

- **GitHub**: [CROW-B3/cloudflare-workers-containers-python-template](https://github.com/CROW-B3/cloudflare-workers-containers-python-template)
- **Live Demo**: [cloudflare-workers-containers-python-template.bitbybit-b3.workers.dev](https://cloudflare-workers-containers-python-template.bitbybit-b3.workers.dev)
- **License**: MIT

## Features

- Python runtime inside a Cloudflare Workers Container
- Global edge deployment with low latency
- Hybrid TypeScript (Worker routing) + Python (container app) setup
- GitHub Actions CI/CD workflow included
- Docker-based container build

## Getting Started

```bash
git clone https://github.com/CROW-B3/cloudflare-workers-containers-python-template.git
cd cloudflare-workers-containers-python-template
pip install -r requirements.txt
```

Configure your Cloudflare credentials in `wrangler.jsonc`, then deploy:

```bash
wrangler deploy
```

This builds the Python Docker container, pushes it to Cloudflare, and deploys it globally.

## Architecture

```
Request → Cloudflare Edge → TypeScript Worker → Python Container → Response
```

Your Python app is packaged in a Docker container and distributed to Cloudflare's edge network. Incoming requests hit the TypeScript Worker first (for routing, auth, etc.) and are then proxied to the nearest container instance.

## Configuration

| File | Purpose |
|---|---|
| `wrangler.jsonc` | Worker name, container bindings, Durable Object definitions |
| `Dockerfile` | Python application container definition |
| `requirements.txt` | Python dependencies |

## Best Practices

1. Use slim Python base images (`python:3.12-slim`) to minimise container size
2. Keep initialisation code minimal to reduce cold-start latency
3. Leverage Docker layer caching — put `COPY requirements.txt` before `COPY . .`
4. Store secrets in Cloudflare Worker environment variables, not in the image
5. Validate all incoming request data before processing

## Limitations

- CPU time limit per request (varies by Cloudflare plan)
- Memory constraints
- Ephemeral filesystem — use R2, D1, or KV for persistence
- Initial container startup time on cold starts

## Resources

- [Cloudflare Workers Containers Docs](https://developers.cloudflare.com/workers/containers/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- [Python Documentation](https://www.python.org/)
