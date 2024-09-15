export function initializeCarousel() {
  const slider = function () {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.getElementById('slider__btn--left');
    const btnRight = document.getElementById('slider__btn--right');
    const dotContainer = document.querySelector('.dots');

    let curSlide = 0;
    const maxSlide = slides.length;

    let touchStartX = 0;
    let touchEndX = 0;

    // Functions
    const createDots = function () {
      dotContainer.innerHTML = '';
      slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}" title="Go to slide ${i + 1}"></button>`);
      });
    };

    const activateDot = function (slide) {
      document.querySelectorAll('.dots__dot').forEach((dot) => dot.classList.remove('dots__dot--active'));

      document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
    };

    const goToSlide = function (slide) {
      slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
    };

    // Next slide
    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
      goToSlide(curSlide);
      activateDot(curSlide);
    };

    // Previous slide
    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
      activateDot(curSlide);
    };

    // Touch handling functions
    const handleTouchStart = function (event) {
      touchStartX = event.changedTouches[0].screenX;
    };

    const handleTouchMove = function (event) {
      touchEndX = event.changedTouches[0].screenX;
    };

    const handleTouchEnd = function () {
      if (touchEndX < touchStartX - 50) {
        nextSlide(); // Swipe left
      } else if (touchEndX > touchStartX + 50) {
        prevSlide(); // Swipe right
      }
    };

    const init = function () {
      goToSlide(0);
      createDots();
      activateDot(0);

      // Event handlers for buttons
      if (btnRight && btnLeft) {
        btnRight.addEventListener('click', nextSlide);
        btnLeft.addEventListener('click', prevSlide);
      }

      // Keyboard navigation
      document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
      });

      // Dots navigation
      dotContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('dots__dot')) {
          const { slide } = e.target.dataset;
          goToSlide(slide);
          activateDot(slide);
        }
      });

      // Touch events for swipe navigation
      slides.forEach((slide) => {
        slide.addEventListener('touchstart', handleTouchStart);
        slide.addEventListener('touchmove', handleTouchMove);
        slide.addEventListener('touchend', handleTouchEnd);
      });
    };

    init();
  };
  slider();
}
