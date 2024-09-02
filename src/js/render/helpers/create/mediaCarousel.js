export function mediaCarousel(postData) {
  // Opprett carousel container
  const carouselContainer = document.createElement('div');
  carouselContainer.id = 'carouselExampleIndicators';
  carouselContainer.classList.add('carousel', 'slide');
  carouselContainer.setAttribute('data-bs-ride', 'carousel');

  // Opprett indikatorene
  const indicators = document.createElement('div');
  indicators.classList.add('carousel-indicators');

  // Opprett carousel-indre (hovedinnhold)
  const carouselInner = document.createElement('div');
  carouselInner.classList.add('carousel-inner');

  postData.media.forEach((mediaItem, index) => {
    // Opprett indikator-knapp
    const indicatorButton = document.createElement('button');
    indicatorButton.type = 'button';
    indicatorButton.setAttribute('data-bs-target', '#carouselExampleIndicators');
    indicatorButton.setAttribute('data-bs-slide-to', index);
    indicatorButton.setAttribute('aria-label', `Slide ${index + 1}`);
    if (index === 0) {
      indicatorButton.classList.add('active');
      indicatorButton.setAttribute('aria-current', 'true');
    }
    indicators.appendChild(indicatorButton);

    // Opprett carousel element
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (index === 0) {
      carouselItem.classList.add('active');
    }

    const img = document.createElement('img');
    img.classList.add('d-block', 'w-100');
    img.src = mediaItem.url || './src/assets/logo_full_size.png';
    img.alt = mediaItem.alt || `Image from ${postData.title}`;

    carouselItem.appendChild(img);
    carouselInner.appendChild(carouselItem);
  });

  // Legg til forrige- og neste-knapper
  const prevButton = document.createElement('button');
  prevButton.classList.add('carousel-control-prev');
  prevButton.type = 'button';
  prevButton.setAttribute('data-bs-target', '#carouselExampleIndicators');
  prevButton.setAttribute('data-bs-slide', 'prev');
  prevButton.innerHTML = `
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    `;

  const nextButton = document.createElement('button');
  nextButton.classList.add('carousel-control-next');
  nextButton.type = 'button';
  nextButton.setAttribute('data-bs-target', '#carouselExampleIndicators');
  nextButton.setAttribute('data-bs-slide', 'next');
  nextButton.innerHTML = `
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    `;

  // Sett sammen hele carousel
  carouselContainer.append(indicators);
  carouselContainer.append(carouselInner);
  carouselContainer.append(prevButton);
  carouselContainer.append(nextButton);

  return carouselContainer;
}
