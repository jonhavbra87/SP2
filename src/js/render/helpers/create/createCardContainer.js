export function createCardContainer() {
  const card = document.createElement('div');
  card.classList.add('card', 'pb-2', 'border', 'border-2', 'rounded', 'cursor-pointer', 'col-lg-3');

  return card;
}
