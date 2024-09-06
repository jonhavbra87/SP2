/* ------ ROUTER ------ */

import { logout } from './api/auth/logout.js';
import * as listeners from './ui/listeners/index.js';
import * as templates from './templates/index.js';
import { listingRender } from './templates/listingRender.js';
import { searchListings } from './utilities/searchListings.js';
import { load, save } from './storage/index.js';
import { navigateToProfileListener } from './render/helpers/create/profile/navigateToProfile.js';
import { renderProfile } from './templates/renderProfile.js';
import { placeBid } from './api/listings/placeBid.js';

export default function router() {
  const path = window.location.pathname;

  switch (path) {
    case '/':
      console.log('router is working on /');
      logout();
      listeners.navbarShowHide();
      listeners.modalShowHide();
      listeners.loginListener();
      listeners.registerListener();
      templates.listingsRender();
      searchListings();
      navigateToProfileListener();
      break;
    case '/listings':
    case '/listings/':
      console.log('router is working on /listings/');
      listeners.navbarShowHide();
      listeners.modalShowHide();
      listingRender();
      navigateToProfileListener();
      placeBid();
      break;
    case '/profile':
    case '/profile/':
      logout();
      renderProfile();

      listeners.navbarShowHide();
      // templates.listingsRender();
      // searchListings();
      break;

    default:
      console.log('404 error. Page not found.');
  }
}
