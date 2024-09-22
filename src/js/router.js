/* ------------------------ ROUTER ------------------------ */

import { logout } from './api/auth/logout.js';
import * as listeners from './ui/listeners/index.js';
import * as render from './render/index.js';
import { showMessage } from './ui/errorHandling/showMessage.js';

export default async function router() {
  const path = location.pathname;

  const urlParams = new URLSearchParams(window.location.search);

  const id = urlParams.get('id');

  switch (path) {
    case '/':
      listeners.checkIfUserLoggedIn();
      listeners.navbarShowHide();
      listeners.modalShowHide();
      listeners.loginListener();
      listeners.registerListener();
      listeners.navigateToProfileListener();
      listeners.setupResponsiveImages();
      listeners.scrollListener();
      listeners.initSearchFunction();
      listeners.openCreateListingModal();
      render.listingsRender();
      await render.renderCarousel();
      logout();
      break;

    case '/listings':
    case '/listings/':
      console.log('Router is working on /listings/ path');
      if (id) {
        console.log(`router is working on /listings/ with id ${id}`);
        listeners.checkIfUserLoggedIn();
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
