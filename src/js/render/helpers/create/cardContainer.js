export function CardContainer() {
  const card = document.createElement('div');
  card.classList.add('card', 'p-0', 'border', 'border-2', 'rounded', 'cursor-pointer', 'col-10', 'col-md-5', 'col-lg-3');

  return card;
}
