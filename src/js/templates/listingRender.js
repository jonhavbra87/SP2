import { getListing } from '../api/fetch/getListing.js';

import { listingTemplate } from './listingTemplate.js';

const loader = document.getElementById('loader');

export async function listingRender() {
  loader.innerHTML = '';
  try {
    const url = new URL(window.location.href);
    let id = url.searchParams.get('id');

    const listingData = await getListing(id);

    console.log('Listing data:', listingData);

    if (listingData) {
      const container = document.getElementById('specific-post');
      container.innerHTML = '';

      const card = listingTemplate(listingData);
      container.append(card);
    }
  } catch (error) {
    throw new Error(`Error rendering post: ${error.message}`);
  }
}
