/**
 * Creates and returns a styled `div` element as a specific card container.
 *
 * This function generates a `div` element with various classes for layout and styling, such as centering
 * the card both vertically and horizontally, and applying custom card styling.
 * It is designed for use as a container in card-based layouts.
 *
 * @function specificCardContainer
 * @returns {HTMLDivElement} The created card container element.
 *
 * @example
 * const card = specificCardContainer();
 * document.body.appendChild(card);
 */

export function specificCardContainer() {
  const card = document.createElement('div');
  card.classList.add('card', 'my-auto', 'mx-auto', 'card-custom', 'col-10', 'bg-body');

  return card;
}
