import { API_BASE } from '../constants';
import { authFetch } from './authFetch';

const action = '/auction';
/**
 * Creates a new auction listing by sending listing data to the API.
 *
 * This function sends a POST request with the provided listing data to create a new auction listing.
 * It uses the `authFetch` function to handle authenticated requests and error handling.
 *
 * @async
 * @function createListing
 * @param {Object} listingData - The data for the auction listing (e.g., title, description, price).
 * @returns {Promise<Object>} The created listing data if successful.
 * @throws {Error} If the listing creation fails.
 *
 * @example
 * const listingData = { title: 'New Auction', description: 'Great item!', price: 100 };
 * createListing(listingData)
 *   .then(data => console.log('Listing created:', data))
 *   .catch(error => console.error(error));
 */

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
