/**
 * Format a date to a human-readable string
 */
export function formatDate(date: Date | string, locale = "en-US"): string {
	const dateObj = typeof date === "string" ? new Date(date) : date

	return new Intl.DateTimeFormat(locale, {
		year: "numeric",
		month: "long",
		day: "numeric",
	}).format(dateObj)
}
