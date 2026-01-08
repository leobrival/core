export type UserRole = "admin" | "user" | "guest"

export interface User {
	id: string
	email: string
	name: string
	role: UserRole
	createdAt: Date
	updatedAt: Date
}
