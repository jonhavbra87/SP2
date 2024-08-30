export function createFooterContainer(postData) {
  const footerContainer = document.createElement('div');
  footerContainer.classList.add('d-flex', 'flex-column', 'justify-content-center', 'align-items-center');

  const cardTitle = document.createElement('h4');
  cardTitle.classList.add('card-title', 'fw-bold', 'mt-2', 'text-capitalize');
  cardTitle.textContent = postData.title;

  const cardDesciption = document.createElement('p');
  cardDesciption.classList.add('card-text', 'text-center', 'mb-5');
  cardDesciption.textContent = postData.description;

  const cardCreated = document.createElement('p');
  cardCreated.classList.add('card-text', 'text-center', 'mb-3');
  cardCreated.textContent = `Created: ${postData.created}`;

  const cardEndsAt = document.createElement('p');
  cardEndsAt.classList.add('card-text', 'text-center', 'mb-3');
  cardEndsAt.textContent = `Ends at: ${postData.endsAt}`;

  const cardButton = document.createElement('button');
  cardButton.classList.add('btn', 'btn-primary', 'text-uppercase', 'fw-bold', 'mb-2');
  cardButton.setAttribute('data-bs-toggle', 'modal'); // Skal være 'modal'
  cardButton.setAttribute('data-bs-target', '#cardModal'); // Target modalen med ID 'cardModal'
  cardButton.textContent = 'Make offer';

  const cardCount = document.createElement('p');
  cardCount.classList.add('card-text', 'text-end', 'mb-1');
  cardCount.textContent = `Offers: ${postData._count.bids}`;

  footerContainer.append(cardTitle, cardDesciption, cardCreated, cardEndsAt, cardButton, cardCount);

  return footerContainer;
}
