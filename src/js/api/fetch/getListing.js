import { showMessage } from '../../ui/errorHandling/showMessage';
import { API_AUCTIONS, API_BASE } from '../constants';
import { authFetch } from './authFetch';

const action = '/listings';

export async function getListing(id, fetchType) {
  if (!id) {
    throw new Error('Listing ID is required.');
  }

  const url = `${API_BASE}${API_AUCTIONS}${action}/${id}?_bids=true`;

  try {
    const results = await authFetch(url, 'GET', null, fetchType);
    console.log('Results from authFetch:', results);

    return results;
  } catch (error) {
    console.error('Error fetching listing:', error);
    throw new Error('Failed to fetch listing');
  }
}
