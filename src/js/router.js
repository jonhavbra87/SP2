/* ------ ROUTER ------ */

import { logout } from './api/auth/logout.js';
import * as listeners from './ui/listeners/index.js';
import * as templates from './templates/index.js';
import { listingRender } from './templates/listingRender.js';
import { searchListings } from './utilities/searchListings.js';
// import { load, save } from './storage/index.js';
import { navigateToProfileListener } from './render/helpers/create/profile/navigateToProfile.js';
import { renderProfile } from './templates/renderProfile.js';

export default function router() {
  const path = location.pathname;
  console.log('current path', path);

  const urlParams = new URLSearchParams(window.location.search); // For handling query parameters
  const id = urlParams.get('id'); // For example: to get 'id=12345' from '/listings/?id=12345'

  switch (path) {
    case '/':
      console.log('router is working on /');
      logout();
      listeners.navbarShowHide();
      listeners.modalShowHide();
      listeners.loginListener();
      listeners.registerListener();
      // templates.listingsRender();
      templates.limitListingsRender();
      searchListings();
      navigateToProfileListener();
      break;

    case '/listings':
    case '/listings/':
      console.log('Router is working on /listings/ path');
      if (id) {
        console.log(`router is working on /listings/ with id ${id}`);
        listeners.navbarShowHide();
        listeners.modalShowHide();
        listingRender(id);
        navigateToProfileListener();
      } else {
        console.error('No listing ID provided.');
      }
      break;

    case '/profile':
    case '/profile/':
      logout();
      renderProfile();
      listeners.navbarShowHide();
      listeners.openAvatarModal();
      // listeners.submitAvatarUrl();
      break;

    default:
      console.log('404 error. Page not found.');
  }
}
