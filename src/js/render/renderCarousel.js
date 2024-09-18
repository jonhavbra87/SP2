import { getListings } from '../api/fetch/getListings';
import { shuffleListings } from '../utilities/shuffleListings';
import { createCarousel } from './helpers/create/createCarousel';

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
  } catch (error) {
    console.error('Unable to fetch listings:', error);
  }
}
