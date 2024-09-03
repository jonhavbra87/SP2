export async function searchListings() {
  const formElement = document.getElementById('searchForm');

  const inputElement = document.getElementById('searchInput');

  if (formElement && inputElement) {
    formElement.addEventListener('submit', function (event) {
      event.preventDefault();

      const value = inputElement.value.toLowerCase();

      const containers = document.getElementById('listings');

      containers.forEach(function (container) {
        const text = container.textContent.toLowerCase();
        container.style.display = text.includes(value) ? '' : 'none';
      });
    });
  }
}
