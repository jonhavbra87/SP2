import { API_BASE, API_AUCTIONS } from '../constants.js';
import { authFetch } from './authFetch.js';

export async function getListings() {
  const url = `${API_BASE}${API_AUCTIONS}/listings`;
  return await authFetch(url, 'GET');
}

// import { load } from '../../storage/index.js';
// import { API_BASE, API_AUCTIONS, API_KEY } from '../constants.js';
// import { doFetch } from '../helpers/doFetch.js';
// import { doFetch } from "../helpers/doFetch";

// const action = '/listings';

// export async function getListings() {
//   const url = `${API_BASE}${API_AUCTIONS}${action}`;

//   const response = await doFetch(url);

//   const result = await response.json();

//   return result.data;
// }
