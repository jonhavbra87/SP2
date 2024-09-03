import { modalShowHide } from '../ui/listeners/modalShowHide.js';
import { listingRender } from './listingRender.js';
import { listingsTemplate } from './listingsTemplate.js';

export function listingsAppend(postData, parent) {
  if (!postData) {
    console.error('Failed to render posts: postDataList is undefined');
    return;
  }
  try {
    postData.forEach((postData) => {
      const cardContent = listingsTemplate(postData);

      if (cardContent) {
        const readMoreBtn = cardContent.querySelector('.make-offer-btn');
        // const modalId = `${postData.id}`;

        // modalButton.setAttribute('data-bs-toggle', 'modal');
        // modalButton.setAttribute('data-bs-target', `#modal-${modalId}`);

        readMoreBtn.onclick = () => {
          console.log('Modal button clicked, ID:', readMoreBtn.id);

          // const modal =  modalShowHide(postData);
          window.location.href = `/listings/?id=${postData.id}`;
          // document.body.append(modal);
          //history.pushState(null, '', `/listings/${postData.id}`);
        };

        parent.append(cardContent);
      }
    });
  } catch (error) {
    throw new Error(`Failed to render posts: ${error.message}`);
  }
}
