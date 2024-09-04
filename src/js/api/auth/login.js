// import { API_FULL_URL } from '../constants.js'
import * as storage from '../../storage/index.js';
import { API_BASE, API_AUTH, API_LOGIN } from '../constants';

/**
 * Logs in a user by sending their profile data to the API.
 *
 * This function sends a login request to the API with the provided profile data.
 * If the login is successful, it stores the access token and user profile in local storage
 * and displays a success alert. If the login fails, it throws an error with the response status text.
 *
 * @async - Asynchronous function
 * @function login - Logs in a user by sending their profile data to the API.
 * @param {Object} profile - The profile data containing username and password for login.
 * @returns {Promise<void>} - A promise that resolves if the login is successful.
 * @throws {Error} Throws an error if the login request fails.
 **/

// body: JSON.stringify({ email, password }),

const method = 'POST';

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
    // alert('You have been logged in successfully')

    return user;
  } else {
    throw new Error('Failed to log in: ' + response.statusText);
  }
}
