export function specificFooterContainer(postData) {
  const footerContainer = document.createElement('div');
  footerContainer.classList.add('col-12', 'col-lg-6', 'd-flex', 'flex-column', 'justify-content-center');

  const cardTitle = document.createElement('h4');
  cardTitle.classList.add('card-title', 'fw-bold', 'text-capitalize', 'text-center');
  cardTitle.textContent = postData.title;

  const cardDescription = document.createElement('p');
  cardDescription.classList.add('card-text', 'text-start');
  cardDescription.textContent = postData.description;

  const cardCreated = document.createElement('p');
  cardCreated.classList.add('card-text', 'text-start', 'mb-2');
  cardCreated.textContent = `Created: ${new Date(postData.created).toLocaleDateString()}`;

  const cardEndsAt = document.createElement('p');
  cardEndsAt.classList.add('card-text', 'text-start', 'mb-3');
  cardEndsAt.textContent = `Ends at: ${new Date(postData.endsAt).toLocaleDateString()}`;

  // Bids section
  const bidsTitle = document.createElement('h5', 'card-title');
  bidsTitle.textContent = 'Latest bids:';

  const bidsContainer = document.createElement('ul');
  bidsContainer.classList.add('list-group', 'list-group-flush', 'mb-3');

  let limit = 4;
  // Loop through bids and add them to the container
  if (postData.bids && postData.bids.length > 0) {
    postData.bids.slice(0, limit).forEach((bid) => {
      const bidItem = document.createElement('li');
      bidItem.classList.add('list-unstyled');
      bidItem.textContent = `${bid.amount}$ by ${bid.bidder.name} on ${new Date(bid.created).toLocaleDateString()}`;
      bidsContainer.append(bidItem);
    });
  } else {
    const noBidsItem = document.createElement('li');
    noBidsItem.textContent = 'No bids yet.';
    bidsContainer.append(noBidsItem);
  }

  // Place bid form
  const placeBidForm = document.createElement('form');
  placeBidForm.classList.add('d-flex', 'flex-column', 'align-items-start', 'mt-3');
  placeBidForm.id = 'placeBidForm';

  const placeBidInput = document.createElement('input');
  placeBidInput.classList.add('form-control', 'mb-2');
  placeBidInput.type = 'number';
  placeBidInput.placeholder = 'Place your bid';
  placeBidInput.id = 'placeBidInput';
  placeBidInput.required = true;

  const placeBidButton = document.createElement('button');
  placeBidButton.classList.add('btn', 'btn-primary', 'mb-2');
  placeBidButton.type = 'submit';
  placeBidButton.textContent = 'Place Bid';

  // Handle bid submission
  placeBidForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const bidAmount = parseFloat(placeBidInput.value);
    if (!bidAmount || isNaN(bidAmount) || bidAmount <= 0) {
      alert('Please enter a valid bid amount.');
      return;
    }

    try {
      await submitBid(postData.id, bidAmount);
      // Optionally re-fetch and re-render the bids after a successful bid
    } catch (error) {
      console.error('Error placing bid:', error);
      alert(`Failed to place bid: ${error.message}`);
    }
  });

  placeBidForm.append(placeBidInput, placeBidButton);
  footerContainer.append(cardTitle, cardDescription, cardCreated, cardEndsAt, bidsTitle, bidsContainer, placeBidForm);

  return footerContainer;
}
