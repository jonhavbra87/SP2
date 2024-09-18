import { API_BASE, API_AUCTIONS } from '../constants.js';
import { handleApiError } from '../helpers/handleApiError.js';

export async function getListings(page = 1, limit = 12) {
  const url = `${API_BASE}${API_AUCTIONS}/listings?limit=${limit}&page=${page}`;
  console.log(url);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      handleApiError(response.status);
      return [];
    }

    const results = await response.json();

    return results.data;
  } catch (error) {
    console.error('Error fetching listings:', error);
    return [];
  }
}
