import { sortFetch } from '../api/fetch/sortFetch';
import { initializeCarousel } from '../utilities';
import { shuffleListings } from '../utilities/shuffleListings';
import { createCarousel } from './helpers/create/createCarousel';

/**
 * Renders a carousel of listings by fetching, shuffling, and displaying a limited number of listings.
 *
 * This function fetches auction listings using `sortFetch`, shuffles them with `shuffleListings`, and renders
 * up to 6 listings using `createCarousel`. It also initializes the carousel's navigation functionality via `initializeCarousel`.
 *
 * @async
 * @function renderCarousel
 * @returns {void}
 * @throws {Error} If there is an issue fetching or rendering the listings.
 *
 * @example
 * renderCarousel();
 */

export async function renderCarousel() {
  const limit = 6;
  const container = document.querySelector('.slider');
  container.innerHTML = '';

  try {
    let listings = await sortFetch();

    listings = shuffleListings(listings);

    listings.slice(0, limit).forEach((postData) => {
      createCarousel(postData);
    });

    initializeCarousel();
  } catch (error) {
    console.error('Unable to fetch listings:', error);
  }
}
