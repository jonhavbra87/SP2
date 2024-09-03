export function specificCardBodyContainer(postData) {
  const cardBody = create.CardBodyContainer(postData);
  cardBody.classList.add('card-body', 'd-flex', 'flex-column', 'justify-content-between', 'bg-light');

  return cardBody;
}
