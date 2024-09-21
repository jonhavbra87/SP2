/**
 * Creates and returns a div element styled as a card container.
 *
 * This function generates a `div` element with various utility classes for layout, padding, borders, and responsiveness.
 * It is designed to act as a customizable card component with pointer cursor styling.
 *
 * @function CardContainer
 * @returns {HTMLDivElement} The created div element with the appropriate classes.
 *
 * @example
 * const card = CardContainer();
 * document.body.appendChild(card);
 */

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
