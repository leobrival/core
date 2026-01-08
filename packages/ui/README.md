# @topographic-studio/ui

Reusable UI components for Topographic Studio projects.

## Installation

```bash
bun add @topographic-studio/ui
```

## Usage

```tsx
import { Button } from "@topographic-studio/ui"

export function App() {
	return (
		<Button variant="primary" size="md">
			Click me
		</Button>
	)
}
```

## Components

### Button

A customizable button component with multiple variants and sizes.

**Props:**
- `variant`: `"primary"` | `"secondary"` | `"ghost"` (default: `"primary"`)
- `size`: `"sm"` | `"md"` | `"lg"` (default: `"md"`)

## License

MIT
