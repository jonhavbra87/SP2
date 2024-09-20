export function searchFunction() {
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchBar');

  searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const searchQuery = searchInput.value;

    if (searchQuery) {
      const url = `/listings/index.html?search=${encodeURIComponent(searchQuery)}`;
      window.location.href = url;
    }
  });

  return searchForm;
}
