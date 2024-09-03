export function appendCarouselItems(media) {
  return media.map((item) => {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');

    const carouselImage = document.createElement('img');
    carouselImage.src = item.url;
    carouselImage.classList.add('d-block', 'w-100');
    carouselImage.alt = item.alt || 'Carousel image';

    carouselItem.append(carouselImage);
    return carouselItem;
  });
}
