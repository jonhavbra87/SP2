import { sortFetch } from '../api/fetch/sortFetch.js';
import { listingsTemplate } from '../templates/listingsTemplate.js';
import { hideLoader } from '../ui/helpers/hideLoader.js';
import { showLoader } from '../ui/helpers/showLoader.js';

let page = 1;
let isLoading = false;
let allListings = [];
const ITEMS_PER_PAGE = 12;
/**
 * Renders paginated listings on the page, fetching and sorting data as needed.
 *
 * This function fetches all listings (if not already fetched), paginates them, and renders
 * a set number of listings per page. It handles loading states, displays an error message if fetching fails,
 * and supports pagination.
 *
 * @async
 * @function listingsRender
 * @returns {void}
 * @throws {Error} If there is an issue fetching or rendering listings.
 *
 * @example
 * listingsRender();
 */

export async function listingsRender() {
  if (isLoading) return;
  isLoading = true;
  showLoader();

  const container = document.getElementById('listings');

  try {
    if (allListings.length === 0) {
      // Fetch listings and sort them with sorting function
      allListings = await sortFetch();
    }

    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const listingsToRender = allListings.slice(start, end);

    // If there are no listings to render, exit the function
    if (listingsToRender.length === 0) {
      return;
    }

    listingsToRender.forEach((postData) => {
      const cardContent = listingsTemplate(postData);
      container.append(cardContent);
    });

    page++;
  } catch (error) {
    console.error('Failed to render listings:', error);
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Could not load more listings. Please try again later.';
    container.append(errorMessage);
  } finally {
    hideLoader();
    isLoading = false;
  }
}
