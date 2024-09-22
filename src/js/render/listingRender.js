import { getListing } from '../api/fetch/getListing.js';
import { listingTemplate } from '../templates/listingTemplate.js';
import { hideLoader } from '../ui/helpers/hideLoader.js';
import { showLoader } from '../ui/helpers/showLoader.js';

/**
 * Renders a specific listing on the page based on the ID from the URL.
 *
 * This function retrieves a listing's ID from the current URL, fetches the listing data, and renders it
 * using the `listingTemplate`. A loader is displayed while the data is being fetched, and hidden when the
 * operation completes. If no listing data is found, the function safely exits.
 *
 * @async
 * @function listingRender
 * @returns {void}
 * @throws {Error} If there is an issue fetching or rendering the listing.
 *
 * @example
 * listingRender();
 */

export async function listingRender() {
  showLoader();

  try {
    const url = new URL(window.location.href);
    let id = url.searchParams.get('id');

    const listingData = await getListing(id);

    if (!listingData) {
      hideLoader();
      return;
    }

    const container = document.getElementById('specific-post');

    const card = listingTemplate(listingData);

    container.append(card);
  } catch (error) {
    console.error(`Error rendering post: ${error.message}`);
  } finally {
    hideLoader();
  }
}
