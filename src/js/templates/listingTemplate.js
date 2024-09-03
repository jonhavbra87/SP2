import * as createSpecific from '../render/helpers/create/specificCard/index.js';

export function listingTemplate(postData) {
  const card = createSpecific.specificCardContainer(postData);
  const cardBody = createSpecific.specificCardBodyContainer(postData);
  const footer = createSpecific.specificFooterContainer(postData);
  const mediaCarousel = createSpecific.carouselContainer(postData.media);

  cardBody.append(mediaCarousel, footer);
  card.append(cardBody);

  return card;
}
