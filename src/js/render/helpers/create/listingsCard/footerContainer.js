/**
 * Creates and returns a div element styled as a footer container for a card, displaying title, end date, and bid count.
 *
 * This function takes post data and generates a footer containing a title, the auction's end date formatted to
 * `en-GB` locale, and the number of bids.
 *
 * @function FooterContainer
 * @param {Object} postData - The data object containing information about the auction.
 * @param {string} postData.title - The title of the post.
 * @param {string} postData.endsAt - The end date of the auction in ISO string format.
 * @param {Object} postData._count - The count of various elements related to the post.
 * @param {number} postData._count.bids - The number of bids for the auction.
 * @returns {HTMLDivElement} The created footer container element.
 *
 * @example
 * const footer = FooterContainer(postData);
 * document.body.appendChild(footer);
 */

export function FooterContainer(postData) {
  const footerContainer = document.createElement('div');
  footerContainer.classList.add('d-flex', 'flex-column', 'justify-content-between', 'align-items-center');

  const cardTitle = document.createElement('h4');
  cardTitle.classList.add('card-title', 'fw-bold', 'text-uppercase', 'text-center');
  cardTitle.style.height = 'auto';
  cardTitle.textContent = postData.title;

  const cardEndsAt = document.createElement('p');
  cardEndsAt.classList.add('card-text', 'text-center', 'mb-3', 'text-wrap');
  cardEndsAt.textContent = `Ends at: ${new Date(postData.endsAt).toLocaleString('en-GB', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'Europe/Oslo' })}`;

  const cardCount = document.createElement('p');
  cardCount.classList.add('card-text', 'text-end', 'mb-1', 'text-wrap');
  cardCount.textContent = `Bids: ${postData._count.bids}`;

  footerContainer.append(cardTitle, cardEndsAt, cardCount);

  return footerContainer;
}
