import { listingsTemplate } from './listingsTemplate.js';

export function listingAppend(postData, parent) {
  const card = listingsTemplate(postData);

  parent.append(card);
}
