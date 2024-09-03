export function specificFooterContainer(postData) {
  const footerContainer = document.createElement('div');
  footerContainer.classList.add('d-flex', 'flex-column', 'justify-content-around');

  const cardTitle = document.createElement('h4');
  cardTitle.classList.add('card-title', 'fw-bold', 'text-capitalize');
  cardTitle.textContent = postData.title;

  const cardDescription = document.createElement('p');
  cardDescription.classList.add('card-text', 'text-start');
  cardDescription.textContent = postData.description;

  const cardCreated = document.createElement('p');
  cardCreated.classList.add('card-text', 'text-center', 'mb-2');
  cardCreated.textContent = `Created: ${postData.created}`;

  const cardEndsAt = document.createElement('p');
  cardEndsAt.classList.add('card-text', 'text-center', 'mb-3');
  cardEndsAt.textContent = `Ends at: ${postData.endsAt}`;

  const cardCount = document.createElement('p');
  cardCount.classList.add('card-text', 'text-end', 'mb-1');
  cardCount.textContent = `Offers: ${postData._count.bids}`;

  footerContainer.append(cardTitle, cardDescription, cardCreated, cardEndsAt, cardCount);

  return footerContainer;
}
