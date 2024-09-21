import { sortFetch } from '../api/fetch/sortFetch.js';
import { listingsTemplate } from '../templates/listingsTemplate.js';
import { hideLoader } from '../ui/helpers/hideLoader.js';
import { showLoader } from '../ui/helpers/showLoader.js';

let page = 1;
let isLoading = false;
let allListings = [];
const ITEMS_PER_PAGE = 12;

export async function listingsRender() {
  if (isLoading) return;
  isLoading = true;
  showLoader();

  const container = document.getElementById('listings');

  try {
    if (allListings.length === 0) {
      // Fetch listings and sort them with sorting function
      allListings = await sortFetch();
      console.log('All listings fetched and sorted: ', allListings);
    }

    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const listingsToRender = allListings.slice(start, end);

    // If there are no listings to render, exit the function
    if (listingsToRender.length === 0) {
      return;
    }

    listingsToRender.forEach((postData) => {
      const cardContent = listingsTemplate(postData);
      container.append(cardContent);
    });

    page++;
    // Implement infinite scroll
    if (isBottomOfPage()) {
      listingsRender();
    }
  } catch (error) {
    console.error('Failed to render listings:', error);
  } finally {
    hideLoader();
    isLoading = false;
  }
}

function isBottomOfPage() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
}

// Add event listener for scroll
window.addEventListener('scroll', () => {
  if (isBottomOfPage() && !isLoading) {
    listingsRender();
  }
});

// import { sortFetch } from '../api/fetch/sortFetch.js';
// import { listingsTemplate } from '../templates/listingsTemplate.js';
// import { hideLoader } from '../ui/helpers/hideLoader.js';
// import { showLoader } from '../ui/helpers/showLoader.js';

// let page = 1;

// let isLoading = false;

// export async function listingsRender() {
//   if (isLoading) return;

//   isLoading = true;

//   showLoader();

//   const container = document.getElementById('listings');

//   try {
//     const listings = await sortFetch();
//     console.log('Listings fetched: ', listings);

//     hideLoader();

//     listings.forEach((postData) => {
//       const cardContent = listingsTemplate(postData);

//       container.append(cardContent);
//     });

//     page++;
//   } catch (error) {
//     console.error('Failed to render listings:', error);
//   } finally {
//     hideLoader();
//     isLoading = false;
//   }
// }
