import { onAuth } from '../events/onAuth.js';

const loader = document.getElementById('loader');

export function loginListener() {
  document.getElementById('loginModal').addEventListener('submit', async (event) => {
    onAuth(event);
    loader.classList.remove('d-none');
    loader.innerHTML = '';
  });
}
