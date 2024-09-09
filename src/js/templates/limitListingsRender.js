import { getListings } from '../api/fetch/getListings.js';
import { listingsTemplate } from './listingsTemplate.js';

const limit = 6;

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
