import { submitAvatarUrl } from './submitAvatarUrl';

export function openAvatarModal() {
  const avatarModal = document.getElementById('avatarModal');

  const openAvatarModalButton = document.querySelector('[data-bs-target="#avatarModal"]');

  const closeModalButton = document.querySelector('.btn-close');

  // Open avatar-modal
  openAvatarModalButton.addEventListener('click', () => {
    console.log('Avatar modal opened');
    avatarModal.classList.add('show');
    submitAvatarUrl();
  });

  closeModalButton.addEventListener('click', () => {
    console.log('Modal closed');
    avatarModal.classList.remove('show');
  });

  window.addEventListener('click', (event) => {
    if (event.target === avatarModal) {
      avatarModal.classList.remove('show');
    }
  });
}
