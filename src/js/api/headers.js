// import { load } from "../storage/index.js";
// import { API_KEY } from "./constants.js";

/**
 * Retrieves headers required for authentication.
 * @returns {Promise<Object>} A promise that resolves to the headers object.
 * @throws {Error} If an access token cannot be found.
 */

/* export async function headers() {
    try {
        // Load access token from storage
        const accessToken = load("accessToken");
        if (!accessToken) {
            console.error("No access token available.");
            throw new Error("No access token available. Please log in to continue.");
        } else {
            console.log("Access token available");
        }

        // Return headers object if token exists
        return {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
            "X-Noroff-API-Key": API_KEY
            }
        };

    } catch (error) {
        // Catch any errors in the token loading process and throw a meaningful error
        throw new Error("Unable to retrieve headers due to an access token issue.");
} */
