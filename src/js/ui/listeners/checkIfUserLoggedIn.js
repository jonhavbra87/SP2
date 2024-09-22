import { load } from '../../storage/load.js';
import { updateNavbarAuthUser } from '../helpers/updateNavbarAuthUser';
import { updateNavbarGuestUser } from '../helpers/updateNavbarGuestUser';

/**
 * Checks if the user is logged in by verifying the presence of a token in localStorage.
 *
 * This function checks for a valid authentication token. If the token exists, it updates the navbar
 * for authenticated users by calling `updateNavbarAuthUser`. If no token is found, it updates the navbar
 * for guest users by calling `updateNavbarGuestUser`.
 *
 * @function checkIfUserLoggedIn
 * @returns {void}
 *
 * @example
 * checkIfUserLoggedIn();
 */

export function checkIfUserLoggedIn() {
  const token = load('token');
  if (token) {
    updateNavbarAuthUser();
  } else {
    updateNavbarGuestUser();
  }
}
