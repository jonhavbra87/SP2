// bodyContainer function
export function bodyContainer() {
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body', 'd-flex', 'flex-column', 'justify-content-between', 'p-1', 'm-0');

  return cardBody;
}