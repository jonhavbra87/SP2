import { API_AUCTIONS, API_BASE } from '../api/constants';
import { doFetch } from '../api/helpers/doFetch';

/**
 * Searches auction listings by query and fetches results with pagination and limit options.
 *
 * This function sends a GET request to search for listings based on the provided query. The search can be paginated and limited by the number of results per page. It returns the search results or an empty array if an error occurs.
 *
 * @async
 * @function searchListings
 * @param {string} query - The search query string.
 * @param {number} [limit=100] - The maximum number of listings to fetch (default is 100).
 * @param {number} [page=1] - The page number to fetch (default is 1).
 * @returns {Promise<Array<Object>>} An array of search results or an empty array on error.
 *
 * @example
 * const results = await searchListings('laptop');
 */

export async function searchListings(query, limit = 100, page = 1) {
  const url = `${API_BASE}${API_AUCTIONS}/listings/search?q=${encodeURIComponent(query)}&limit=${limit}&page=${page}`;

  try {
    const response = await doFetch(url);
    return response;
  } catch (error) {
    console.error('Error fetching search results:', error);
    return []; // Returns an empty array if an error occurs
  }
}
