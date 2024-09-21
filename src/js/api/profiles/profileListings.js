import { load } from '../../storage';
import { API_AUCTIONS, API_BASE } from '../constants';
import { authFetch } from '../fetch/authFetch';

const action = '/profiles';

/**
 * Retrieves all auction listings created by the current user's profile, including won listings.
 *
 * This function loads the user's profile from storage, fetches the listings they have created,
 * and includes information about auctions they have won.
 *
 * @async
 * @function profileListings
 * @returns {Promise<Object>} The profile's auction listings and won auctions.
 * @throws {Error} If the profile name is not available or the request fails.
 *
 * @example
 * profileListings()
 *   .then(listings => console.log(listings))
 *   .catch(error => console.error(error));
 */

export async function profileListings() {
  const profile = load('profile');
  const name = profile.name;

  if (!name) {
    throw new Error('Profile name is required.');
  }

  const url = `${API_BASE}${API_AUCTIONS}${action}/${name}?_wins=true&_listings=true`;

  const response = await authFetch(url, 'GET');

  return response;
}
