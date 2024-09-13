import { remove } from '../../storage/index.js';
import { hideLoader } from '../../ui/helpers/hideLoader.js';
import { showLoader } from '../../ui/helpers/showLoader.js';

export async function logout() {
  const logOutBtn = document.querySelector('[data-auth="logout"]');

  logOutBtn.addEventListener('click', () => {
    try {
      remove('token');
      remove('profile');

      window.location.href = '/';
    } catch (error) {
      console.error('Error during logout:', error);
      // alert('Logout failed. Please try again.');
    }
  });
}
