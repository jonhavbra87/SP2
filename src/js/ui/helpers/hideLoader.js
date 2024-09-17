export function hideLoader() {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = 'none';
    console.log('Loader hidden');
  } else {
    console.error('Loader not found.');
  }
}
