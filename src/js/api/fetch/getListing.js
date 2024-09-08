import { API_AUCTIONS, API_BASE } from '../constants';
import { authFetch } from './authFetch';

const action = '/listings';

export async function getListing(id) {
  if (!id) {
    throw new Error('Listing ID is required.');
  }
  const url = `${API_BASE}${API_AUCTIONS}${action}/${id}`;
  return await authFetch(url, 'GET');
}

// import { API_AUCTIONS, API_BASE } from '../constants.js';
// import { doFetch } from '../helpers/doFetch.js';

// const action = '/listings';
// // const bid = '/bid';${bid}`

// export async function getListing(id) {
//   if (!id) {
//     throw new Error('Get post requires a postID');
//   }
//   try {
//     const url = `${API_BASE}${API_AUCTIONS}${action}/${id}`;

//     console.log('fetched data from', url);

//     const response = await doFetch(url);

//     return response.data;
//   } catch (error) {
//     throw new Error(`Failed to fetch the specific post`);
//   }
// }
