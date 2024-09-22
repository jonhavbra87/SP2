import { sortListings } from '../../ui/helpers/sortListings';
import { API_AUCTIONS, API_BASE } from '../constants';
import { doFetch } from '../helpers/doFetch';

/**
 * Fetches and sorts all auction listings from the API, handling pagination.
 *
 * This function retrieves auction listings from the API in a paginated manner,
 * continuously fetching pages until no more listings are available. Once all
 * listings are retrieved, they are sorted using the `sortListings` helper function.
 *
 * @async
 * @function sortFetch
 * @returns {Promise<Object[]>} The sorted array of auction listings.
 * @throws {Error} If fetching data from the API fails.
 *
 * @example
 * sortFetch()
 *   .then(sortedListings => console.log(sortedListings))
 *   .catch(error => console.error(error));
 */

export async function sortFetch() {
  let listings = [];
  let page = 1;
  let limit = 100;
  let hasMorePages = true;

  // Fetch data from API as log as hoasMorePages is true. when it is false, it will stop fetching data
  while (hasMorePages) {
    const url = `${API_BASE}${API_AUCTIONS}/listings?limit=${limit}&page=${page}`;

    try {
      const results = await doFetch(url);

      if (results && results.length > 0) {
        // Add the current page's listings to the total listings array
        listings = [...listings, ...results];
        page++; // Go to the next page
      } else {
        hasMorePages = false; // No more listings, exit the loop
      }
    } catch (error) {
      console.error(`Error fetching page ${page}:`, error);
      hasMorePages = false; // Exit the loop if there's an error
    }
  }

  // After fetching all pages, sort the listings using sortListings
  const sortedListings = sortListings(listings);

  // Return the sorted listings
  return sortedListings;
}
