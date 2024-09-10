export function hideLoader() {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('d-none');
  }
}
