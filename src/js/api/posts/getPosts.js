// import { API_BASE } from "../constants.js";
// import { doFetch } from "../helpers/doFetch.js";

import { load } from '../../storage/index.js'
import { API_BASE, API_AUCTIONS, API_KEY } from '../constants'
// import { doFetch } from "../helpers/doFetch";

/**
 * Fetches posts from a social API with detailed query parameters to include authors, comments, and reactions.
 * The function constructs a URL using constants and parameters defined at module level and sends a fetch request
 * using the `doFetch` utility function. If the fetch fails, it throws an error with the failed reason.
 *
 * @returns {Promise<Object>} A Promise that resolves to the fetched posts data.
 * @throws {Error} Throws an Error object with a message if the fetch operation fails.
 */

/* export async function getPosts() {
    try {
        const url = `${API_BASE}${API_AUCTIONS}${action}`;
        const posts = await doFetch(url);
        console.log(posts);
        
        return posts;
    } catch (error) {
        throw new Error(error)
    }
} */

const action = '/listings'

export async function getPosts() {
  const url = `${API_BASE}${API_AUCTIONS}${action}`

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${load('token')}`,
      'X-Noroff-API-Key': API_KEY,
    },
  })
  return await response.json()
}
const listings = await getPosts()
console.log(listings.data)
