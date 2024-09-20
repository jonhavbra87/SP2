import { listingsRender } from '../../render/listingsRender';
import { searchResults } from '../../render/searchResults';

function isSearchActive() {
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get('search');
  return !!searchQuery; // Returnerer true hvis searchQuery finnes, ellers false
}

export function initPage() {
  if (isSearchActive()) {
    searchResults();
  } else {
    listingsRender();
  }
}
