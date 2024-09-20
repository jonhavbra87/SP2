import { API_BASE } from '../constants';
import { authFetch } from './authFetch';

const action = '/auction';

export async function createListing(listingData) {
  const url = `${API_BASE}${action}/listings`;

  try {
    const data = await authFetch(url, 'POST', listingData, 'createListing');
    if (!data) {
      throw new Error('Failed to create listing');
    }

    return data;
  } catch (error) {
    console.error('Error creating listing:', error);
    throw new Error('Failed to create listing');
  }
}
