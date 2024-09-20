import { logo, logoSmall } from '../../render/helpers/images';

export function setupResponsiveImages() {
  renderResponsiveImage();

  window.addEventListener('resize', renderResponsiveImage);
}

function renderResponsiveImage() {
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
