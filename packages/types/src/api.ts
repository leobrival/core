export interface ApiResponse<T = unknown> {
	data: T
	message?: string
	success: true
}

export interface ApiError {
	error: string
	message: string
	statusCode: number
	success: false
}
