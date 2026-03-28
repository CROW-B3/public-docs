---
sidebar_position: 7
---

# NPM SDK Template

`CROW-B3/npm-sdk-template` is a ready-to-publish TypeScript/JavaScript SDK package starter. It comes pre-wired with linting, formatting, git hooks, build tooling, and publish workflows so you can focus on writing your SDK rather than boilerplate.

- **GitHub**: [CROW-B3/npm-sdk-template](https://github.com/CROW-B3/npm-sdk-template)
- **License**: MIT

## Features

- **TypeScript** — tsconfig optimised for library development with dual ESM/CJS output
- **ESLint + Prettier** — pre-configured with best practices
- **Husky + lint-staged** — automated pre-commit checks
- **commitlint** — enforces [Conventional Commits](https://www.conventionalcommits.org/)
- **GitHub Actions** — CI/CD workflows for testing, linting, and publishing to NPM

## Getting Started

```bash
git clone https://github.com/CROW-B3/npm-sdk-template.git my-sdk
cd my-sdk
bun install
```

Then update `package.json` with your package name, version, description, and author, and start writing your SDK in `src/`.

## Development Workflow

```bash
bun run build   # Compile TypeScript → JavaScript
bun run lint    # Run ESLint
bun run format  # Format with Prettier
```

Commits are automatically validated via Husky. Use the Conventional Commits format:

```
feat: add new tracking method
fix: handle null response from API
docs: update README installation steps
```

## Project Structure

```
my-sdk/
├── src/            # Your SDK source code
├── dist/           # Compiled output (generated)
├── .husky/         # Git hooks
├── tsconfig.json   # TypeScript configuration
├── eslint.config.js
└── package.json
```

## Publishing to NPM

1. Update the `version` field in `package.json`
2. Run `bun run build` to compile
3. Run `npm publish --access public`

The included GitHub Actions workflow can automate publishing on tagged releases.
