import { placeBid } from './placeBid';

export async function submitBid(listingId, bidAmount) {
  // Validate input
  if (!listingId || !bidAmount || isNaN(bidAmount) || bidAmount <= 0) {
    console.error('Invalid listing ID or bid amount');
    return;
  }

  try {
    const response = await placeBid(listingId, bidAmount);
    console.log('Bid placed successfully:', response);

    // Provide user feedback or redirect
    alert('Bid placed successfully!');

    // Optionally, redirect the user to a confirmation page
    // window.location.href = `/confirmation?listingId=${listingId}`;
  } catch (error) {
    console.error('Error placing bid:', error);
    alert(`Failed to place bid: ${error.message}`);
  }
}
