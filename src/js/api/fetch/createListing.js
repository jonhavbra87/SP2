import { API_BASE } from '../constants';
import { authFetch } from './authFetch';

const action = '/auction';

export async function createListing(listingData) {
  const url = `${API_BASE}${action}/listings`;

  if (!url) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to create listing');
  }

  const data = await authFetch(url, 'POST', listingData);
  console.log('data', data);

  return data;
}
