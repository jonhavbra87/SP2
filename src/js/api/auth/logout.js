import { remove } from '../../storage/index.js';

export function logout() {
  const logOutBtn = document.querySelector('[data-auth="logout"]');

  logOutBtn.addEventListener('click', () => {
    remove('accessToken');
    remove('profile');
  });
}
