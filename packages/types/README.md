# @topographic-studio/types

TypeScript type definitions for Topographic Studio projects.

## Installation

```bash
bun add -D @topographic-studio/types
```

## Usage

```ts
import type { User, UserRole, ApiResponse, Maybe, Result } from "@topographic-studio/types"

// User types
const user: User = {
	id: "123",
	email: "user@example.com",
	name: "John Doe",
	role: "admin",
	createdAt: new Date(),
	updatedAt: new Date(),
}

// API response types
const response: ApiResponse<User> = {
	data: user,
	message: "User fetched successfully",
	success: true,
}

// Utility types
const maybeValue: Maybe<string> = null // string | null | undefined
const result: Result<User> = { success: true, data: user }
```

## Types

### User
- `User` - User interface with id, email, name, role, timestamps
- `UserRole` - Union type: `"admin"` | `"user"` | `"guest"`

### API
- `ApiResponse<T>` - Successful API response with data
- `ApiError` - Error response with error details

### Utility
- `Maybe<T>` - T | null | undefined
- `Result<T, E>` - Success/failure result type

## License

MIT
