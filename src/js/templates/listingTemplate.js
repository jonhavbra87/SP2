import * as helpers from '../render/helpers/create/index.js';

export function listingTemplate(postData) {
  const card = helpers.createCardContainer(postData);
  const cardBody = helpers.createCardBodyContainer(postData);
  const media = helpers.createMediaContainer(postData);
  const footerContainer = helpers.createFooterContainer(postData);

  cardBody.append(media, footerContainer);
  card.append(cardBody);

  return card;
}
