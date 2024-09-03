import { getPosts } from '../api/posts/getPosts.js';
import { listingsAppend } from './listingsAppend.js';

const loader = document.getElementById('loader');

export async function listingsRender() {
  loader.innerHTML = '';
  loader.classList.add('d-none');

  const container = document.getElementById('listings');
  //container.innerHTML = '';

  try {
    const listings = await getPosts();

    if (!listings || !listings.length) {
      console.warn('No listings found or listings array is empty.');
      return;
    }
    listingsAppend(listings, container);
  } catch (error) {
    console.error('Failed to render listings:', error);
    container.innerHTML = `<p class="error-message">Failed to load listings. Please try again later.</p>`;
  }
}
