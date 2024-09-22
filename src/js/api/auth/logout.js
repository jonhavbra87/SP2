import { remove } from '../../storage/remove.js';
import { showMessage } from '../../ui/errorHandling/showMessage.js';

/**
 * Logs out the user by removing their authentication data and redirects to the homepage.
 *
 * This function listens for a click event on a button with the attribute `data-auth="logout"`.
 * When clicked, it removes the stored token and profile, then navigates the user to the home page.
 * If an error occurs during logout, an error message is shown.
 *
 * @async
 * @function logout
 * @returns {void}
 * @throws {Error} If an error occurs during the removal of authentication data.
 *
 * @example
 * // Call logout function to attach the event listener to the logout button
 * logout();
 */

export async function logout() {
  const logOutBtn = document.querySelector('[data-auth="logout"]');

  logOutBtn.addEventListener('click', () => {
    try {
      remove('token');
      remove('profile');

      window.location.href = '/';
    } catch (error) {
      console.error('Error during logout:', error);
      showMessage(error.message);
    }
  });
}
