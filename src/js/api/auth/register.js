import { API_AUTH, API_BASE, API_REGISTER } from '../constants';

/**
 * Registers a new user profile to the social network API.
 * This function takes a profile object, converts it to JSON,
 * and sends it to the register endpoint. If successful, it alerts
 * the user of successful registration and returns the result.
 * @param {Object} profile - The user profile to register
 * @returns {Promise} response - The result of the API call
 * @throws {Error} result - The error which was thrown during the API call
 * ```js
 * register(profile)
 * ```
 * **/

const method = 'POST';

export async function register(name, email, password) {
  const registerURL = `${API_BASE}${API_AUTH}${API_REGISTER}`;

  const body = JSON.stringify({ name, email, password });
  console.log(body);

  const response = await fetch(registerURL, {
    headers: {
      'Content-Type': 'application/json',
    },
    method,
    body,
  });

  const result = await response.json();

  return result;
}
