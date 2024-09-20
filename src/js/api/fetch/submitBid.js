import { showMessage } from '../../ui/errorHandling/showMessage.js';
import { handleApiError } from '../helpers/handleApiError.js';
import { reloadPage } from '../helpers/reloadPage.js';
import { placeBid } from './placeBid.js';

export async function submitBid(listingId, bidAmount) {
  // Validate input
  if (!listingId || !bidAmount || isNaN(bidAmount) || bidAmount <= 0) {
    console.error('Invalid listing ID or bid amount');
    return;
  }

  try {
    const response = await placeBid(listingId, bidAmount);
    console.log('Bid placed successfully:', response);
    reloadPage();
  } catch (error) {
    console.error('Error placing bid:', error);
  }
}
