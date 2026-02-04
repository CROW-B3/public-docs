# CROW Engineering Blog

The official engineering blog for CROW-B3, built with Astro and featuring technical content, tutorials, and insights.

## Overview

The CROW Engineering Blog (blog.crowai.dev) is a modern, content-focused blog platform built with Astro. It provides technical articles, tutorials, and insights from the CROW-B3 engineering team.

**Key Features:**
- Static site generation with Astro
- MDX support for interactive content
- Syntax highlighting with Expressive Code
- Mermaid diagrams integration
- RSS feed generation
- Sitemap generation
- React components integration
- Tailwind CSS v4 styling
- Responsive design
- Dark mode support

## Tech Stack

- **Astro 5**: Static site generator
- **React 19**: Component library
- **MDX**: Markdown with JSX components
- **Tailwind CSS v4**: Styling framework
- **Expressive Code**: Syntax highlighting
- **Mermaid**: Diagram generation
- **Radix UI**: Accessible components
- **TypeScript**: Type safety

## Getting Started

### Prerequisites

- Node.js (recommended version)
- Package manager (npm, pnpm, or bun)

### Installation

```bash
git clone https://github.com/CROW-B3/blog.crowai.dev.git
cd blog.crowai.dev
npm install
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321) to view the blog.

## Available Scripts

- `npm run dev` - Start Astro dev server
- `npm run build` - Type check and build
- `npm run preview` - Preview production build
- `npm run prettier` - Format code with Prettier

## Project Structure

```
blog.crowai.dev/
├── src/
│   ├── components/      # React and Astro components
│   ├── content/         # Blog posts and articles
│   ├── layouts/         # Page layouts
│   ├── pages/           # Astro pages
│   ├── styles/          # Global styles
│   └── utils/           # Utility functions
├── public/              # Static assets
├── astro.config.mjs     # Astro configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## Content Management

### Writing Blog Posts

Create new blog posts in `src/content/` directory with frontmatter:

```mdx
---
title: "Your Post Title"
description: "Post description"
pubDate: "2024-01-01"
author: "Author Name"
tags: ["tag1", "tag2"]
---

Your content here with full MDX support.
```

### MDX Features

MDX allows importing and using React components directly in markdown. Code highlighting is supported via Expressive Code, and diagrams can be created using Mermaid syntax. See the [Astro MDX documentation](https://docs.astro.build/en/guides/markdown-content/) for details.

## Features

### Content Plugins

- **Expressive Code**: Advanced syntax highlighting with line numbers and collapsible sections
- **Mermaid**: Diagram and chart generation
- **Rehype KaTeX**: Mathematical notation support
- **Rehype External Links**: Enhanced external link handling

### React Integration

React components can be integrated within Astro pages using the `client:load` directive.

### SEO Optimization

Built-in SEO features include sitemap generation, meta tags, Open Graph support, and structured data.

## Development Workflow

1. Create a new MDX file in `src/content/blog/`
2. Add frontmatter metadata
3. Write your content
4. Preview locally with `npm run dev`
5. Commit and push to deploy

Pre-commit hooks ensure code quality with automated formatting and linting.

## Deployment

The blog is deployed automatically on push to the main branch.

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Configuration

Customize Astro in `astro.config.mjs`, styling in `tailwind.config.js`, and formatting rules are defined in `package.json` under the `prettier` key.

## Resources

- **Repository**: [GitHub](https://github.com/CROW-B3/blog.crowai.dev)
- **Website**: [blog.crowai.dev](https://blog.crowai.dev)
- **Astro Documentation**: [docs.astro.build](https://docs.astro.build)
- **License**: Private

## Contributing

Contributions to the blog are managed by the CROW-B3 engineering team. For questions or suggestions:
- Check the [GitHub Issues](https://github.com/CROW-B3/blog.crowai.dev/issues)
- Contact the engineering team
- Follow the contribution guidelines
