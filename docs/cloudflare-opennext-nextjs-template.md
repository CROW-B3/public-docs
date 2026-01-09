# Cloudflare OpenNext.js Template

A template for deploying Next.js applications on Cloudflare using OpenNext.js adapter.

## Overview

This template enables you to deploy Next.js applications on Cloudflare's edge network using the OpenNext.js Cloudflare adapter. It provides a seamless way to run your Next.js apps with Cloudflare's global infrastructure, combining Next.js's powerful features with Cloudflare's edge computing capabilities.

**Key Features:**
- Next.js 15+ support with App Router
- Deploy to Cloudflare's global edge network
- Tailwind CSS v4 pre-configured
- Full TypeScript support (70.2% of codebase)
- Edge rendering and static optimization
- OpenNext.js adapter for Cloudflare
- React 19 compatibility
- Wrangler CLI integration
- Docker containerization support
- GitHub Actions CI/CD automation
- Live deployment example available

## Getting Started

### Prerequisites

- Node.js 20+ or later
- Cloudflare account
- Wrangler CLI
- Bun (recommended) or npm/pnpm

### Installation

Clone the template:

```bash
git clone https://github.com/CROW-B3/cloudflare-opennext-nextjs-template.git
cd cloudflare-opennext-nextjs-template
```

Install dependencies:

```bash
npm install
# or
pnpm install
# or
bun install
```

### Development

Start the Next.js development server:

```bash
bun run dev
```

This will start the Next.js development server with Turbopack for fast hot module replacement.

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## Deployment

### Build and Deploy

Build and deploy your Next.js app to Cloudflare:

```bash
bun run deploy
```

This command will:
1. Build your Next.js application
2. Run the OpenNext.js Cloudflare adapter
3. Deploy to Cloudflare Workers

### Build Only

To build without deploying:

```bash
bun run build
```

### Upload Only

To upload a previously built application:

```bash
bun run upload
```

### Preview

Preview your deployment locally before publishing:

```bash
bun run preview
```

## Available Scripts

```bash
# Development
bun run dev              # Start Next.js dev server with Turbopack

# Production Build
bun run build            # Build Next.js app and OpenNext.js adapter
bun run start            # Start production Next.js server (local)

# Cloudflare Deployment
bun run deploy           # Build and deploy to Cloudflare
bun run upload           # Upload built app to Cloudflare
bun run preview          # Preview deployment locally

# Development Tools
bun run lint             # Run Next.js linting
bun run cf-typegen       # Generate Cloudflare binding types
```

## Project Structure

```
cloudflare-opennext-nextjs-template/
├── .github/
│   └── workflows/       # CI/CD automation pipelines
├── app/                 # Next.js App Router directory
├── public/              # Static assets
├── cloudflare-env.d.ts  # Cloudflare environment types
├── next.config.ts       # Next.js configuration (TypeScript)
├── open-next.config.ts  # OpenNext.js adapter configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.mjs   # PostCSS configuration
├── tsconfig.json        # TypeScript configuration
├── wrangler.jsonc       # Cloudflare Workers configuration
├── Dockerfile           # Docker containerization
├── package.json         # Project dependencies
└── bun.lock             # Bun dependency lockfile
```

## Key Technologies

### Next.js 15

The latest version of Next.js with:
- App Router for modern routing
- Server Components
- Streaming and Suspense
- Improved performance and developer experience

### OpenNext.js for Cloudflare

The OpenNext.js adapter enables Next.js deployment on Cloudflare:
- Converts Next.js build output for Cloudflare Workers
- Handles edge runtime compatibility
- Optimizes for Cloudflare's infrastructure
- Supports ISR, SSR, and SSG

### Tailwind CSS v4

Pre-configured with the latest Tailwind CSS:
- Utility-first CSS framework
- PostCSS integration
- Modern design system
- Responsive design utilities

### React 19

Built with React 19 for:
- Latest React features
- Improved performance
- Better developer experience

## Configuration

### Next.js Configuration

Configure Next.js in `next.config.ts`:

```typescript
export default {
  // Your Next.js configuration
}
```

### OpenNext.js Configuration

Configure the OpenNext.js adapter in `open-next.config.ts`:

```typescript
export default {
  // OpenNext.js adapter configuration for Cloudflare
}
```

### Cloudflare Workers Configuration

Configure Cloudflare Workers in `wrangler.jsonc`:

```jsonc
{
  "name": "nextjs-app",
  "compatibility_date": "2024-01-01"
}
```

### Tailwind CSS Configuration

The template includes Tailwind CSS v4 with PostCSS:

```javascript
// postcss.config.mjs
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

### Environment Variables

Set environment variables for Cloudflare:

```bash
wrangler secret put VARIABLE_NAME
```

Generate TypeScript types for your environment:

```bash
bun run cf-typegen
```

## Features

### Edge Rendering

Your Next.js app runs on Cloudflare's global edge network:
- Low latency worldwide
- Automatic geographic distribution
- Edge-side rendering for dynamic content

### Static Optimization

Static pages are optimized and cached:
- Fast page loads
- Reduced server costs
- Global CDN distribution

### Incremental Static Regeneration (ISR)

Update static content without rebuilding:
- Background revalidation
- Stale-while-revalidate pattern
- Efficient content updates

## Best Practices

### Performance

1. **Use Static Generation**: Pre-render pages when possible
2. **Optimize Images**: Use Next.js Image component
3. **Edge Caching**: Leverage Cloudflare's caching
4. **Code Splitting**: Automatic with Next.js App Router

### Development

1. **Type Safety**: Use TypeScript throughout your app
2. **Linting**: Run linting regularly
3. **Testing**: Test locally before deploying
4. **Environment Variables**: Use Cloudflare secrets for sensitive data

## Limitations

Be aware of Cloudflare Workers limitations:

- **Execution Time**: Limited CPU time per request
- **Memory**: Memory constraints for Workers
- **Bundle Size**: Maximum script size limitations
- **Cold Starts**: Initial startup time considerations

## Resources

- **Repository**: [GitHub](https://github.com/CROW-B3/cloudflare-opennext-nextjs-template)
- **Live Demo**: [cloudflare-opennext-nextjs-template.bitbybit-b3.workers.dev](https://cloudflare-opennext-nextjs-template.bitbybit-b3.workers.dev)
- **Next.js Documentation**: [nextjs.org](https://nextjs.org/)
- **OpenNext.js**: [opennextjs.dev](https://opennextjs.dev/)
- **Cloudflare Workers Docs**: [developers.cloudflare.com](https://developers.cloudflare.com/workers/)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com/)
- **License**: MIT

## Support

For issues and questions:
- Check the [GitHub Issues](https://github.com/CROW-B3/cloudflare-opennext-nextjs-template/issues)
- Review Next.js documentation
- Check OpenNext.js documentation
- Join the CROW-B3 community

## Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request
