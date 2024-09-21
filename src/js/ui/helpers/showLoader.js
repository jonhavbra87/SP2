export function showLoader() {
  const loaderOverlay = document.getElementById('loader-overlay');
  if (loaderOverlay) {
    loaderOverlay.classList.remove('d-none');
    console.log('Loader shown');
  } else {
    console.error('Loader overlay not found.');
  }
}
