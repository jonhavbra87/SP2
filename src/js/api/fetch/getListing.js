import { API_AUCTIONS, API_BASE } from '../constants';
import { authFetch } from './authFetch';

const action = '/listings';
/**
 * Retrieves an auction listing by its ID, including its bids.
 *
 * This function sends a GET request to the auction listing endpoint to fetch
 * the listing data along with any associated bids. It uses the `authFetch`
 * function for making the authenticated request.
 *
 * @async
 * @function getListing
 * @param {string} id - The ID of the listing to be retrieved.
 * @param {string} fetchType - A description of the fetch request type (used for error handling).
 * @returns {Promise<Object>} The retrieved listing data, including bids.
 * @throws {Error} If the listing ID is not provided or the request fails.
 *
 * @example
 * getListing('12345', 'fetchListing')
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 */

export async function getListing(id, fetchType) {
  if (!id) {
    throw new Error('Listing ID is required.');
  }

  const url = `${API_BASE}${API_AUCTIONS}${action}/${id}?_bids=true`;

  try {
    const results = await authFetch(url, 'GET', null, fetchType);

    return results;
  } catch (error) {
    console.error('Error fetching listing:', error);
    throw new Error('Failed to fetch listing');
  }
}
