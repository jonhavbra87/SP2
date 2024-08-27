// import { authFetch } from "../authFetch.js";

/**
 * Fetches data from the provided URL with authentication.
 *
 * This function uses the function "authFetch" to make an authenticated request to the given URL,
 * parses the response as JSON, and returns the resulting data. If an error occurs
 * during the fetch or JSON parsing, an Error is thrown and an alert is displayed
 * with the error message.
 *
 * @async
 * @function doFetch
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<Object>} The JSON-parsed response data.
 * @throws {Error} Throws an error if the fetch request or JSON parsing fails and displays an alert with the error message.
 */

/* export async function doFetch(url) {
    try {
        const response = await authFetch(url);
        const json = await response.json();
        return json;
    } catch (error) {
       
        throw new Error(`Error fetching data: ${error.message}`)
        
    }
} */
