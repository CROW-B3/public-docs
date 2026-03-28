---
sidebar_position: 16
---

# Engineering Blog

The **CROW Engineering Blog** ([blog.crowai.dev](https://blog.crowai.dev)) is the official technical blog for the B3 engineering team. It covers deep dives, tutorials, architecture decisions, and engineering insights from building the CROW platform.

- **Website**: [blog.crowai.dev](https://blog.crowai.dev)
- **GitHub**: [CROW-B3/blog.crowai.dev](https://github.com/CROW-B3/blog.crowai.dev)

## Tech Stack

| Library | Purpose |
|---|---|
| Astro 5 | Static site generator |
| React 19 | Interactive components |
| MDX | Markdown with embedded JSX components |
| Tailwind CSS v4 | Styling |
| Expressive Code | Advanced syntax highlighting |
| Mermaid | Diagram and chart generation |
| Radix UI | Accessible component primitives |
| TypeScript | Type safety |

## Local Development

```bash
git clone https://github.com/CROW-B3/blog.crowai.dev.git
cd blog.crowai.dev
npm install
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321).

## Writing a Post

Create a new `.mdx` file in `src/content/blog/` with the following frontmatter:

```mdx
---
title: "Your Post Title"
description: "A short description shown in previews"
pubDate: "2024-01-01"
author: "Author Name"
tags: ["tag1", "tag2"]
---

Your content here, with full MDX support.
```

### MDX Features

- **Expressive Code** — syntax highlighting with line numbers, diff views, and collapsible sections
- **Mermaid** — embed diagrams directly in markdown using fenced code blocks with `mermaid` language tag
- **React components** — import and use any React component directly in `.mdx` files with `client:load`
- **KaTeX** — mathematical notation via `$...$` and `$$...$$` syntax

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Astro dev server |
| `npm run build` | Type-check and build |
| `npm run preview` | Preview production build locally |
| `npm run prettier` | Format code with Prettier |

## Deployment

The blog deploys automatically on every push to `main`. To build manually:

```bash
npm run build   # Output goes to dist/
npm run preview # Preview the built site
```

## SEO

Built-in SEO features: sitemap generation, Open Graph meta tags, structured data, and RSS feed — all configured automatically by Astro.
