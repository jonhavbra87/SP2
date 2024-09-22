import { API_AUTH, API_BASE, API_REGISTER } from '../constants';
import { doFetch } from '../helpers/doFetch';

/**
 * Registers a new user by sending their details (name, email, and password) to the API.
 *
 * This function sends a POST request to the registration endpoint and returns the result.
 * If the registration is successful, the function resolves with the server's response.
 * In case of an error, it throws the error for further handling.
 *
 * @async
 * @function register
 * @param {string} name - The full name of the user.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @returns {Promise<Object>} The server's response to the registration request.
 * @throws {Error} If the registration request fails.
 *
 * @example
 * register('John Doe', 'john@example.com', 'password123')
 *   .then(result => console.log(result))
 *   .catch(error => console.error(error));
 */

export async function register(name, email, password) {
  const registerURL = `${API_BASE}${API_AUTH}${API_REGISTER}`;

  const body = { name, email, password };

  try {
    const result = await doFetch(registerURL, 'POST', body, 'register');

    return result;
  } catch (error) {
    console.error('Error fetching listing:', error);
    throw error;
  }
}
