export function carousel(media) {
  const carousel = document.createElement('div');
  carousel.classList.add('carousel', 'slide');
  carousel.id = 'carouselIndicators';

  const carouselIndicators = document.createElement('div');
  carouselIndicators.classList.add('carousel-indicators');

  const carouselInner = document.createElement('div');
  carouselInner.classList.add('carousel-inner');

  let curSlide = 0;
  const maxSlide = media.length;

  // Dynamisk opprett indikatorer og carousel items
  media.forEach((item, index) => {
    // Indikatorer (dots)
    const indicatorButton = document.createElement('button');
    indicatorButton.type = 'button';
    indicatorButton.dataset.bsSlideTo = index;
    indicatorButton.ariaLabel = `Slide ${index + 1}`;
    indicatorButton.classList.add('dots__dot');
    if (index === 0) {
      indicatorButton.classList.add('dots__dot--active');
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

  const updateCarousel = () => {
    const slides = carouselInner.children;
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
    }
    slides[curSlide].classList.add('active');
    activateDot(curSlide);
  };

  const activateDot = (slide) => {
    document.querySelectorAll('.dots__dot').forEach((dot) => dot.classList.remove('dots__dot--active'));

    document.querySelector(`.dots__dot[data-bs-slide-to="${slide}"]`).classList.add('dots__dot--active');
  };

  const nextSlide = () => {
    curSlide = curSlide === maxSlide - 1 ? 0 : curSlide + 1;
    updateCarousel();
  };

  const prevSlide = () => {
    curSlide = curSlide === 0 ? maxSlide - 1 : curSlide - 1;
    updateCarousel();
  };

  const goToSlide = (slide) => {
    curSlide = slide;
    updateCarousel();
  };

  // Event listeners for buttons
  document.querySelector('.carousel-control-next').addEventListener('click', nextSlide);
  document.querySelector('.carousel-control-prev').addEventListener('click', prevSlide);

  // Event listeners for dots
  carouselIndicators.addEventListener('click', (e) => {
    if (e.target.classList.contains('dots__dot')) {
      const { bsSlideTo } = e.target.dataset;
      goToSlide(parseInt(bsSlideTo));
    }
  });

  // Assemble the carousel
  carousel.append(carouselIndicators, carouselInner);

  return carousel;
}
