import { API_BASE, API_AUCTIONS } from '../constants.js';
import { doFetch } from '../helpers/doFetch.js';
import { returnSortedListings } from '../helpers/returnSortedListings.js';

export async function getListings(page = 1, limit = 100) {
  const url = `${API_BASE}${API_AUCTIONS}/listings?limit=${limit}&page=${page}`;

  try {
    const results = await doFetch(url);

    const sortedResults = returnSortedListings(results);

    console.log('sorted listings fetched:', sortedResults);

    return sortedResults;
  } catch (error) {
    console.error('Error fetching listings:', error);
    return [];
  }
}
