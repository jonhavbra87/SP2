// import { headers } from "./headers.js";

/**
 * Makes an authenticated fetch request.
 * @param {string} url - The API URL to make the request to.
 * @param {Object} [options] - Spreadable options object for the fetch request. Options include method, body, etc.
 * @returns {Promise<Response>} A promise that resolves to the fetch response object.
 * @throws {Error} If there's an error during the fetch request.
 */

/* 
export async function authFetch(url, options = {}) {
    try {
        // Resolve headers for authenticated requests
        const resolvedHeaders = await headers();

        // Make the fetch request with the resolved headers
        const response = await fetch(url, {
            ...options,
            headers: resolvedHeaders
        });

        // Check if the response is not OK and throw a specific error
        if (!response.ok) {
            console.error(`Fetch failed with status ${response.status}: ${response.statusText}`);
            throw new Error(`Fetch request failed with status ${response.status} - ${response.statusText}`);
        }

        // Return the response object if successful
        return response;

    } catch (error) {
       
        throw new Error("Unable to complete the authenticated request due to an error.");
    }
}
 */
