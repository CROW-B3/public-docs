# Cloudflare Workers Containers Hono Template

A Hono-powered Cloudflare Worker template that routes requests to a serverless Container backend using Cloudflare Workers Containers.

## Overview

This template provides a modern starter for building Cloudflare Workers applications using the Hono web framework. It's designed to route requests to serverless container backends via `@cloudflare/containers`, combining the power of edge computing with containerized applications.

**Key Features:**
- ⚡ Fast and lightweight with Hono framework
- 🐳 Cloudflare Workers Containers support
- 📝 OpenAPI/Swagger documentation with Zod schema validation
- 🔷 Full TypeScript support (75.2% of codebase)
- 🎯 Modern ESLint configuration
- 🎨 Code formatting with Prettier
- 🔄 Git hooks with Husky and lint-staged
- 🚀 Built-in dev server and deployment scripts
- ✅ Commit message validation with commitlint
- 🌐 Live deployment example available

## Getting Started

### Prerequisites

- Bun runtime
- Cloudflare account
- Wrangler CLI

### Installation

Clone the template:

```bash
git clone https://github.com/CROW-B3/cloudflare-workers-containers-hono-template.git
cd cloudflare-workers-containers-hono-template
```

Install dependencies:

```bash
bun install
```

### Development

Start the development server:

```bash
bun run dev
# or using Wrangler
wrangler dev
```

For local Bun development (without Cloudflare Workers):

```bash
# Watch mode
bun run bun:dev

# Start server
bun run bun:start
```

### Deployment

Deploy to Cloudflare Workers:

```bash
bun run deploy
```

This will minify and deploy your worker to Cloudflare's edge network.

## Project Structure

```
cloudflare-workers-containers-hono-template/
├── .github/              # GitHub workflows and CI/CD
├── .husky/               # Git hooks for pre-commit checks
├── src/
│   └── index.ts          # Main application entry point
├── Dockerfile            # Container backend definition
├── wrangler.jsonc        # Cloudflare Workers configuration
├── tsconfig.json         # TypeScript configuration
├── eslint.config.mts     # ESLint linting rules
├── .prettierrc           # Code formatting rules
├── package.json          # Project dependencies and scripts
└── bun.lock              # Bun dependency lockfile
```

## Key Technologies

### Hono Framework

Hono is a small, simple, and ultrafast web framework for Cloudflare Workers, Deno, Bun, and others. It provides:
- Express-like routing
- Middleware support
- TypeScript-first design
- Excellent performance

### OpenAPI/Swagger Support

The template includes:
- `@hono/swagger-ui`: Interactive API documentation
- `@hono/zod-openapi`: Type-safe OpenAPI schemas with Zod validation

### Cloudflare Workers Containers

Workers Containers allow you to run containerized applications at the edge, combining the benefits of:
- Edge computing with low latency
- Container portability and isolation
- Serverless scaling

## Available Scripts

```bash
# Development
bun run dev              # Start Wrangler dev server
bun run bun:dev         # Start Bun watch mode (local)
bun run bun:start       # Start Bun server (local)

# Deployment
bun run deploy          # Deploy to Cloudflare Workers (minified)

# Development Tools
bun run cf-typegen      # Generate TypeScript types for Cloudflare bindings
bun run lint            # Lint source code
bun run lint:fix        # Fix linting issues
bun run format          # Format code with Prettier

# Build
bun run bun:build       # Compile to standalone executable
```

## Configuration

### Wrangler Configuration

Configure your worker in `wrangler.jsonc`:

```jsonc
{
  "name": "your-worker-name",
  "main": "src/index.ts",
  "compatibility_date": "2024-01-01",
  // Add your bindings here
  "env": {
    "production": {
      // Add environment-specific configuration
    }
  }
}
```

### TypeScript Types

Generate Cloudflare binding types:

```bash
bun run cf-typegen
```

This creates type definitions for your Cloudflare bindings (KV, D1, R2, etc.).

## Code Quality

The template comes with pre-configured:

- **ESLint**: Using @antfu/eslint-config for consistent code style
- **Prettier**: Automatic code formatting
- **Husky**: Git hooks for pre-commit checks
- **lint-staged**: Run linters on staged files only
- **commitlint**: Enforce conventional commit message standards

## Resources

- **Repository**: [GitHub](https://github.com/CROW-B3/cloudflare-workers-containers-hono-template)
- **Live Demo**: [cloudflare-workers-containers-hono-template.bitbybit-b3.workers.dev](https://cloudflare-workers-containers-hono-template.bitbybit-b3.workers.dev)
- **Hono Documentation**: [hono.dev](https://hono.dev)
- **Cloudflare Workers Docs**: [developers.cloudflare.com](https://developers.cloudflare.com/workers/)
- **Wrangler CLI**: [developers.cloudflare.com/workers/wrangler](https://developers.cloudflare.com/workers/wrangler/)
- **License**: MIT

## Contributing

Contributions are welcome! Please follow the conventional commits specification for commit messages.
