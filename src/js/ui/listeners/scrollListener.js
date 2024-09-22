import { listingsRender } from '../../render';
import { isBottomOfPage } from './isBottomOfPage';

let isThrottled = false;

/**
 * Adds a scroll event listener to the window that fetches and renders listings when the user reaches the bottom of the page.
 *
 * This function throttles scroll events to prevent excessive calls to `listingsRender` by limiting execution to once every 200ms.
 * It checks if the user has scrolled to the bottom of the page using `isBottomOfPage`, and if true, triggers the listing render process.
 *
 * @function scrollListener
 * @returns {void}
 *
 * @example
 * scrollListener();
 */

export function scrollListener() {
  window.addEventListener('scroll', () => {
    if (isThrottled) return;

    isThrottled = true;

    setTimeout(() => {
      if (isBottomOfPage()) {
        listingsRender(); // Run the function that fetches and renders listings
      }
      isThrottled = false;
    }, 200); // Throttle time in milliseconds
  });
}
