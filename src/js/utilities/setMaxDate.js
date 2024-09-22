import { formatDateTime } from './formatDateTime';

/**
 * Sets the maximum date for an input element to one year from the current date.
 *
 * This function calculates the maximum allowed date by adding 366 days to the current date,
 * formats it to the "YYYY-MM-DDTHH:MM" format using `formatDateTime`, and sets it as the max attribute of the input element.
 *
 * @function setMaxDate
 * @param {HTMLInputElement} inputElement - The input element to set the maximum date for.
 * @returns {void}
 *
 * @example
 * const dateInput = document.getElementById('dateInput');
 * setMaxDate(dateInput);
 */

export function setMaxDate(inputElement) {
  const now = new Date();
  const maxDate = new Date(now);
  maxDate.setDate(now.getDate() + 366); // Legg til 366 dager
  const maxDateTime = formatDateTime(maxDate);
  inputElement.max = maxDateTime;
}
