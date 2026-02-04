# NPM SDK Template

A ready-to-go TypeScript/JavaScript SDK package starter, with linting, testing, build & publish workflows included.

## Overview

The CROW-B3 NPM SDK Template is a comprehensive starter template for building TypeScript/JavaScript SDK packages. It comes pre-configured with modern development tools, linting, formatting, and automated workflows to help you quickly bootstrap new SDK projects.

**Key Features:**
- Ready-to-publish NPM package structure
- TypeScript support with full type definitions
- ESLint and Prettier pre-configured
- Automated workflows with Husky and lint-staged
- Modern build setup with TypeScript compiler
- Commit linting with commitlint
- MIT License

## Getting Started

### Installation

```bash
bun add @b3-crow/npm-sdk-template
```

### Usage

```typescript
import {} from '@b3-crow/npm-sdk-template';
```

## Development

### Setup

```bash
git clone https://github.com/CROW-B3/npm-sdk-template.git
cd npm-sdk-template
bun install
```

Common commands: `bun build`, `bun lint`, `bun format`

### Development Workflow

1. Make changes to source files in `src/` directory
2. Run `bun build` to compile TypeScript to JavaScript
3. Use `bun lint` and `bun format` for code quality
4. Commit changes (automatically validated via Husky)

## Features

Pre-configured with TypeScript, ESLint, Prettier, Husky, lint-staged, and commitlint for modern SDK development.

## Resources

- **Repository**: [GitHub](https://github.com/CROW-B3/npm-sdk-template)
- **Package**: `@b3-crow/npm-sdk-template`
- **License**: MIT

## Contributing

Contributions are welcome! Please follow the conventional commits specification for commit messages.
