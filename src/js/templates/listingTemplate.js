import * as createSpecific from '../render/helpers/create/specificCard/index.js';

/**
 * Creates and returns a card element for a specific listing, including the media and footer.
 *
 * This function assembles a card for a specific listing by creating the card container, body,
 * media section, and footer using the helper functions. It then appends the media and footer to the card body.
 *
 * @function listingTemplate
 * @param {Object} postData - The data object containing information about the specific listing.
 * @returns {HTMLDivElement} The created card element for the specific listing.
 *
 * @example
 * const listingCard = listingTemplate(postData);
 * document.body.appendChild(listingCard);
 */

export function listingTemplate(postData) {
  const card = createSpecific.specificCardContainer(postData);
  const cardBody = createSpecific.specificbodyContainer(postData);
  const img = createSpecific.specificMediaContainer(postData);
  const footer = createSpecific.specificFooterContainer(postData);

  cardBody.append(img, footer);
  card.append(cardBody);

  return card;
}
