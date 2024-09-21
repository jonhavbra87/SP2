import { load } from '../../storage';
import { API_AUCTIONS, API_BASE } from '../constants';
import { authFetch } from '../fetch/authFetch';

const action = '/profiles';

/**
 * Retrieves all bids made by the current user's profile, including the associated listings.
 *
 * This function loads the user's profile from storage, fetches their bid history from the API,
 * and includes the listings that the bids are related to.
 *
 * @async
 * @function profileBids
 * @returns {Promise<Object>} The profile's bid history with associated listings.
 * @throws {Error} If the profile name is not available or the request fails.
 *
 * @example
 * profileBids()
 *   .then(bids => console.log(bids))
 *   .catch(error => console.error(error));
 */

export async function profileBids() {
  const profile = load('profile');
  const name = profile.name;

  if (!name) {
    throw new Error('Profile name is required.');
  }

  const url = `${API_BASE}${API_AUCTIONS}${action}/${name}/bids?_listings=true`;

  const response = await authFetch(url, 'GET');

  return response;
}
