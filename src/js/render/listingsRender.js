import { getListings } from '../api/fetch/getListings.js';
import { listingsTemplate } from '../templates/listingsTemplate.js';
import { hideLoader } from '../ui/helpers/hideLoader.js';
import { showLoader } from '../ui/helpers/showLoader.js';

export async function listingsRender() {
  showLoader();

  const container = document.getElementById('listings');
  container.innerHTML = '';

  try {
    const listings = await getListings();
    hideLoader();

    listings.forEach((postData) => {
      const cardContent = listingsTemplate(postData);

      container.append(cardContent);
    });
  } catch (error) {
    console.error('Failed to render listings:', error);
  } finally {
    hideLoader();
  }
}
