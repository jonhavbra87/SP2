import { API_BASE, API_AUCTIONS, API_KEY } from '../constants.js';
import { getListing } from '../listings/getListing.js';

const action = '/listings';
const bids = '/bids';

export async function placeBid(bidAmount) {
  try {
    const idUrl = new URL(location.href);
    let id = idUrl.searchParams.get('id');

    const listingData = await getListing(id);
    console.log('Listing data:', listingData);

    if (!listingData) {
      throw new Error('Listing not found.');
    }

    const url = `${API_BASE}${API_AUCTIONS}${action}/${id}${bids}`;
    console.log('Placing bid:', url);

    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('User not authenticated.');
    }

    const response = await fetch(url, {
      method: 'POST',
      headers,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'X-Noroff-Api-Key': API_KEY,
      },
      body: JSON.stringify({ amount: bidAmount }),
    });

    if (!response.ok) {
      throw new Error(`Failed to place bid: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Bid placed successfully:', data);

    return data;
  } catch (error) {
    console.error('Error placing bid:', error);
    // alert(`Failed to place bid: ${error.message}`);
  }
}
