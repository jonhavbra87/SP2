/**
 * Formats a JavaScript Date object into a string in the format "YYYY-MM-DDTHH:MM".
 *
 * This function takes a Date object and returns a formatted string with zero-padded values for the month,
 * day, hours, and minutes to ensure a consistent two-digit format.
 *
 * @function formatDateTime
 * @param {Date} date - The Date object to be formatted.
 * @returns {string} A formatted date and time string in the format "YYYY-MM-DDTHH:MM".
 *
 * @example
 * const formattedDate = formatDateTime(new Date());
 * console.log(formattedDate); // "2024-09-21T14:35"
 */

export function formatDateTime(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}
