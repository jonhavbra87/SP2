import { authFetch } from '../../api/fetch/authFetch.js';

export async function doFetch(url) {
  try {
    const response = await authFetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}
