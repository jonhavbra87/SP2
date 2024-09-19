import { API_AUTH, API_BASE, API_REGISTER } from '../constants';
import { doFetch } from '../helpers/doFetch';

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
// REWORK THIS FUNCTION TO USE THE AUTHFETCH FUNCTION
// const method = 'POST';

export async function register(name, email, password) {
  const registerURL = `${API_BASE}${API_AUTH}${API_REGISTER}`;

  const body = { name, email, password };
  console.log(body);

  try {
    const result = await doFetch(registerURL, 'POST', body, 'register');
    console.log('Results from authFetch:', result);

    return result;
  } catch (error) {
    console.error('Error fetching listing:', error);
    throw error;
  }
}
