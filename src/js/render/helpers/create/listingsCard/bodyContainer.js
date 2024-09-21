/**
 * Creates and returns a div element styled as a card body container.
 *
 * This function generates a `div` element with the classes `card-body`, `d-flex`, `flex-column`,
 * `justify-content-between`, `p-1`, and `m-0`. The element is designed to be used as the body of a card layout.
 *
 * @function bodyContainer
 * @returns {HTMLDivElement} The created div element with the appropriate classes.
 *
 * @example
 * const cardBody = bodyContainer();
 * document.body.appendChild(cardBody);
 */

export function bodyContainer() {
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body', 'd-flex', 'flex-column', 'justify-content-between', 'p-1', 'm-0');

  return cardBody;
}
