/**
 * Randomly shuffles the elements of an array using the Fisher-Yates algorithm.
 *
 * This function rearranges the elements in the given array in a random order. It iterates through the array
 * from the last element to the first, swapping each element with a randomly selected element.
 *
 * @function shuffleListings
 * @param {Array} array - The array of listings to shuffle.
 * @returns {Array} The shuffled array.
 *
 * @example
 * const shuffledListings = shuffleListings(listings);
 */

export function shuffleListings(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
