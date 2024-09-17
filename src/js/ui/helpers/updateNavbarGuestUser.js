export function updateNavbarGuestUser() {
  const loginButton = document.getElementById('openLoginModal');
  const registerButton = document.getElementById('openRegisterModal');
  const homeLink = document.getElementById('homeLink');
  const profileLink = document.getElementById('profileLink');
  const listingsLink = document.getElementById('listingsLink');
  const newListingLink = document.getElementById('newListingLink');
  const logoutButton = document.getElementById('logoutButton');

  // Show login/register buttons
  if (loginButton) loginButton.classList.remove('d-none');
  if (registerButton) registerButton.classList.remove('d-none');

  // Hide logged-in navbar items
  if (homeLink) homeLink.classList.add('d-none');
  if (profileLink) profileLink.classList.add('d-none');
  if (listingsLink) listingsLink.classList.add('d-none');
  if (newListingLink) newListingLink.classList.add('d-none');
  if (logoutButton) logoutButton.classList.add('d-none');
}
