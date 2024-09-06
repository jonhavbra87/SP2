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

  const placeBidForm = document.createElement('form');
  placeBidForm.classList.add('d-flex', 'flex-column', 'align-items-center', 'mt-3');
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

  // Add event listener for form submission
  placeBidForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    const bidAmount = placeBidInput.value; // Get the bid amount from the input

    try {
      // Assuming `postData.id` contains the listing ID
      await placeBid(postData.id, bidAmount);
      alert('Bid placed successfully!');
    } catch (error) {
      console.error('Error placing bid:', error);
      alert(`Failed to place bid: ${error.message}`);
    }
  });

  placeBidForm.append(placeBidInput, placeBidButton);

  footerContainer.append(cardTitle, cardDescription, cardCreated, cardEndsAt, cardCount, placeBidForm);

  return footerContainer;
}
