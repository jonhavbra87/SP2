import { getListings } from '../api/fetch/getListings';
import { initializeCarousel } from '../utilities/initializeCarousel';
import { shuffleListings } from '../utilities/shuffleListings';
import { createCarousel } from './helpers/create/crateCarousel';

export async function renderCarousel() {
  const limit = 6;
  const container = document.querySelector('.slider');
  container.innerHTML = '';

  try {
    let listings = await getListings();

    listings = shuffleListings(listings);

    listings.slice(0, limit).forEach((postData) => {
      createCarousel(postData);
    });

    initializeCarousel();
  } catch (error) {
    console.error('Unable to fetch listings:', error);
  }
}
