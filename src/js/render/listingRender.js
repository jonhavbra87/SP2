import { getListing } from '../api/fetch/getListing.js';
import { listingTemplate } from '../templates/listingTemplate.js';
import { hideLoader } from '../ui/helpers/hideLoader.js';
import { showLoader } from '../ui/helpers/showLoader.js';

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
    throw new Error(`Error rendering post: ${error.message}`);
  } finally {
    hideLoader();
  }
}
