import { searchFetch } from '../api/fetch/searchFetch';
import { listingsTemplate } from '../templates/listingsTemplate';

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

export async function searchResults() {
  const searchQuery = getQueryParam('search'); // Henter søkespørringen fra URL-en
  const searchResultsContainer = document.getElementById('listingsContainer');
  searchResultsContainer.innerHTML = ''; // Tømmer tidligere resultater

  if (!searchQuery) {
    return; // Returner hvis det ikke er noen søkespørring
  }

  try {
    const searchResults = await searchFetch(searchQuery); // Utfør API-forespørsel basert på søkespørringen
    const loader = document.getElementById('loader');
    loader.style.display = 'none'; // Skjuler loaderen etter at API-svaret er mottatt

    // Rendrer hvert søkeresultat med listingTemplate
    searchResults.forEach((listing) => {
      const listingCard = listingsTemplate(listing);
      searchResultsContainer.append(listingCard);
    });
  } catch (error) {
    console.error(error);
  }
}
