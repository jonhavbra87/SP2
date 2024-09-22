import { formatDateTime } from './formatDateTime';

/**
 * Sets the minimum date for an input element to the current date and time.
 *
 * This function retrieves the current date and time, formats it using `formatDateTime` in the "YYYY-MM-DDTHH:MM" format,
 * and sets it as the `min` attribute of the input element.
 *
 * @function setMinDate
 * @param {HTMLInputElement} inputElement - The input element to set the minimum date for.
 * @returns {void}
 *
 * @example
 * const dateInput = document.getElementById('dateInput');
 * setMinDate(dateInput);
 */

export function setMinDate(inputElement) {
  const now = new Date();
  const minDateTime = formatDateTime(now);
  inputElement.min = minDateTime;
}
