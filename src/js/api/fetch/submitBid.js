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

    // Provide user feedback and refresh the page
    reloadPage();
    // alert('Bid placed successfully!');
  } catch (error) {
    console.error('Error placing bid:', error);
    alert(`Failed to place bid: ${error.message}`);
  }
}
