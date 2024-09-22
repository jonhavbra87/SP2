/**
 * Loads and parses a value from localStorage based on the given key.
 *
 * This function retrieves a value from localStorage and attempts to parse it from JSON.
 * If the key does not exist, it returns `null`. If an error occurs during loading or parsing,
 * it logs the error and returns `null`.
 *
 * @function load
 * @param {string} key - The key used to retrieve the value from localStorage.
 * @returns {any|null} The parsed value from localStorage, or `null` if not found or an error occurs.
 *
 * @example
 * const userData = load('userProfile');
 */

export function load(key) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error(`Error loading ${key} from localStorage: ${error.message}`);
    return null;
  }
}
