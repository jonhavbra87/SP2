import { sortFetch } from '../api/fetch/sortFetch.js';
import { listingsTemplate } from '../templates/listingsTemplate.js';
import { hideLoader } from '../ui/helpers/hideLoader.js';
import { showLoader } from '../ui/helpers/showLoader.js';
import { isBottomOfPage } from '../ui/listeners/isBottomOfPage.js';

let page = 1;
let isLoading = false;
let allListings = [];
const ITEMS_PER_PAGE = 12;

/**
 * Renders paginated listings with infinite scroll, fetching and sorting data as needed.
 *
 * This function fetches and sorts all listings if they haven't been loaded yet. It renders listings
 * in pages, with a maximum of `ITEMS_PER_PAGE` listings per page. The function supports infinite scrolling
 * and automatically loads more listings when the user reaches the bottom of the page.
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
      console.log('All listings fetched and sorted: ', allListings);
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
    // Implement infinite scroll
    if (isBottomOfPage()) {
      listingsRender();
    }
  } catch (error) {
    console.error('Failed to render listings:', error);
  } finally {
    hideLoader();
    isLoading = false;
  }
}
