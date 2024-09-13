export function showLoader() {
  const loader = document.getElementById('loader');
  loader.textContent = '';
  if (loader) {
    loader.classList.remove('d-none');
  }
}
