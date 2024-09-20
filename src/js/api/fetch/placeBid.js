import { showMessage } from '../../ui/errorHandling/showMessage';
import { API_AUCTIONS, API_BASE } from '../constants';
import { authFetch } from './authFetch';

const action = '/listings';

export async function placeBid(id, bidAmount) {
  // Validate input
  console.log('Listing ID:', id);
  console.log('Bid Amount:', bidAmount);

  // Ensure both id and bidAmount are present
  if (!id || !bidAmount) {
    throw new Error('Both listing ID and bid amount are required.');
  }

  // Construct the URL for placing a bid
  const url = `${API_BASE}${API_AUCTIONS}${action}/${id}/bids`;
  const body = { amount: bidAmount };
  console.log('placeBid:', url, body);

  try {
    // Make the authenticated request
    const response = await authFetch(url, 'POST', body, 'bid');
    console.log('response placeBid:', response);
    if (!response) {
      showMessage('You must be logged in to place a bid.', 'warning');
      return null;
    }

    return response;
  } catch (error) {
    console.error('Error placing bid:', error);
    throw error;
  }
}
