import { API_BASE, API_AUCTIONS } from '../constants.js';
import { doFetch } from '../helpers/doFetch.js';

/**
 * Fetches a paginated list of auction listings from the API.
 *
 * This function sends a GET request to retrieve auction listings, with pagination
 * support via the `page` and `limit` parameters. The function returns the results if successful,
 * or an empty array if an error occurs.
 *
 * @async
 * @function getListings
 * @param {number} [page=1] - The page number for pagination (default is 1).
 * @param {number} [limit=100] - The maximum number of listings to fetch per page (default is 100).
 * @returns {Promise<Object[]>} The retrieved auction listings, or an empty array if an error occurs.
 * @throws {Error} If the request fails.
 *
 * @example
 * getListings(2, 50)
 *   .then(listings => console.log(listings))
 *   .catch(error => console.error(error));
 */

export async function getListings(page = 1, limit = 100) {
  const url = `${API_BASE}${API_AUCTIONS}/listings?limit=${limit}&page=${page}`;

  try {
    const results = await doFetch(url);

    return results;
  } catch (error) {
    console.error('Error fetching listings:', error);
    return [];
  }
}
