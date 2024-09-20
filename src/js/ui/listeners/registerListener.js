import { onAuth } from '../events/onAuth.js';
import { hideLoader } from '../helpers/hideLoader.js';
import { showLoader } from '../helpers/showLoader.js';

export function registerListener() {
  document.getElementById('registrationModal').addEventListener('submit', async (event) => {
    showLoader();
    await onAuth(event);
    setTimeout(() => {
      window.location.href = '/';
      hideLoader();
      window.body.classList.remove('overflow-hidden');
    }, 500);
  });
}
