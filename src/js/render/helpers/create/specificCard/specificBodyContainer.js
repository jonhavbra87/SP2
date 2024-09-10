export function specificbodyContainer() {
  const cardBody = document.createElement('div');

  cardBody.classList.add('card-body', 'd-flex', 'flex-column', 'flex-lg-row', 'justify-content-between', 'align-items-center');

  return cardBody;
}
