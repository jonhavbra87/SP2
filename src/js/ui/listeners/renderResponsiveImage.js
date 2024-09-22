import { logo, logoSmall } from '../../render/helpers/images';

/**
 * Renders a responsive logo image based on the screen width.
 *
 * This function selects the logo container and clears its content, then checks the screen width
 * to determine which version of the logo to display (small logo for narrow screens, full logo for larger screens).
 * The logo is then inserted into the container.
 *
 * @function renderResponsiveImage
 * @returns {void}
 *
 * @example
 * renderResponsiveImage();
 */

export function renderResponsiveImage() {
  const container = document.getElementById('logo-container');

  container.innerHTML = '';

  const screenWidth = window.innerWidth;

  const img = document.createElement('img');
  img.classList.add('img-fluid', 'object-fit-cover', 'h-100');

  if (screenWidth < 362) {
    img.src = logoSmall;
    img.alt = 'Mobile version of logo';
  } else {
    img.src = logo;
    img.alt = 'Desktop version of logo';
  }

  container.appendChild(img);
}
