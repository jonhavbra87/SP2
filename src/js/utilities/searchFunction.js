import { listingsTemplate } from '../templates/listingsTemplate';

export function searchFunction() {
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchBar');

  searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const searchQuery = searchInput.value.trim();

    if (searchQuery) {
      const searchResults = await searchFetch(searchQuery);
      const listingsContainer = document.querySelector('.listings');
    }
  });

  // Tøm tidligere innhold
  listingsContainer.innerHTML = '';

  // Render søkeresultatene på samme side
  searchResults.forEach((listing) => {
    const listingCard = listingsTemplate(listing); // Lag kort for hvert søkeresultat
    listingsContainer.appendChild(listingCard);
  });
}
