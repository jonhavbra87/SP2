import { onAuth } from '../events/onAuth.js';

export function registerListener() {
  document.getElementById('registrationModal').addEventListener('submit', async (event) => {
    onAuth(event);

    const loader = document.getElementById('loader');

    loader.classList.remove('d-none');
  });
}
