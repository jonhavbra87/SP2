export function updateNavbarAuthUser() {
  const loginButton = document.getElementById('openLoginModal');
  const registerButton = document.getElementById('openRegisterModal');
  const profile = document.getElementById('profileLink');
  const listings = document.getElementById('listingsLink');
  const newListing = document.getElementById('newListingLink');
  const logoutButton = document.querySelector('[data-auth="logout"]');

  // Hide buttons for login/register
  if (loginButton) loginButton.style.display = 'none';
  if (registerButton) registerButton.style.display = 'none';

  // Show navbar as auth user
  if (profile) profile.style.display = 'inline-block';
  if (listings) listings.style.display = 'inline-block';
  if (newListing) newListing.style.display = 'inline-block';
  if (logoutButton) logoutButton.style.display = 'inline-block';
}
