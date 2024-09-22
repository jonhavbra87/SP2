import { renderResponsiveImage } from './renderResponsiveImage';

/**
 * Sets up responsive image rendering and adjusts the image when the window is resized.
 *
 * This function initially calls `renderResponsiveImage` to display the appropriate image based on the screen size.
 * It also listens for the window's `resize` event and re-renders the image accordingly.
 *
 * @function setupResponsiveImages
 * @returns {void}
 *
 * @example
 * setupResponsiveImages();
 */

export function setupResponsiveImages() {
  renderResponsiveImage();

  window.addEventListener('resize', renderResponsiveImage);
}
