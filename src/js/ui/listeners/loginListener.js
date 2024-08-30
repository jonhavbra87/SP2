import { onAuth } from '../events/onAuth.js';

export function loginListener() {
  document.getElementById('loginForm').addEventListener('submit', async (event) => {
    onAuth(event);

    const loader = document.getElementById('loader');

    loader.classList.remove('d-none');
  });
}
