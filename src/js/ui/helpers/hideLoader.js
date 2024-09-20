export function hideLoader() {
  const loaderOverlay = document.getElementById('loader-overlay');
  if (loaderOverlay) {
    loaderOverlay.classList.add('d-none');
    console.log('Loader hidden');
  } else {
    console.error('Loader overlay not found.');
  }
}
