import { handleApiError } from './handleApiError';

/**
 * Performs an HTTP request and handles potential errors.
 *
 * This function sends a request to the specified URL using the provided method and optional request body.
 * It handles response errors, processes the returned JSON data, and throws an error if the request fails.
 *
 * @async
 * @function doFetch
 * @param {string} url - The endpoint URL to fetch data from.
 * @param {string} [method='GET'] - The HTTP method (e.g., 'GET', 'POST').
 * @param {Object|null} [body=null] - The request body (for POST, PUT requests).
 * @returns {Promise<Object>} The parsed JSON response from the API.
 * @throws {Error} If the request fails or the API returns an error status.
 *
 * @example
 * doFetch('/api/data', 'POST', { key: 'value' })
 *   .then(result => console.log(result))
 *   .catch(error => console.error(error));
 */

export async function doFetch(url, method = 'GET', body = null) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);
    handleApiError(response.status);

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }

    const result = await response.json();

    return result.data || result;
  } catch (error) {
    console.error(`Fetch Error: ${error.message}`, error);
    handleApiError(500);
    throw error;
  }
}
