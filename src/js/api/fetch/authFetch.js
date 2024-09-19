import { handleApiError } from '../helpers/handleApiError.js';
import { headers } from './headers.js';

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
