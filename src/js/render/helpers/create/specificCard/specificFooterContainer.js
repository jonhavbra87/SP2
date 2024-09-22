import { submitBid } from '../../../../api/fetch/submitBid.js';
import { showMessage } from '../../../../ui/errorHandling/showMessage.js';

/**
 * Creates and returns a footer container for a specific post, including title, description, creation date, end date,
 * recent bids, and a bid submission form.
 *
 * This function generates a detailed footer for an auction post, showing the post's metadata, latest bids,
 * and a form to place new bids. It also handles bid submission via the `submitBid` function.
 *
 * @function specificFooterContainer
 * @param {Object} postData - The data object containing the post information.
 * @param {string} postData.title - The title of the post.
 * @param {string} postData.description - The description of the post.
 * @param {string} postData.created - The creation date of the post in ISO format.
 * @param {string} postData.endsAt - The end date of the auction in ISO format.
 * @param {Array<Object>} postData.bids - An array of bid objects with amount, bidder name, and created date.
 * @param {number} postData.id - The ID of the post.
 * @returns {HTMLDivElement} The created footer container element.
 *
 * @example
 * const footer = specificFooterContainer(postData);
 * document.body.appendChild(footer);
 */

export function specificFooterContainer(postData) {
  const footerContainer = document.createElement('div');
  footerContainer.classList.add('col-12', 'col-md-6', 'd-flex', 'flex-column', 'justify-content-center', 'p-3');

  const cardTitle = document.createElement('h1');
  cardTitle.classList.add('card-title', 'text-center');
  cardTitle.textContent = postData.title;

  const cardDescription = document.createElement('p');
  cardDescription.classList.add('card-text', 'text-start');
  cardDescription.textContent = postData.description;

  const cardCreated = document.createElement('p');
  cardCreated.classList.add('card-text', 'text-start', 'mb-2');

  const createdText = document.createElement('span');
  createdText.classList.add('fw-bold');
  createdText.textContent = 'Created: ';

  const createdDateText = document.createElement('span');
  createdDateText.textContent = `${new Date(postData.created).toLocaleDateString()}`;

  cardCreated.append(createdText, createdDateText);

  const cardEndsAt = document.createElement('p');
  cardEndsAt.classList.add('card-text', 'text-start', 'mb-3');

  const endsAtText = document.createElement('span');
  cardEndsAt.classList.add('fw-bold');
  endsAtText.textContent = 'Ends at: ';

  const dateText = document.createElement('span');
  dateText.classList.add('fw-light');
  dateText.textContent = `${new Date(postData.endsAt).toLocaleString('en-GB', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'Europe/Oslo' })}`;

  cardEndsAt.append(endsAtText, dateText);

  // Bids section
  const bidsTitle = document.createElement('h6', 'card-title', 'fw-bold');
  bidsTitle.textContent = 'Latest bids:';

  const bidsContainer = document.createElement('ul');
  bidsContainer.classList.add('list-group', 'mb-3');

  let limit = 4;

  // Loop through bids and add them to the container
  if (postData.bids && postData.bids.length > 0) {
    postData.bids
      .reverse()
      .slice(0, limit)
      .forEach((bid) => {
        const bidItem = document.createElement('li');
        bidItem.classList.add('list-unstyled');
        bidItem.textContent = `${bid.amount}$ by ${bid.bidder.name} on ${new Date(bid.created).toLocaleDateString()}`;
        bidsContainer.append(bidItem);
      });
  } else {
    const noBidsItem = document.createElement('li');
    noBidsItem.classList.add('list-unstyled');
    noBidsItem.textContent = 'No bids yet.';
    bidsContainer.append(noBidsItem);
  }
  const placeBidContainer = document.createElement('div');

  // Place bid form
  const placeBidForm = document.createElement('form');
  placeBidForm.classList.add('d-flex', 'flex-column', 'align-items-start', 'mt-3');
  placeBidForm.id = 'placeBidForm';

  // Create the label for the input
  const placeBidLabel = document.createElement('label');
  placeBidLabel.setAttribute('for', 'placeBidInput');
  placeBidLabel.classList.add('form-label');
  placeBidLabel.textContent = 'Enter your bid amount:';

  const placeBidInput = document.createElement('input');
  placeBidInput.classList.add('form-control', 'mb-5');
  placeBidInput.type = 'number';
  placeBidInput.placeholder = 'Place your bid';
  placeBidInput.id = 'placeBidInput';
  placeBidInput.required = true;

  const placeBidButton = document.createElement('button');
  placeBidButton.classList.add('btn', 'btn-cb-primary', 'mb-2');
  placeBidButton.type = 'submit';
  placeBidButton.textContent = 'Place Bid';

  // Handle bid submission
  placeBidForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const bidAmount = parseInt(placeBidInput.value);
    if (!bidAmount || isNaN(bidAmount) || bidAmount <= 0) {
      showMessage('Invalid bid amount. Please enter a valid number.');
      return;
    }

    try {
      await submitBid(postData.id, bidAmount);
    } catch (error) {
      console.error('Error placing bid:', error);
    }
  });

  placeBidForm.append(placeBidLabel, placeBidInput, placeBidButton);

  placeBidContainer.append(placeBidForm);

  footerContainer.append(cardTitle, cardDescription, cardCreated, cardEndsAt, bidsTitle, bidsContainer, placeBidContainer);

  return footerContainer;
}
