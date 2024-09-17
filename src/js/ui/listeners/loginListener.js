import { onAuth } from '../events/onAuth.js';
import { updateNavbarAuthUser } from '../helpers/updateNavbarAuthUser.js';

export function loginListener() {
  document.getElementById('loginModal').addEventListener('submit', async (event) => {
    await onAuth(event);
    setTimeout(() => {
      updateNavbarAuthUser();
      window.location.reload();
      window.body.classList.remove('overflow-hidden');
    }, 500);
  });
}
