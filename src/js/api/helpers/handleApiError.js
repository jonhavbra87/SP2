import { showMessage } from '../../ui/errorHandling/showMessage';

/**
 * Handles API errors by mapping the HTTP status codes to messages
 * and performing appropriate actions.
 *
 * @param {number} statusCode - The HTTP status code returned by the API.
 */
// 200 login success
// 201 new action created successfully
// 400 registrer konto eksisterer allerede nav eller epost eksisterer
// 400 new listing - bildeadresse er 300 bokstarve
// 401 geil epost passord
// 400 budet er for lite
// 403 bude: kan ikke by på egen auksjon

export function handleApiError(statusCode, fetchType) {
  console.log('handleApiError called with:', { statusCode, fetchType });
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
        showMessage('The image address must be at least 300 characters long.', false);
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
      showMessage('Forbidden. You do not have permission to access this resource.', false);
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
