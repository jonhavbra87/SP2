export function showLoader() {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.remove('d-none');
  }
}
