export function FooterContainer(postData) {
  const footerContainer = document.createElement('div');
  footerContainer.classList.add('d-flex', 'flex-column', 'justify-content-center', 'align-items-center');

  const cardTitle = document.createElement('h4');
  cardTitle.classList.add('card-title', 'fw-bold', 'mt-2', 'text-uppercase');
  cardTitle.textContent = postData.title;

  const cardDescription = document.createElement('p');
  cardDescription.classList.add('card-text', 'text-center', 'mt-2', 'mb-4', 'text-wrap');
  cardDescription.textContent = postData.description;

  const cardCreated = document.createElement('p');
  cardCreated.classList.add('card-text', 'text-center', 'mb-3', 'text-wrap');
  cardCreated.textContent = `Created: ${postData.created}`;

  const cardEndsAt = document.createElement('p');
  cardEndsAt.classList.add('card-text', 'text-center', 'mb-3', 'text-wrap');
  cardEndsAt.textContent = `Ends at: ${postData.endsAt}`;

  const cardCount = document.createElement('p');
  cardCount.classList.add('card-text', 'text-end', 'mb-1', 'text-wrap');
  cardCount.textContent = `Offers: ${postData._count.bids}`;

  const cardButton = document.createElement('button');
  cardButton.classList.add('btn', 'btn-cb-primary', 'text-uppercase', 'fw-bold', 'mb-2', 'make-offer-btn');
  cardButton.textContent = 'Make offer';

  // cardButton.addEventListener('click', () => {
  // cardButton.setAttribute('data-bs-toggle', 'modal');
  // cardButton.setAttribute('data-bs-target', `#modal-${postData.id}`);
  // });

  footerContainer.append(cardTitle, cardDescription, cardCreated, cardEndsAt, cardCount, cardButton);

  return footerContainer;
}
