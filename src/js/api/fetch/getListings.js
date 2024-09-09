import { API_BASE, API_AUCTIONS } from '../constants.js';
import { authFetch } from './authFetch.js';

export async function getListings() {
  const url = `${API_BASE}${API_AUCTIONS}/listings`;
  return await authFetch(url, 'GET');
}
