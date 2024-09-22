/**
 * Shows the loader overlay by removing the `d-none` class.
 *
 * This function selects the loader overlay element by its ID (`loader-overlay`) and shows it by
 * removing the `d-none` class. If the element is not found, an error message is logged to the console.
 *
 * @function showLoader
 * @returns {void}
 *
 * @example
 * showLoader();
 */

export function showLoader() {
  const loaderOverlay = document.getElementById('loader-overlay');
  if (loaderOverlay) {
    loaderOverlay.classList.remove('d-none');
  } else {
    console.error('Loader overlay not found.');
  }
}
