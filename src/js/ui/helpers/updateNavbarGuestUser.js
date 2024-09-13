export function updateNavbarGuestUser() {
  const loginButton = document.getElementById('openLoginModal');
  const registerButton = document.getElementById('openRegisterModal');
  const profileLink = document.getElementById('profileLink');
  const logoutButton = document.querySelector('[data-auth="logout"]');
  const listings = document.getElementById('listingsLink');
  const newListing = document.getElementById('newListingLink');

  // Show login/register buttons
  if (loginButton) loginButton.style.display = 'inline-block';
  if (registerButton) registerButton.style.display = 'inline-block';

  // Hide auth navbar
  if (profileLink) profileLink.style.display = 'none';
  if (logoutButton) logoutButton.style.display = 'none';
  if (listings) listings.style.display = 'none';
  if (newListing) newListing.style.display = 'none';
}
