/**
 * Hides the loader overlay by adding the `d-none` class.
 *
 * This function selects the loader overlay element by its ID (`loader-overlay`) and hides it by
 * adding the `d-none` class. If the element is not found, an error message is logged to the console.
 *
 * @function hideLoader
 * @returns {void}
 *
 * @example
 * hideLoader();
 */

export function hideLoader() {
  const loaderOverlay = document.getElementById('loader-overlay');
  if (loaderOverlay) {
    loaderOverlay.classList.add('d-none');
  } else {
    console.error('Loader overlay not found.');
  }
}
