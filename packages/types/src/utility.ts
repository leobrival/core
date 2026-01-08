export type Maybe<T> = T | null | undefined

export type Result<T, E = Error> = { success: true; data: T } | { success: false; error: E }
