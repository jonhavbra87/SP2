import { API_AUCTIONS, API_BASE } from '../constants';
import { authFetch } from '../fetch/authFetch';

const action = '/profiles';

/**
 * Retrieves a user profile by their profile name.
 *
 * This function sends a GET request to fetch a user's profile from the API based on the provided profile name.
 * It uses `authFetch` for handling authentication and returning the profile data.
 *
 * @async
 * @function getProfile
 * @param {string} profileName - The name of the profile to retrieve.
 * @returns {Promise<Object>} The profile data retrieved from the API.
 * @throws {Error} If the request fails or the profile cannot be fetched.
 *
 * @example
 * getProfile('john_doe')
 *   .then(profile => console.log(profile))
 *   .catch(error => console.error(error));
 */

export async function getProfile(profileName) {
  const url = `${API_BASE}${API_AUCTIONS}${action}/${profileName}`;
  const response = await authFetch(url, 'GET');
  return response;
}
