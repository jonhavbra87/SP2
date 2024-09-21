import * as storage from '../../storage/index.js';
import { API_BASE, API_AUTH, API_LOGIN } from '../constants';

const method = 'POST';

/**
 * Logs in a user by sending a POST request with email and password,
 * and saves the returned access token and user profile to local storage.
 *
 * @async
 * @function login
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @returns {Promise<Object>} The logged-in user's profile data, excluding the access token.
 * @throws {Error} If the login fails or no access token is found in the response.
 *
 * @example
 * login('user@example.com', 'password123')
 *   .then(user => console.log(user))
 *   .catch(error => console.error(error));
 */

export async function login(email, password) {
  const loginURL = `${API_BASE}${API_AUTH}${API_LOGIN}`;

  const body = JSON.stringify({ email, password });

  const response = await fetch(loginURL, {
    headers: {
      'Content-Type': 'application/json',
    },
    method,
    body,
  });

  if (response.ok) {
    const { accessToken, ...user } = (await response.json()).data;
    if (!accessToken) {
      throw new Error('No access token found in response');
    }

    storage.save('token', accessToken);
    storage.save('profile', user);
    console.log('User logged in:', user);
    console.log('Access token:', accessToken);

    return user;
  } else {
    throw new Error('Failed to log in: ' + response.statusText);
  }
}
