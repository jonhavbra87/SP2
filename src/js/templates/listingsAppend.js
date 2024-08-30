import { listingTemplate } from './listingTemplate.js';

export function listingsAppend(postData, parent) {
  if (!postData) {
    console.error('Failed to render posts: postDataList is undefined');
    return;
  }
  try {
    postData.forEach((postData) => {
      const cardContent = listingTemplate(postData);

      if (cardContent) {
        /*    cardContent.addEventListener('click', () => {
                    window.location.href = `/listingpecific/?id=${postData.id}`;
                });     */
        parent.append(cardContent);
      }
    });
  } catch (error) {
    throw new Error(`Failed to render posts: ${error.message}`);
  }
}
