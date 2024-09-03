import * as create from '../render/helpers/create/index.js';

export function listingsTemplate(postData) {
  const card = create.CardContainer(postData);
  const cardBody = create.CardBodyContainer(postData);
  const media = create.mediaContainer(postData);
  const footerContainer = create.FooterContainer(postData);

  cardBody.append(media, footerContainer);
  card.append(cardBody);

  return card;
}
