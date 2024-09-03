/* ------ ROUTER ------ */

import { logout } from './api/auth/logout.js';
import * as listeners from './ui/listeners/index.js';
import * as templates from './templates/index.js';
import { listingRender } from './templates/listingRender.js';
import { searchListings } from './utilities/searchListings.js';

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
      break;
    case '/listings':
    case '/listings/':
      console.log('router is working on /listings/');
      listeners.navbarShowHide();
      listeners.modalShowHide();
      listingRender();
      break;
    case '/profile/':
      break;

    default:
      console.log('404 error. Page not found.');
  }
}
