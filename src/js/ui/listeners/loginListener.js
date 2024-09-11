import { onAuth } from '../events/onAuth.js';
import { hideLoader } from '../helpers/hideLoader.js';
import { showLoader } from '../helpers/showLoader.js';

export function loginListener() {
  document.getElementById('loginModal').addEventListener('submit', async (event) => {
    showLoader();
    await onAuth(event);
    hideLoader();
    window.location.reload();
  });
}
