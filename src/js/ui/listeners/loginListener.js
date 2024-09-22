import { onAuth } from '../events/onAuth.js';
import { updateNavbarAuthUser } from '../helpers/updateNavbarAuthUser.js';

/**
 * Adds an event listener to the login form for handling user authentication.
 *
 * This function listens for the form submission inside the login modal. On submission, it triggers the `onAuth`
 * function to handle the authentication process. If the login is successful, the navbar is updated to reflect the
 * user's logged-in status, and the user is redirected to the home page.
 *
 * @function loginListener
 * @returns {void}
 *
 * @example
 * loginListener();
 */

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
