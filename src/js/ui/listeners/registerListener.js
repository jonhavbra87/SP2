import { onAuth } from '../events/onAuth.js';
import { hideLoader } from '../helpers/hideLoader.js';
import { showLoader } from '../helpers/showLoader.js';

/**
 * Adds an event listener to the registration form, handling user registration and redirecting upon success.
 *
 * This function listens for the form submission inside the registration modal. It shows a loader during the
 * registration process, triggers the `onAuth` function for authentication, and redirects the user to the home
 * page after successful registration.
 *
 * @function registerListener
 * @returns {void}
 *
 * @example
 * registerListener();
 */

export function registerListener() {
  document.getElementById('registrationModal').addEventListener('submit', async (event) => {
    showLoader();
    await onAuth(event);
    setTimeout(() => {
      window.location.href = '/';
      hideLoader();
      document.body.classList.remove('overflow-hidden');
    }, 500);
  });
}
