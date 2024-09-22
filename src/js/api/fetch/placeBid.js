import { showMessage } from '../../ui/errorHandling/showMessage';
import { API_AUCTIONS, API_BASE } from '../constants';
import { authFetch } from './authFetch';

const action = '/listings';

/**
 * Places a bid on an auction listing by sending the bid amount to the API.
 *
 * This function sends a POST request with the bid amount to the specified listing.
 * It validates the input, ensures the user is authenticated, and returns the server response.
 *
 * @async
 * @function placeBid
 * @param {string} id - The ID of the auction listing to place a bid on.
 * @param {number} bidAmount - The amount to bid on the listing.
 * @returns {Promise<Object|null>} The server's response if successful, or `null` if the user is not logged in.
 * @throws {Error} If either the listing ID or bid amount is missing, or if the request fails.
 *
 * @example
 * placeBid('12345', 500)
 *   .then(response => console.log(response))
 *   .catch(error => console.error(error));
 */

export async function placeBid(id, bidAmount) {
  // Ensure both id and bidAmount are present
  if (!id || !bidAmount) {
    throw new Error('Both listing ID and bid amount are required.');
  }

  // Construct the URL for placing a bid
  const url = `${API_BASE}${API_AUCTIONS}${action}/${id}/bids`;
  const body = { amount: bidAmount };

  try {
    // Make the authenticated request
    const response = await authFetch(url, 'POST', body, 'bid');

    if (!response) {
      showMessage('You must be logged in to place a bid.', 'warning');
      return null;
    }

    return response;
  } catch (error) {
    console.error('Error placing bid:', error);
    throw error;
  }
}
