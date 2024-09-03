export function carouselItem(media) {
  const carouselItem = document.createElement('div');
  carouselItem.classList.add('carousel-item');
  if (index === 0) {
    carouselItem.classList.add('active');
  }

  const carouselImage = document.createElement('img');
  carouselImage.src = media.url;
  carouselImage.classList.add('d-block', 'w-100');
  carouselImage.alt = media.title;

  carouselItem.append(carouselImage);

  return carouselItem;
}
