import { formatDateTime } from './formatDateTime';

export function setMaxDate(inputElement) {
  const now = new Date();
  const maxDate = new Date(now);
  maxDate.setDate(now.getDate() + 366); // Legg til 366 dager
  const maxDateTime = formatDateTime(maxDate);
  inputElement.max = maxDateTime;
}
