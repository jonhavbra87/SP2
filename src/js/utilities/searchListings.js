import { API_AUCTIONS, API_BASE } from '../api/constants';
import { doFetch } from '../api/helpers/doFetch';
import { listingsTemplate } from '../templates/listingsTemplate';
// Bruk en hjelper for å sende API-forespørsler

/**
 * Funksjon for å søke etter lister via API-et
 * @param {string} query - Søkeordet som brukeren angir
 * @returns {Array} - En array med søkeresultater
 */
export async function searchListings(query, limit = 100, page = 1) {
  const url = `${API_BASE}${API_AUCTIONS}/listings/search?q=${encodeURIComponent(query)}&limit=${limit}&page=${page}`;

  try {
    const response = await doFetch(url); // Bruk fetch-hjelper for å sende API-forespørsel
    return response; // Returner resultatene fra API-et
  } catch (error) {
    console.error('Error fetching search results:', error);
    return []; // Returner en tom array ved feil
  }
}

/**
 * Initialiserer søkefunksjonen
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
          const listingCard = createListingCard(listing);
          listingsContainer.appendChild(listingCard);
        });
      }
    });
  }
}

/**
 * Funksjon for å lage kort-elementer for hvert søkeresultat
 * @param {Object} listing - En enkelt listeobjekt fra API-et
 * @returns {HTMLElement} - Et kort som representerer søkelisten
 */
function createListingCard(listing) {
  const listingCard = listingsTemplate(listing);
  return listingCard;
}

// const formElement = document.getElementById('searchForm');
// const inputElement = document.getElementById('searchInput');
// if (formElement && inputElement) {
//   formElement.addEventListener('submit', function (event) {
//     event.preventDefault();
//   });
// inputElement.addEventListener('keyup', function () {
//   const value = inputElement.value.toLowerCase();

//   const listingsContainer = document.getElementById('listings');
//   const listingsCards = listingsContainer.querySelectorAll('.card');

//   listingsCards.forEach(function (item) {
//     const text = item.textContent.toLowerCase();

//     if (value === '') {
//       item.style.display = '';
//     } else if (text.includes(value)) {
//       item.style.display = '';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// });
