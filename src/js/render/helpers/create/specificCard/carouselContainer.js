export function carouselContainer(media) {
  const carousel = document.createElement('div');
  carousel.classList.add('carousel', 'slide');
  carousel.id = 'carouselIndicators'; // Legg til ID her

  const carouselIndicators = document.createElement('div');
  carouselIndicators.classList.add('carousel-indicators');

  const carouselInner = document.createElement('div');
  carouselInner.classList.add('carousel-inner');

  // Dynamisk opprett indikatorer og carousel items
  media.forEach((item, index) => {
    // Indikator
    const indicatorButton = document.createElement('button');
    indicatorButton.type = 'button';
    indicatorButton.dataset.bsTarget = '#carouselIndicators';
    indicatorButton.dataset.bsSlideTo = index;
    indicatorButton.ariaLabel = `Slide ${index + 1}`;
    if (index === 0) {
      indicatorButton.classList.add('active');
      indicatorButton.ariaCurrent = 'true';
    }
    carouselIndicators.append(indicatorButton);

    // Carousel Item
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (index === 0) {
      carouselItem.classList.add('active');
    }

    const carouselImage = document.createElement('img');
    carouselImage.src = item.url;
    carouselImage.classList.add('d-block', 'w-100');
    carouselImage.alt = item.alt || 'Carousel image';

    carouselItem.append(carouselImage);
    carouselInner.append(carouselItem);
  });

  // Opprett forrige- og neste-knapper
  const buttonPrev = document.createElement('button');
  buttonPrev.type = 'button';
  buttonPrev.dataset.bsTarget = '#carouselIndicators';
  buttonPrev.dataset.bsSlide = 'prev';
  buttonPrev.classList.add('carousel-control-prev');

  const spanPrev1 = document.createElement('span');
  spanPrev1.classList.add('carousel-control-prev-icon');
  spanPrev1.ariaHidden = 'true';

  const spanPrev2 = document.createElement('span');
  spanPrev2.classList.add('visually-hidden');
  spanPrev2.textContent = 'Previous';

  buttonPrev.append(spanPrev1, spanPrev2);

  const buttonNext = document.createElement('button');
  buttonNext.type = 'button';
  buttonNext.dataset.bsTarget = '#carouselIndicators';
  buttonNext.dataset.bsSlide = 'next';
  buttonNext.classList.add('carousel-control-next');

  const spanNext1 = document.createElement('span');
  spanNext1.classList.add('carousel-control-next-icon');
  spanNext1.ariaHidden = 'true';

  const spanNext2 = document.createElement('span');
  spanNext2.classList.add('visually-hidden');
  spanNext2.textContent = 'Next';

  buttonNext.append(spanNext1, spanNext2);

  // Sett sammen hele carousel
  carousel.append(carouselIndicators, carouselInner, buttonPrev, buttonNext);

  return carousel;
}
