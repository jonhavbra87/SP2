// FooterContainer function
export function FooterContainer(postData) {
  const footerContainer = document.createElement('div');
  footerContainer.classList.add('d-flex', 'flex-column', 'justify-content-between', 'align-items-center');

  const cardTitle = document.createElement('h4');
  cardTitle.classList.add('card-title', 'fw-bold', 'text-uppercase', 'text-center');
  cardTitle.style.height = 'auto';
  cardTitle.textContent = postData.title;

  const cardEndsAt = document.createElement('p');
  cardEndsAt.classList.add('card-text', 'text-center', 'mb-3', 'text-wrap');
  cardEndsAt.textContent = `Ends at: ${postData.endsAt}`;

  const cardCount = document.createElement('p');
  cardCount.classList.add('card-text', 'text-end', 'mb-1', 'text-wrap');
  cardCount.textContent = `Bids: ${postData._count.bids}`;

  footerContainer.append(cardTitle, cardEndsAt, cardCount);

  return footerContainer;
}
