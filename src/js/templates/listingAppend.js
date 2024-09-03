import { listingTemplate } from './listingTemplate.js';

export function listingAppend(postData, parent) {
  if (!postData) {
    console.error('Failed to render posts: postData is undefined or null');
    return;
  }
  try {
    const card = listingTemplate(postData);

    parent.append(card);
  } catch (error) {
    console.error('Failed to render posts:', error);
  }
}
