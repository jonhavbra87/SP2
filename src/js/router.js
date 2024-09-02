/* ------ ROUTER ------ */
// import { setAuthListener } from './ui/listeners/auth.js';
import { logout } from './api/auth/logout.js';
import * as listeners from './ui/listeners/index.js';
import * as templates from './templates/index.js';
import { listingAppend } from './templates/listingAppend.js';

export default function router() {
  const path = window.location.pathname;

  switch (path) {
    case '/':
      console.log('router is working');
      logout();
      listeners.navbarShowHide();
      listeners.modalShowHide();
      listeners.loginListener();
      listeners.registerListener();
      templates.listingsRender();
      break;
    case '/listings/':
      console.log('router is working');
      listeners.navbarShowHide();
      listeners.modalShowHide();
      listingAppend();
      break;
    case '/profile/':
      break;
    case '/profile/login/':
      break;
    case '/profile/register/':
      break;
    case '/profile/edit/':
      break;
    case '/post/create/':
      break;
    case '/post/edit/':
      break;
    case '/post/delete/':
      break;
    case '/posts/':
      break;

    default:
      console.log('404 error. Page not found.');
  }
}
