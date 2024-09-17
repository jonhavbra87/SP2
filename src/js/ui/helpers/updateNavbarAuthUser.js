export function updateNavbarAuthUser() {
  const loginButton = document.getElementById('openLoginModal');
  const registerButton = document.getElementById('openRegisterModal');
  const homeLink = document.getElementById('homeLink');
  const profileLink = document.getElementById('profileLink');
  const listingsLink = document.getElementById('listingsLink');
  const newListingLink = document.getElementById('newListingLink');
  const logoutButton = document.getElementById('[data-auth="logout"]');

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
