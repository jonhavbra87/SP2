import { reloadPage } from '../helpers/reloadPage.js';
import { placeBid } from './placeBid.js';

/**
 * Submits a bid for an auction listing after validating the input.
 *
 * This function validates the provided listing ID and bid amount before calling
 * the `placeBid` function. If the bid is successfully placed, the page is reloaded.
 * In case of an error, it logs the error message.
 *
 * @async
 * @function submitBid
 * @param {string} listingId - The ID of the listing to bid on.
 * @param {number} bidAmount - The amount to bid (must be a positive number).
 * @returns {void}
 * @throws {Error} If the listing ID or bid amount is invalid or the bid fails.
 *
 * @example
 * submitBid('12345', 150)
 *   .then(() => console.log('Bid successful'))
 *   .catch(error => console.error(error));
 */

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
