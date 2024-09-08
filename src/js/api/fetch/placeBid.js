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
    const response = await authFetch(url, 'POST', body);
    console.log('response placeBid:', response);

    return response;
  } catch (error) {
    console.error('Error placing bid:', error);
    throw error;
  }
}

// import { load } from '../../storage/index.js';
// import { API_BASE, API_AUCTIONS, API_KEY } from '../constants.js';
// import { doFetch } from '../helpers/doFetch.js';
// import { getListing } from './getListing.js';

// const action = '/listings';
// const bids = '/bids';

// export async function placeBid(bidAmount) {
//   try {
//     const urlParams = new URL(window.location.href);
//     let id = urlParams.searchParams.get('id');

//     const listingData = await getListing(id);
//     console.log('Listing data:', listingData);

//     if (!listingData) {
//       throw new Error('Listing not found.');
//     }

//     const url = `${API_BASE}${API_AUCTIONS}${action}/${id}${bids}`;
//     console.log('Placing bid:', url);

//     // const token = localStorage.getItem('token');
//     // console.log('token:', token);

//     // if (!token) {
//     //   throw new Error('User not authenticated. Please log in to place a bid.');
//     // }
//     const token = load('token');

//     const response = await doFetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//         'X-Noroff-Api-Key': API_KEY,
//       },
//       body: JSON.stringify({ amount: bidAmount }),
//     });
//     console.log('response:', response);

//     if (!response.ok) {
//       const errorBody = await response.text();
//       throw new Error(`Failed to place bid: ${response.statusText}. Response body: ${errorBody}`);
//     }

//     const data = await response.json();
//     console.log('Bid placed successfully:', data);

//     // You can update the UI or notify the user of the success here
//     alert('Bid placed successfully!');

//     return data;
//   } catch (error) {
//     console.error('Error placing bid:', error);
//     // alert(`Failed to place bid: ${error.message}`);
//   }
// }
