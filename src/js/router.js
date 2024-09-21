/* ------ ROUTER ------ */

import { logout } from './api/auth/logout.js';
import * as listeners from './ui/listeners/index.js';
import * as render from './render/index.js';
import { navigateToProfileListener } from './render/helpers/create/profile/navigateToProfile.js';
import { checkIfUserLoggedIn } from './ui/listeners/checkIfUserLoggedIn.js';
import { renderCarousel } from './render/renderCarousel.js';
import { setupResponsiveImages } from './ui/listeners/renderResponsiveImage.js';
import { initializeCarousel } from './utilities/initializeCarousel.js';
import { initSearchFunction } from './ui/listeners/initSearchFunction.js';

export default async function router() {
  const path = location.pathname;

  const urlParams = new URLSearchParams(window.location.search);

  const id = urlParams.get('id');

  switch (path) {
    case '/':
      console.log('router is working on /');
      logout();
      checkIfUserLoggedIn();
      listeners.navbarShowHide();
      listeners.modalShowHide();
      listeners.loginListener();
      listeners.registerListener();
      render.listingsRender();
      initSearchFunction();
      navigateToProfileListener();
      listeners.openCreateListingModal();
      await renderCarousel();
      setupResponsiveImages();

      initializeCarousel();
      break;

    case '/listings':
    case '/listings/':
      console.log('Router is working on /listings/ path');
      if (id) {
        console.log(`router is working on /listings/ with id ${id}`);
        checkIfUserLoggedIn();
        logout();
        listeners.navbarShowHide();
        listeners.modalShowHide();
        render.listingRender(id);
        navigateToProfileListener();
        listeners.openCreateListingModal();
        setupResponsiveImages();
      } else {
        console.error('No listing ID provided.');
      }
      break;

    case '/profile':
    case '/profile/':
      checkIfUserLoggedIn();
      logout();
      render.renderProfile();
      listeners.navbarShowHide();
      listeners.openAvatarModal();
      listeners.openCreateListingModal();
      setupResponsiveImages();
      break;

    default:
      console.log('404 error. Page not found.');
  }
}
