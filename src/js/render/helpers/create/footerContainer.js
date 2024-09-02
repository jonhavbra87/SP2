import { listingTemplate } from '../../../templates';

export function FooterContainer(postData, modalId) {
  const footerContainer = document.createElement('div');
  footerContainer.classList.add('d-flex', 'flex-column', 'justify-content-center', 'align-items-center');

  const cardTitle = document.createElement('h4');
  cardTitle.classList.add('card-title', 'fw-bold', 'mt-2', 'text-capitalize');
  cardTitle.textContent = postData.title;

  const cardDescription = document.createElement('p');
  cardDescription.classList.add('card-text', 'text-center', 'mb-5');
  cardDescription.textContent = postData.description;

  const cardCreated = document.createElement('p');
  cardCreated.classList.add('card-text', 'text-center', 'mb-3');
  cardCreated.textContent = `Created: ${postData.created}`;

  const cardEndsAt = document.createElement('p');
  cardEndsAt.classList.add('card-text', 'text-center', 'mb-3');
  cardEndsAt.textContent = `Ends at: ${postData.endsAt}`;

  const cardCount = document.createElement('p');
  cardCount.classList.add('card-text', 'text-end', 'mb-1');
  cardCount.textContent = `Offers: ${postData._count.bids}`;

  const cardButton = document.createElement('button');
  cardButton.classList.add('btn', 'btn-primary', 'text-uppercase', 'fw-bold', 'mb-2', 'make-offer-btn');
  // cardButton.setAttribute('data-bs-toggle', 'modal');
  // cardButton.setAttribute('data-bs-target', `#modal-${postData.id}`);
  cardButton.textContent = 'Make offer';
  cardButton.addEventListener('click', () => {
    listingTemplate(postData);
  });

  footerContainer.append(cardTitle, cardDescription, cardCreated, cardEndsAt, cardCount, cardButton);

  return footerContainer;
}
