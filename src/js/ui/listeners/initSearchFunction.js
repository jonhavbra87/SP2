import { listingsTemplate } from '../../templates/listingsTemplate';
import { searchListings } from '../../utilities/searchListings';

/**
 * Initializes the search functionality by adding an event listener to the search form.
 *
 * This function listens for the form submission event, retrieves the user's search query, performs a search using
 * `searchListings`, and then renders the search results using the `listingsTemplate`. The existing search results
 * container is cleared before new results are displayed.
 *
 * @function initSearchFunction
 * @returns {void}
 *
 * @example
 * initSearchFunction();
 */

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
