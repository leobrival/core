# @topographic-studio/utils

Utility functions and helpers for Topographic Studio projects.

## Installation

```bash
bun add @topographic-studio/utils
```

## Usage

```ts
import { cn, formatDate, sleep } from "@topographic-studio/utils"

// Merge class names
const className = cn("base-class", isActive && "active", "another-class")

// Format dates
const formatted = formatDate(new Date(), "fr-FR") // "8 janvier 2026"

// Async sleep
await sleep(1000) // Wait 1 second
```

## Functions

### `cn(...classes)`
Utility to merge class names. Simple alternative to `clsx` or `classnames`.

### `formatDate(date, locale?)`
Format a date to a human-readable string using `Intl.DateTimeFormat`.

### `sleep(ms)`
Async function to pause execution for a specified duration.

## License

MIT
