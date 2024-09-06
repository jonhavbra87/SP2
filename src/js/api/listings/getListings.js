// import { API_BASE } from "../constants.js";
// import { doFetch } from "../helpers/doFetch.js";

import { load } from '../../storage/index.js';
import { API_BASE, API_AUCTIONS, API_KEY } from '../constants.js';
// import { doFetch } from "../helpers/doFetch";

/**
 * Fetches posts from a social API with detailed query parameters to include authors, comments, and reactions.
 * The function constructs a URL using constants and parameters defined at module level and sends a fetch request
 * using the `doFetch` utility function. If the fetch fails, it throws an error with the failed reason.
 *
 * @returns {Promise<Object>} A Promise that resolves to the fetched posts data.
 * @throws {Error} Throws an Error object with a message if the fetch operation fails.
 */

const action = '/listings';

export async function getListings() {
  const url = `${API_BASE}${API_AUCTIONS}${action}`;
  const token = load('token');

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      'X-Noroff-API-Key': API_KEY,
    },
  });

  const result = await response.json();

  return result.data;
}
