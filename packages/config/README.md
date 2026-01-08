# @topographic-studio/config

Shared configurations for Topographic Studio projects.

## Installation

```bash
bun add -D @topographic-studio/config
```

## Usage

### Biome

Extend the shared Biome configuration:

```json
// biome.json
{
	"extends": ["@topographic-studio/config/biome.json"]
}
```

### TypeScript

Extend the shared TypeScript configuration:

```json
// tsconfig.json (base project)
{
	"extends": "@topographic-studio/config/tsconfig.base.json",
	"compilerOptions": {
		"outDir": "./dist",
		"rootDir": "./src"
	},
	"include": ["src"]
}
```

```json
// tsconfig.json (React project)
{
	"extends": "@topographic-studio/config/tsconfig.react.json",
	"compilerOptions": {
		"outDir": "./dist",
		"rootDir": "./src"
	},
	"include": ["src"]
}
```

## Configurations Included

- **biome.json** - Biome linting and formatting rules
- **tsconfig.base.json** - Base TypeScript configuration
- **tsconfig.react.json** - TypeScript configuration for React projects

## License

MIT
