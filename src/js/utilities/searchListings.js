import { API_AUCTIONS, API_BASE } from '../api/constants';
import { doFetch } from '../api/helpers/doFetch';

export async function searchListings(query, limit = 100, page = 1) {
  const url = `${API_BASE}${API_AUCTIONS}/listings/search?q=${encodeURIComponent(query)}&limit=${limit}&page=${page}`;

  try {
    const response = await doFetch(url); // Bruk fetch-hjelper for å sende API-forespørsel
    return response; // Returner resultatene fra API-et
  } catch (error) {
    console.error('Error fetching search results:', error);
    return []; // Returner en tom array ved feil
  }
}
