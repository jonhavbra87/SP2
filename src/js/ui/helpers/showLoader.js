export function showLoader() {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = 'block';
    console.log('Loader shown');
  } else {
    console.error('Loader not found.');
  }
}
