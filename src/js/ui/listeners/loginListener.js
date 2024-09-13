import { onAuth } from '../events/onAuth.js';
import { hideLoader } from '../helpers/hideLoader.js';
import { showLoader } from '../helpers/showLoader.js';
import { updateNavbarAuthUser } from '../helpers/updateNavbarAuthUser.js';

export function loginListener() {
  document.getElementById('loginModal').addEventListener('submit', async (event) => {
    showLoader();
    await onAuth(event);
    setTimeout(() => {
      updateNavbarAuthUser();
      window.location.reload();
    }, 500);
    hideLoader();
  });
}
