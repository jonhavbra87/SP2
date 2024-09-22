import { load } from '../../storage/load.js';
import { API_KEY } from '../constants.js';

/**
 * Generates and returns the headers for an API request, including the authentication token if available.
 *
 * This function attempts to load the access token from local storage. If the token exists, it is added
 * to the headers for authorization. If not, the function returns headers without authentication but includes
 * the required API key.
 *
 * @async
 * @function headers
 * @returns {Promise<Object>} The headers object containing content type, API key, and optionally an authorization token.
 *
 * @example
 * headers()
 *   .then(headers => console.log(headers))
 *   .catch(error => console.error(error));
 */

export async function headers() {
  try {
    // Load access token from localStorage
    const token = load('token');
    if (!token) {
      console.warn('No access token found. Proceeding without authentication.');
      return {
        'Content-Type': 'application/json',
        'X-Noroff-API-Key': API_KEY,
      };
    }

    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'X-Noroff-API-Key': API_KEY,
    };
  } catch (error) {
    console.error('Error in headers function:', error.message);
    return {
      'Content-Type': 'application/json',
      'X-Noroff-API-Key': API_KEY,
    };
  }
}
