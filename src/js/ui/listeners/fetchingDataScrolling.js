// import { listingsRender } from '../../render';

// let isLoading = false;

// /**
//  * Adds an infinite scrolling event listener to the window, triggering data fetching when nearing the bottom of the page.
//  *
//  * This function listens for the `scroll` event and checks if the user has scrolled close to the bottom of the page.
//  * If so, and if no data is currently being fetched, it calls `listingsRender` to load more data.
//  *
//  * @function fetchingDataScrolling
//  * @returns {void}
//  *
//  * @example
//  * fetchingDataScrolling();
//  */

// export function fetchingDataScrolling() {
//   window.addEventListener('scroll', () => {
//     const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

//     if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoading) {
//       listingsRender();
//     }
//   });
// }
