import { API_AUCTIONS, API_BASE } from '../constants';

export async function searchFetch(query) {
  const url = `${API_BASE}${API_AUCTIONS}/listings?search=${encodeURIComponent(query)}`;
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
