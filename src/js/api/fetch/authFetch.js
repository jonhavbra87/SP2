import { headers } from './headers.js';

export async function authFetch(url, fetchMethod = 'GET', body = null) {
  try {
    // Resolve headers dynamically from the headers function
    const resolvedHeaders = await headers();

    // Prepare fetch options with method, headers, and body if provided
    const options = {
      method: fetchMethod,
      headers: resolvedHeaders,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    // Perform the fetch request
    const response = await fetch(url, options);
    // console.log('response:', response);

    // Check if response is not OK
    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Fetch failed: ${response.statusText}. Details: ${errorBody}`);
    }

    // Return the parsed JSON response
    const json = await response.json();

    return json.data;
  } catch (error) {
    console.error(`API Fetch Error: ${error.message}`);
    throw new Error(`Error fetching data: ${error.message}`);
  }
}
