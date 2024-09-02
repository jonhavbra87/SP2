import { getPost } from '../api/posts/getPost.js';
import { listingTemplate } from './listingTemplate.js';

export async function listingRender() {
  try {
    const url = new URL(location.href);
    let id = url.searchParams.get('id');

    const listingData = await getPost(id);

    if (listingData) {
      const container = document.querySelector('#listing');

      listingTemplate(listingData, container);
    }
  } catch (error) {
    throw new Error(`Error rendering post: ${error.message}`);
  }
}
