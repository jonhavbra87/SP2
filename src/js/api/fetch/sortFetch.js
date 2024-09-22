import { sortListings } from '../../ui/helpers/sortListings';
import { API_AUCTIONS, API_BASE } from '../constants';
import { doFetch } from '../helpers/doFetch';

/**
 * Fetches all active auction listings from the API, paginates through multiple pages, and sorts the listings.
 *
 * This function retrieves listings from the API in batches, paginating through results until no more pages are available.
 * It fetches only active listings and sorts them after all pages are retrieved.
 *
 * @async
 * @function sortFetch
 * @returns {Promise<Array<Object>>} A sorted array of active listings.
 * @throws {Error} If there is an issue fetching the data.
 *
 * @example
 * const listings = await sortFetch();
 */

export async function sortFetch() {
  let listings = [];
  let page = 1;
  let limit = 100;
  let hasMorePages = true;

  // Fetch data from API as log as hoasMorePages is true. when it is false, it will stop fetching data
  while (hasMorePages) {
    const url = `${API_BASE}${API_AUCTIONS}/listings?limit=${limit}&page=${page}&_active=true`;

    try {
      const results = await doFetch(url);

      if (results && results.length > 0) {
        // Add the current page's listings to the total listings array
        listings = [...listings, ...results];
        page++;
      } else {
        hasMorePages = false;
      }
    } catch (error) {
      console.error(`Error fetching page ${page}:`, error);
      hasMorePages = false;
    }
  }

  // After fetching all pages, sort the listings using sortListings
  const sortedListings = sortListings(listings);

  // Return the sorted listings
  return sortedListings;
}
