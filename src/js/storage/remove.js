/**
 * Removes a key-value pair from localStorage based on the given key.
 *
 * This function checks if the key exists in localStorage. If it exists, the key is removed.
 * If the key does not exist, a warning is logged to the console.
 *
 * @function remove
 * @param {string} key - The key of the item to be removed from localStorage.
 * @returns {void}
 *
 * @example
 * remove('userProfile');
 */

export function remove(key) {
  if (localStorage.getItem(key) !== null) {
    localStorage.removeItem(key);
  } else {
    console.warn(`Key "${key}" does not exist in localStorage.`);
  }
}
