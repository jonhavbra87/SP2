import { getPost } from '../api/posts/getPost.js';
import { listingAppend } from './listingAppend.js';

const loader = document.getElementById('loader');

export async function listingRender() {
  try {
    const url = new URL(location.href);
    let id = url.searchParams.get('id');

    console.log('ID:', id);

    const listingData = await getPost(id);

    console.log('Listing data:', listingData);

    if (listingData) {
      const container = document.getElementById('specific-post');

      loader.innerHTML = '';

      loader.classList.add('d-none');

      listingAppend(listingData, container);
    }
  } catch (error) {
    throw new Error(`Error rendering post: ${error.message}`);
  }
}
