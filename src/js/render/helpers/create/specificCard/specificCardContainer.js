export function specificCardContainer(postData) {
  const card = create.CardContainer(postData);
  card.classList.add('card', 'p-5', 'd-flex');

  return card;
}
