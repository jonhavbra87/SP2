/**
 * Updates the navbar for authenticated users by showing or hiding specific elements.
 *
 * This function hides the login and register buttons and displays navbar elements
 * for authenticated users, such as links to home, profile, listings, new listing, and the logout button.
 *
 * @function updateNavbarAuthUser
 * @returns {void}
 *
 * @example
 * updateNavbarAuthUser();
 */

export function updateNavbarAuthUser() {
  const loginButton = document.getElementById('openLoginModal');
  const registerButton = document.getElementById('openRegisterModal');
  const homeLink = document.getElementById('homeLink');
  const profileLink = document.getElementById('profileLink');
  const listingsLink = document.getElementById('listingsLink');
  const newListingLink = document.getElementById('newListingLink');
  const logoutButton = document.getElementById('logoutButton');

  // Hide login/register buttons
  if (loginButton) loginButton.classList.add('d-none');
  if (registerButton) registerButton.classList.add('d-none');

  // Show logged-in navbar items
  if (homeLink) homeLink.classList.remove('d-none');
  if (profileLink) profileLink.classList.remove('d-none');
  if (listingsLink) listingsLink.classList.remove('d-none');
  if (newListingLink) newListingLink.classList.remove('d-none');
  if (logoutButton) logoutButton.classList.remove('d-none');
}
