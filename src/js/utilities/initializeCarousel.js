/**
 * Initializes a touch-enabled image carousel with next/previous buttons, keyboard navigation, and swipe functionality.
 *
 * This function sets up a carousel that supports multiple forms of navigation, including touch gestures,
 * keyboard arrow keys, and clickable navigation dots. It allows users to swipe horizontally on mobile devices
 * to navigate between slides and includes smooth transitions for better UX.
 *
 * @function initializeCarousel
 * @returns {void}
 *
 * @example
 * initializeCarousel();
 */

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
    let touchStartY = 0;
    let touchEndY = 0;
    let isSwiping = false;

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

    const nextSlide = function () {
      curSlide = curSlide === maxSlide - 1 ? 0 : curSlide + 1;
      goToSlide(curSlide);
      activateDot(curSlide);
    };

    const prevSlide = function () {
      curSlide = curSlide === 0 ? maxSlide - 1 : curSlide - 1;
      goToSlide(curSlide);
      activateDot(curSlide);
    };

    // Enhanced touch handling functions
    const handleTouchStart = function (event) {
      touchStartX = event.changedTouches[0].screenX;
      touchStartY = event.changedTouches[0].screenY;
      isSwiping = false;
    };

    const handleTouchMove = function (event) {
      touchEndX = event.changedTouches[0].screenX;
      touchEndY = event.changedTouches[0].screenY;

      // Determine swipe direction (horizontal or vertical)
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      // If the swipe is more horizontal than vertical
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        isSwiping = true;
        event.preventDefault(); // Prevent vertical scrolling
      }
    };

    const handleTouchEnd = function () {
      if (!isSwiping) return;

      const deltaX = touchEndX - touchStartX;

      // Check swipe direction
      if (deltaX < 0) {
        nextSlide(); // Swipe left
      } else if (deltaX > 0) {
        prevSlide(); // Swipe right
      }
    };

    const init = function () {
      goToSlide(0);
      createDots();
      activateDot(0);

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

      // Add touch event listeners to handle swipe navigation
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
