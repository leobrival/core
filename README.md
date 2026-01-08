# Topographic Studio Core

Shared packages for Topographic Studio projects.

## Packages

| Package | Description | Version |
|---------|-------------|---------|
| [@topographic-studio/ui](./packages/ui) | Reusable UI components | 0.0.1 |
| [@topographic-studio/utils](./packages/utils) | Utility functions and helpers | 0.0.1 |
| [@topographic-studio/config](./packages/config) | Shared configurations (Biome, TypeScript) | 0.0.1 |
| [@topographic-studio/types](./packages/types) | TypeScript type definitions | 0.0.1 |

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) >= 1.0.0
- [Node.js](https://nodejs.org) >= 20.0.0

### Installation

```bash
# Install dependencies
bun install

# Build all packages
bun run build

# Run tests
bun run test

# Lint code
bun run lint
```

## Development

### Project Structure

```
core/
├── packages/
│   ├── ui/           # UI components
│   ├── utils/        # Utility functions
│   ├── config/       # Shared configs
│   └── types/        # Type definitions
├── apps/
│   └── docs/         # Documentation (coming soon)
├── package.json      # Workspaces root
├── turbo.json        # Turborepo config
└── biome.json        # Linting config
```

### Adding a New Package

1. Create a new directory in `packages/`
2. Add `package.json` with `@topographic-studio/` scope
3. Add build scripts and configuration
4. Export from `src/index.ts`
5. Add to workspace and build

### Publishing

Releases are managed with [Changesets](https://github.com/changesets/changesets):

```bash
# Create a changeset
bun changeset

# Version packages
bun version-packages

# Publish (CI handles this)
bun release
```

## Using in Your Projects

```bash
# Install individual packages
bun add @topographic-studio/ui
bun add @topographic-studio/utils
bun add -D @topographic-studio/config
bun add -D @topographic-studio/types
```

## Contributing

See [CONTRIBUTING.md](https://github.com/leobrival/.github/blob/main/CONTRIBUTING.md)

## License

MIT - See [LICENSE](./LICENSE)

## Transfer to Organization

Once the `topographic-studio` organization is created:

```bash
gh repo transfer leobrival/core topographic-studio
```
