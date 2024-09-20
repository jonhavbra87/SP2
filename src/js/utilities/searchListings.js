// import { API_AUCTIONS, API_BASE } from "../api/constants";

// export async function searchListings() {
//   const formElement = document.getElementById('searchForm');
//   const inputElement = document.getElementById('searchInput');

//   const url = `${API_BASE}${API_AUCTIONS}/listings/search?q=${encodeURIComponent(query)}?page`;

// }

// export async function searchListings() {
//   const formElement = document.getElementById('searchForm');
//   const inputElement = document.getElementById('searchInput');

//   // I wanted to have search-function with key up, but then I had disabled the submit event with preventDefault.

//   if (formElement && inputElement) {
//     formElement.addEventListener('submit', function (event) {
//       event.preventDefault();
//     });

//     inputElement.addEventListener('keyup', function () {
//       const value = inputElement.value.toLowerCase();

//       const listingsContainer = document.getElementById('listings');
//       const listingsCards = listingsContainer.querySelectorAll('.card');

//       listingsCards.forEach(function (item) {
//         const text = item.textContent.toLowerCase();

//         if (value === '') {
//           item.style.display = '';
//         } else if (text.includes(value)) {
//           item.style.display = '';
//         } else {
//           item.style.display = 'none';
//         }
//       });
//     });
//   }
// }
