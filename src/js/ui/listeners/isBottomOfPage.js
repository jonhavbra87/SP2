/**
 * Checks if the user has scrolled to the bottom of the page.
 *
 * This function returns `true` if the user has scrolled within 100 pixels of the bottom of the page,
 * otherwise it returns `false`.
 *
 * @function isBottomOfPage
 * @returns {boolean} `true` if the user is near the bottom of the page, `false` otherwise.
 *
 * @example
 * if (isBottomOfPage()) {
 *   console.log('Reached the bottom of the page');
 * }
 */

export function isBottomOfPage() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
}
