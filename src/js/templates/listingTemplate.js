import * as createSpecific from '../render/helpers/create/specificCard/index.js';

export function listingTemplate(postData) {
  const card = createSpecific.specificCardContainer(postData);
  const cardBody = createSpecific.specificCardBodyContainer(postData);
  const img = createSpecific.specificMediaContainer(postData);
  const footer = createSpecific.specificFooterContainer(postData);

  cardBody.append(img, footer);
  card.append(cardBody);

  return card;
}
