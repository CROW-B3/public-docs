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

### Prerequisites

- Bun 1.1.0 or later

### Setup

Clone the template repository:

```bash
git clone https://github.com/CROW-B3/npm-sdk-template.git
cd npm-sdk-template
```

Install dependencies:

```bash
bun install
```

### Common Commands

```bash
# Build the package
bun build

# Lint code
bun lint

# Fix linting issues
bun lint:fix

# Format code
bun format
```

### Development Workflow

1. Make your changes to the source files in the `src/` directory
2. Run `bun build` to compile TypeScript to JavaScript
3. Use `bun lint` to check for code quality issues
4. Use `bun format` to format your code
5. Commit your changes (commits are automatically linted via Husky)

## Features

### Pre-configured Tools

- **TypeScript**: Full TypeScript support for type-safe development
- **ESLint**: Code linting with @antfu/eslint-config
- **Prettier**: Consistent code formatting
- **Husky**: Git hooks for automated checks
- **lint-staged**: Run linters on staged files
- **commitlint**: Enforce conventional commit messages

### Package Configuration

The template comes with:
- Proper package.json structure for NPM publishing
- GitHub repository configuration
- MIT License
- Public access publishConfig
- Organized source structure
- WhiteSource dependency security scanning (.whitesource)

### Project Structure

```
npm-sdk-template/
├── .github/          # GitHub workflows and CI/CD automation
├── .husky/           # Git hooks for pre-commit checks
├── src/              # Source code directory
├── package.json
├── tsconfig.json     # TypeScript configuration
├── eslint.config.mts # ESLint configuration
├── commitlint.config.cjs # Commit message validation
├── .prettierrc       # Code formatting rules
├── .whitesource      # Dependency security scanning
├── .bun-version      # Bun version specification
└── bun.lock          # Bun lockfile
```

## Publishing

The package is set up for easy publishing to NPM:

```bash
# Build the package
bun build

# Publish to NPM (requires authentication)
npm publish
```

## Resources

- **Repository**: [GitHub](https://github.com/CROW-B3/npm-sdk-template)
- **Package**: `@b3-crow/npm-sdk-template`
- **License**: MIT

## Contributing

Contributions are welcome! Please follow the conventional commits specification for commit messages.
