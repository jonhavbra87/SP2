// import { API_BASE } from "../constants.js";
// import { doFetch } from "../helpers/doFetch.js";

// export const action = "/posts"
// export const author = "?_author=true"
// export const comment = "&_comments=true"
// export const reactions = "&_reactions=true"

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
        const url = `${API_BASE}${action}`;
        const posts = await doFetch(url), {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
            "X-Noroff-API-Key": API_KEY
        }
    }
        return posts;
    } catch (error) {
        throw new Error(error)
    }
} */
