import { API_AUCTIONS, API_BASE } from '../constants';

export async function searchFetch(query, page = 1, limit = 100) {
  const url = `${API_BASE}${API_AUCTIONS}/listings?search=${encodeURIComponent(query)}&limit=${limit}&page=${page}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch search results');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching search results:', error);
    return [];
  }
}
