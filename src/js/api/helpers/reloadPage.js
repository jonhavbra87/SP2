import { hideLoader } from '../../ui/helpers/hideLoader';
import { showLoader } from '../../ui/helpers/showLoader';

/**
 * Reloads the current page after displaying a loader.
 *
 * This function shows a loading indicator, waits for 1 second, hides the loader,
 * and then reloads the current webpage.
 *
 * @async
 * @function reloadPage
 * @returns {void}
 *
 * @example
 * reloadPage();
 */

export async function reloadPage() {
  showLoader();
  setTimeout(() => {
    hideLoader();
    window.location.reload();
  }, 1000);
}
