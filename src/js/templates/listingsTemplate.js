import * as create from '../render/helpers/create/listingsCard/index.js';

/**
 * Creates and returns a card element representing a listing, composed of a media section, footer, and view button.
 *
 * This function uses helper functions to create different parts of the card, including the media,
 * footer, and view button, then appends these elements to the card body. The completed card is returned.
 *
 * @function listingsTemplate
 * @param {Object} postData - The data object containing information about the listing.
 * @returns {HTMLDivElement} The created card element for the listing.
 *
 * @example
 * const listingCard = listingsTemplate(postData);
 * document.body.appendChild(listingCard);
 */

export function listingsTemplate(postData) {
  listingsTemplate.textContent = '';
  const card = create.CardContainer();
  const cardBody = create.bodyContainer(postData);
  const media = create.mediaContainer(postData);
  const footerContainer = create.FooterContainer(postData);
  const viewButtonContainer = create.viewButtonContainer(postData);

  cardBody.append(media, footerContainer, viewButtonContainer);
  card.append(cardBody);

  return card;
}
