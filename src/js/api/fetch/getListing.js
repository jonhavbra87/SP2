import { API_AUCTIONS, API_BASE } from '../constants';
import { authFetch } from './authFetch';

const action = '/listings';

export async function getListing(id) {
  if (!id) {
    throw new Error('Listing ID is required.');
  }
  const url = `${API_BASE}${API_AUCTIONS}${action}/${id}`;
  return await authFetch(url, 'GET');
}
