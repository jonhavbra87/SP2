/**
 * Saves a key-value pair to localStorage after stringifying the value.
 *
 * This function checks if both the key and value are valid before saving the value to localStorage
 * under the specified key. If the operation is successful, it logs the saved key and value.
 * If the key or value is invalid, it logs a warning.
 *
 * @function save
 * @param {string} key - The key under which the value is stored in localStorage.
 * @param {any} value - The value to be saved, which is stringified before saving.
 * @returns {void}
 *
 * @example
 * save('userProfile', { name: 'John', age: 30 });
 */

export function save(key, value) {
  if (key && value !== undefined) {
    localStorage.setItem(key, JSON.stringify(value));
    console.log(`Saved ${key}:`, value);
  } else {
    console.warn(`Attempted to save invalid key or value: ${key}, ${value}`);
  }
}
