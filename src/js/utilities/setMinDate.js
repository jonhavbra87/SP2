import { formatDateTime } from './formatDateTime';

export function setMinDate(inputElement) {
  const now = new Date();
  const minDateTime = formatDateTime(now);
  inputElement.min = minDateTime;
}
