// CardContainer function
export function CardContainer() {
  const card = document.createElement('div');
  card.classList.add(
    'card',
    'card-custom',
    'p-0',
    'border',
    'border-2',
    'rounded',
    'cursor-pointer',
    'col-10',
    'col-md-5',
    'col-lg-3',
    'col-xl-3',
    'col-xxl-2',
  );

  return card;
}
