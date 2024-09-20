import { handleApiError } from './handleApiError';

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
    console.error(`Error fetching posts: ${error.message}`);
    console.error(`Fetch Error: ${error.message}`, error);
    handleApiError(500);
    throw error;
  }
}
