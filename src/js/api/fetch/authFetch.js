import { handleApiError } from '../helpers/handleApiError.js';
import { headers } from './headers.js';

/**
 * Performs an authenticated fetch request, handling API errors and dynamically resolving headers.
 *
 * This function sends an HTTP request to a given URL, with the specified method, body, and fetch type.
 * It also processes the response, handling errors and parsing the returned JSON.
 *
 * @async
 * @function authFetch
 * @param {string} url - The URL to which the request is sent.
 * @param {string} [fetchMethod='GET'] - The HTTP method (e.g., 'GET', 'POST').
 * @param {Object|null} [body=null] - The request body (for POST, PUT requests).
 * @param {string} fetchType - A description of the fetch request type (used for error handling).
 * @returns {Promise<Object>} The parsed JSON response from the API.
 * @throws {Error} If the request fails or the API returns an error status.
 *
 * @example
 * authFetch('/api/data', 'POST', { key: 'value' }, 'createData')
 *   .then(result => console.log(result))
 *   .catch(error => console.error(error));
 */

export async function authFetch(url, fetchMethod = 'GET', body = null, fetchType) {
  try {
    // Resolve headers dynamically from the headers function
    const resolvedHeaders = await headers();

    const options = {
      method: fetchMethod,
      headers: resolvedHeaders,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    // Perform the fetch request
    const response = await fetch(url, options);

    // Handle API errors
    if (!response.ok) {
      handleApiError(response.status, fetchType);
      throw new Error(`Request failed with status ${response.status}`);
    }

    const result = await response.json();
    return result.data || result;
  } catch (error) {
    console.error(`API Fetch Error: ${error.message}`, error);
    throw new Error(`Error fetching data: ${error.message}`);
  }
}
