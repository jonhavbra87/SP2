import { API_BASE, API_AUCTIONS } from '../constants.js';
import { doFetch } from '../helpers/doFetch.js';

export async function getListings(page = 1, limit = 12) {
  const url = `${API_BASE}${API_AUCTIONS}/listings?limit=${limit}&page=${page}`;

  try {
    const results = await doFetch(url);

    return results.data || results;
  } catch (error) {
    console.error('Error fetching listings:', error);
    return [];
  }
}
