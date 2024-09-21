import { API_AUCTIONS, API_BASE } from '../constants';
import { authFetch } from '../fetch/authFetch';

const action = '/profiles';

/**
 * Retrieves all user profiles from the API.
 *
 * This function sends a GET request to fetch all profiles using `authFetch`.
 * It returns the list of profiles retrieved from the API.
 *
 * @async
 * @function getProfiles
 * @returns {Promise<Object[]>} A list of all user profiles from the API.
 * @throws {Error} If the request fails or the profiles cannot be fetched.
 *
 * @example
 * getProfiles()
 *   .then(profiles => console.log(profiles))
 *   .catch(error => console.error(error));
 */

export async function getProfiles() {
  const url = `${API_BASE}${API_AUCTIONS}${action}`;
  return await authFetch(url, 'GET');
}
