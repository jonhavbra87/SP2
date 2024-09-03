import { listingTemplate } from '../../../../templates';

export function specificFooterContainer(postData) {
  const footerContainer = create.FooterContainer(postData);
  footerContainer.classList.add('d-flex', 'flex-column', 'justify-content-center', 'align-items-center');

  const cardTitle = document.createElement('h4');
  cardTitle.classList.add('card-title', 'fw-bold', 'mt-2', 'text-capitalize');
  cardTitle.textContent = postData.title;

  const cardDescription = document.createElement('p');
  cardDescription.classList.add('card-text', 'text-center', 'mb-5');
  cardDescription.textContent = postData.description;

  footerContainer.append(cardTitle, cardDescription);

  return footerContainer;
}
