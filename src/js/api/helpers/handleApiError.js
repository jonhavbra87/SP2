import { showMessage } from '../../ui/errorHandling/showMessage';

/**
 * Handles API errors based on the status code and fetch type, displaying appropriate messages.
 *
 * This function checks the HTTP status code returned from an API request and shows an error or success message
 * using the `showMessage` function. The message is customized based on the status code and the type of fetch action.
 *
 * @function handleApiError
 * @param {number} statusCode - The HTTP status code returned from the API.
 * @param {string} fetchType - The type of API request (e.g., 'bid', 'createListing', 'register').
 * @returns {void}
 *
 * @example
 * handleApiError(400, 'createListing');
 */

export function handleApiError(statusCode, fetchType) {
  switch (statusCode) {
    case 200:
      if (fetchType === 'bid') {
        showMessage('Bid successful', true);
      } else if (fetchType === 'createListing') {
        showMessage('Created listing successfully', true);
      } else if (fetchType === 'register') {
        showMessage('Registered successfully', true);
      }
      break;
    case 400:
      if (fetchType === 'createListing') {
        showMessage('The image address can´t be longer than 300 characters.', false);
      } else if (fetchType === 'register') {
        showMessage('An account with that name or email already exists.', false);
      } else if (fetchType === 'bid') {
        showMessage('The bid amount is too low.', false);
      }
      break;
    case 401:
      showMessage('Unauthorized access. Please login to continue.', false);
      break;
    case 403:
      showMessage('Forbidden. You do not have permission to bid on your own listing.', false);
      break;
    case 404:
      showMessage('No listing with such ID', false);
      break;
    case 500:
      showMessage('Server error. Please try again later.', false);
      break;
    default:
      if (statusCode > 400) {
        showMessage('An error unknown error. Please try again later', false);
      }
  }
}
