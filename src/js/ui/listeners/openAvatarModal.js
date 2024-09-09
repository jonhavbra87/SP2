import { submitAvatarUrl } from './submitAvatarUrl';

export function openAvatarModal() {
  const avatarModal = document.getElementById('avatarModal');

  const closeModalButton = document.querySelector('.btn-close');

  closeModalButton.addEventListener('click', () => {
    console.log('Modal closed');
    avatarModal.classList.remove('show');
    document.getElementById('avatarUrl').value = '';
  });

  window.addEventListener('click', (event) => {
    if (event.target === avatarModal) {
      avatarModal.classList.remove('show');
      document.getElementById('avatarUrl').value = '';
    }
  });
}
