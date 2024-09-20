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
    img.src = '/assets/logo-small.png';
    img.alt = 'Mobile version of logo';
  } else {
    img.src = '/assets/logo.png';
    img.alt = 'Desktop version of logo';
  }

  container.appendChild(img);
}
