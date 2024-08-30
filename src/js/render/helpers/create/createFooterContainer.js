export function createFooterContainer(postData) {
  const footerContainer = document.createElement('div');
  footerContainer.classList.add('d-flex', 'flex-column', 'justify-content-center', 'align-items-center');

  const cardTitle = document.createElement('h4');
  cardTitle.classList.add('card-title', 'fw-bold', 'mb-1', 'text-capitalize');
  cardTitle.textContent = postData.title;

  const cardDesciption = document.createElement('p');
  cardDesciption.classList.add('card-text', 'text-center', 'mb-5');
  cardDesciption.textContent = postData.description;

  const cardButton = document.createElement('button');
  cardButton.classList.add('btn', 'btn-primary', 'text-uppercase', 'fw-bold', 'mb-2');
  cardButton.textContent = 'Make offer';

  footerContainer.append(cardTitle, cardDesciption, cardButton);

  return footerContainer;
}
