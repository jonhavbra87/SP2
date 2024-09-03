export function specificCardBodyContainer() {
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body', 'd-flex', 'flex-row', 'justify-content-between', 'card-background');

  return cardBody;
}
