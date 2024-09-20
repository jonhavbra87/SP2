import { sortListings } from '../../ui/helpers/sortListings';
import { API_AUCTIONS, API_BASE } from '../constants';
import { doFetch } from '../helpers/doFetch';

export async function sortFetch() {
  let listings = [];
  let page = 1;
  let limit = 100;
  let hasMorePages = true;

  // Fetch data from API until there are no more pages
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

// export async function sortFetch() {
//   let listings = [];

//   //fetch data from the API until there are no more pages. then sort the listings with the sortListings function

//   //afterwards return the sorted listings and then sort them with the sortListings function
// }
