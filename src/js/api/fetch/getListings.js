import { API_BASE, API_AUCTIONS } from '../constants.js';

export async function getListings() {
  const url = `${API_BASE}${API_AUCTIONS}/listings`;
  console.log(url);

  const response = await fetch(url);
  console.log(response);

  const results = await response.json();

  return results.data;
}
