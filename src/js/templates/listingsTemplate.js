import * as create from '../render/helpers/create/listingsCard/index.js';

export function listingsTemplate(postData) {
  const card = create.CardContainer();
  const cardBody = create.bodyContainer(postData);
  const media = create.mediaContainer(postData);
  const footerContainer = create.FooterContainer(postData);
  const viewButtonContainer = create.viewButtonContainer(postData);

  cardBody.append(media, footerContainer, viewButtonContainer);
  card.append(cardBody);

  return card;
}
