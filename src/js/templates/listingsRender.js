import { getListings } from '../api/fetch/getListings.js';
import { hideLoader } from '../ui/helpers/hideLoader.js';
import { showLoader } from '../ui/helpers/showLoader.js';
import { listingsTemplate } from './listingsTemplate.js';

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
  }
}
