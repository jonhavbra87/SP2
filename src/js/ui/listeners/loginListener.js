import { onAuth } from '../events/onAuth.js';
import { updateNavbarAuthUser } from '../helpers/updateNavbarAuthUser.js';

export function loginListener() {
  document.getElementById('loginModal').addEventListener('submit', async (event) => {
    try {
      await onAuth(event);

      const token = localStorage.getItem('token');
      if (token) {
        updateNavbarAuthUser();

        window.location.href = '/';
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  });
}
