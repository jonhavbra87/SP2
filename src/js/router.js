/* ------------------------ ROUTER ------------------------ */

import { logout } from './api/auth/logout.js';
import * as listeners from './ui/listeners/index.js';
import * as render from './render/index.js';
import * as utilities from './utilities/index.js';
import { showMessage } from './ui/errorHandling/showMessage.js';

/**
 * Handles client-side routing for the application by listening to the current URL path and executing the corresponding logic.
 *
 * This function determines the current page based on the URL path, initializes event listeners and renders content
 * accordingly. It supports routes for the homepage, listings pages, and profile pages, setting up features like modals,
 * carousels, search functionality, and user authentication. If a page is not found, a 404 error message is shown.
 *
 * @async
 * @function router
 * @returns {void}
 *
 * @example
 * router();
 */

export default async function router() {
  const path = location.pathname;

  const urlParams = new URLSearchParams(window.location.search);

  const id = urlParams.get('id');

  switch (path) {
    case '/':
      listeners.checkIfUserLoggedIn();
      listeners.initSearchFunction();
      listeners.loginListener();
      listeners.modalShowHide();
      listeners.navbarShowHide();
      listeners.navigateToProfileListener();
      listeners.openCreateListingModal();
      listeners.registerListener();
      listeners.scrollListener();
      listeners.setupResponsiveImages();
      render.listingsRender();
      await render.renderCarousel();
      utilities.initializeCarousel();
      logout();
      break;

    case '/listings':
    case '/listings/':
      if (id) {
        listeners.checkIfUserLoggedIn();
        listeners.loginListener();
        listeners.registerListener();
        listeners.navbarShowHide();
        listeners.modalShowHide();
        listeners.navigateToProfileListener();
        listeners.openCreateListingModal();
        listeners.setupResponsiveImages();
        render.listingRender(id);
        logout();
      } else {
        console.error('No listing ID provided.');
      }
      break;

    case '/profile':
    case '/profile/':
      listeners.checkIfUserLoggedIn();
      listeners.navbarShowHide();
      listeners.openAvatarModal();
      listeners.openCreateListingModal();
      listeners.setupResponsiveImages();
      render.renderProfile();
      logout();
      break;

    default:
      console.warn('404 error. Page not found.');
      showMessage('404 error. Page not found.');
  }
}
