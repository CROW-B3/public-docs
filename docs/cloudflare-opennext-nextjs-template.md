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

### Installation

```bash
git clone https://github.com/CROW-B3/cloudflare-opennext-nextjs-template.git
cd cloudflare-opennext-nextjs-template
npm install  # or pnpm install / bun install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## Deployment

Build and deploy your Next.js app to Cloudflare:

```bash
npm run deploy  # Builds, adapts, and deploys to Cloudflare Workers
npm run preview  # Preview deployment locally
```

## Available Scripts

- `npm run dev` - Start Next.js dev server with Turbopack
- `npm run build` - Build Next.js app and OpenNext.js adapter
- `npm run deploy` - Build and deploy to Cloudflare
- `npm run lint` - Run Next.js linting
- `npm run cf-typegen` - Generate Cloudflare binding types

## Configuration

Configure Next.js in `next.config.ts`, OpenNext.js adapter in `open-next.config.ts`, and Cloudflare Workers in `wrangler.jsonc`.

### Environment Variables

Set environment variables for Cloudflare:

```bash
wrangler secret put VARIABLE_NAME
npm run cf-typegen  # Generate TypeScript types
```

## Features

- **Edge Rendering**: Your Next.js app runs on Cloudflare's global edge network with low latency and automatic geographic distribution
- **Static Optimization**: Static pages are optimized and cached for fast page loads and global CDN distribution
- **Incremental Static Regeneration (ISR)**: Update static content without rebuilding using background revalidation

## Best Practices

1. Use Static Generation to pre-render pages when possible
2. Optimize images using Next.js Image component
3. Leverage Cloudflare's caching for better performance
4. Use TypeScript throughout your app
5. Test locally before deploying

## Limitations

Be aware of Cloudflare Workers limitations including limited execution time per request, memory constraints, maximum script size, and initial startup time considerations.

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
