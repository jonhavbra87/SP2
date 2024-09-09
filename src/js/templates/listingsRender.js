import { getListings } from '../api/fetch/getListings.js';
import { listingsTemplate } from './listingsTemplate.js';

const loader = document.getElementById('loader');

export async function listingsRender() {
  loader.innerHTML = '';
  // loader.classList.add('d-none');

  const container = document.getElementById('listings');
  container.innerHTML = '';

  try {
    const listings = await getListings();

    listings.forEach((postData) => {
      const cardContent = listingsTemplate(postData);

      container.append(cardContent);
    });
  } catch (error) {
    console.error('Failed to render listings:', error);
  }
}
