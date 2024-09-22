import { API_AUCTIONS, API_BASE } from '../constants';
import { authFetch } from '../fetch/authFetch';

const action = '/profiles';

/**
 * Updates the avatar for a user's profile by sending new avatar data to the API.
 *
 * This function sends a PUT request with the new avatar data for the specified profile name.
 * It returns the server's response indicating whether the avatar was successfully updated.
 *
 * @async
 * @function updateProfileAvatar
 * @param {string} profileName - The name of the profile to update the avatar for.
 * @param {Object} avatarData - The new avatar data (e.g., URL) to update the profile with.
 * @returns {Promise<Object>} The response from the API after updating the avatar.
 * @throws {Error} If the request fails or the avatar update is unsuccessful.
 *
 * @example
 * updateProfileAvatar('john_doe', { avatarUrl: 'https://example.com/avatar.jpg' })
 *   .then(response => console.log(response))
 *   .catch(error => console.error(error));
 */

export async function updateProfileAvatar(profileName, avatarData) {
  const url = `${API_BASE}${API_AUCTIONS}${action}/${profileName}`;
  const responseAvatar = await authFetch(url, 'PUT', avatarData);
  return responseAvatar;
}
