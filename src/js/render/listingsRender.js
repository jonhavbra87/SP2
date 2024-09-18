import { getListings } from '../api/fetch/getListings.js';
import { listingsTemplate } from '../templates/listingsTemplate.js';
import { hideLoader } from '../ui/helpers/hideLoader.js';
import { showLoader } from '../ui/helpers/showLoader.js';

let page = 1;

let isLoading = false;

export async function listingsRender() {
  if (isLoading) return;

  isLoading = true;

  showLoader();

  const container = document.getElementById('listings');

  try {
    const listings = await getListings(page, 12);
    console.log('Listings fetched: ', listings);

    hideLoader();

    listings.forEach((postData) => {
      const cardContent = listingsTemplate(postData);

      container.append(cardContent);
    });

    page++;
  } catch (error) {
    console.error('Failed to render listings:', error);
  } finally {
    hideLoader();
    isLoading = false;
  }
}
