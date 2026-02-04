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

Clone the repository:

```bash
git clone https://github.com/CROW-B3/blog.crowai.dev.git
cd blog.crowai.dev
```

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321) to view the blog.

## Available Scripts

```bash
# Development
npm run dev              # Start Astro dev server
npm run start            # Alias for dev

# Production Build
npm run build            # Type check and build
npm run preview          # Preview production build

# Code Quality
npm run prettier         # Format code with Prettier

# Utilities
npm run astro            # Run Astro CLI commands
```

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

Create new blog posts in the `src/content/` directory:

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

Use MDX to include interactive components:

```mdx
import { CustomComponent } from '../components/CustomComponent';

# Blog Post

Regular markdown content.

<CustomComponent prop="value" />

More markdown content.
```

### Code Highlighting

Syntax highlighting with Expressive Code:

````markdown
```typescript
// Your code here
function example() {
  return "highlighted";
}
```
````

### Diagrams

Create diagrams with Mermaid:

````markdown
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
````

## Features

### Content Plugins

- **Expressive Code**: Advanced syntax highlighting with line numbers and collapsible sections
- **Mermaid**: Diagram and chart generation
- **Rehype KaTeX**: Mathematical notation support
- **Remark Emoji**: Emoji support in markdown
- **Rehype External Links**: Enhanced external link handling

### React Integration

Integrate React components within Astro pages:

```astro
---
import { ReactComponent } from '../components/ReactComponent';
---

<ReactComponent client:load />
```

### RSS Feed

Automatic RSS feed generation for blog subscribers.

### SEO Optimization

Built-in SEO features:
- Sitemap generation
- Meta tags
- Open Graph support
- Structured data

## Development Workflow

### Adding New Posts

1. Create a new MDX file in `src/content/blog/`
2. Add frontmatter metadata
3. Write your content
4. Preview locally with `npm run dev`
5. Commit and push to deploy

### Code Quality

Pre-commit hooks ensure code quality:

```bash
# Format code
npm run prettier

# Lint staged files (automatic on commit)
npm run lint-staged
```

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

### Astro Configuration

Customize Astro in `astro.config.mjs`:

```javascript
export default {
  // Your Astro configuration
}
```

### Tailwind Configuration

Customize styling in `tailwind.config.js`:

```javascript
export default {
  // Your Tailwind configuration
}
```

### Prettier Configuration

Code formatting rules in `package.json`:

```json
{
  "prettier": {
    "semi": false,
    "singleQuote": true,
    "plugins": [
      "prettier-plugin-astro",
      "prettier-plugin-tailwindcss"
    ]
  }
}
```

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
