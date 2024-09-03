import { getPost } from '../api/posts/getPost.js';
import { listingAppend } from './listingAppend.js';
// import { listingTemplate } from './listingTemplate.js';
const loader = document.getElementById('loader');
export async function listingRender() {
  try {
    const url = new URL(location.href);
    let id = url.searchParams.get('id');

    console.log('ID:', id);

    const listingData = await getPost(id);
    console.log('Listing data:', listingData);

    if (listingData) {
      const container = document.getElementById('listing');
      loader.innerHTML = '';
      loader.classList.add('d-none');
      container.innerHTML = listingData.title;

      listingAppend(listingData, container);
    }
  } catch (error) {
    throw new Error(`Error rendering post: ${error.message}`);
  }
}
