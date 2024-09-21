import { listingsTemplate } from '../../templates/listingsTemplate';
import { searchListings } from '../../utilities/searchListings';

export function initSearchFunction() {
  const formElement = document.getElementById('searchForm');
  const inputElement = document.getElementById('searchInput');
  const listingsContainer = document.getElementById('searchResults');

  if (formElement && inputElement) {
    formElement.addEventListener('submit', async function (event) {
      event.preventDefault(); // Forhindre sideoppdatering

      const query = inputElement.value.trim(); // Hent søkeord fra inputfeltet

      if (query) {
        // Utfør søk i API-et med søkespørringen
        const searchResults = await searchListings(query);

        // Fjern eksisterende innhold fra .listings
        listingsContainer.innerHTML = '';

        // Rendre søkeresultatene
        searchResults.forEach((listing) => {
          const listingCard = listingsTemplate(listing);
          listingsContainer.appendChild(listingCard);
        });
      }
    });
  }
}
