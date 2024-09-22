import { getListings } from '../api/fetch/getListings.js';
import { listingsTemplate } from '../templates/listingsTemplate.js';

const limit = 6;

/**
 * Renders a limited number of listings in the DOM using a specified template.
 *
 * This function fetches all listings from the API, limits the number of displayed listings
 * to the defined `limit`, and renders them inside a container with the ID `listings`.
 * It handles any errors that occur during the fetching or rendering process.
 *
 * @async
 * @function limitListingsRender
 * @returns {void}
 * @throws {Error} If there is an issue fetching or rendering the listings.
 *
 * @example
 * limitListingsRender();
 */

export async function limitListingsRender() {
  const container = document.getElementById('listings');
  container.innerHTML = '';

  try {
    const listings = await getListings();

    listings.slice(0, limit).forEach((postData) => {
      const cardContent = listingsTemplate(postData);

      container.append(cardContent);
    });
  } catch (error) {
    console.error('Failed to render listings:', error);
  }
}
