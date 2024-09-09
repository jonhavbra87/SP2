export function openAvatarModal() {
  const avatarModal = document.getElementById('avatarModal');

  const openAvatarModalButton = document.querySelector('[data-bs-target="#avatarModal"]');

  const closeModalButton = document.querySelector('.btn-close');

  // Åpne avatar-modal
  openAvatarModalButton.addEventListener('click', () => {
    console.log('openAvatarModalButton clicked');
    avatarModal.classList.add('show');
  });

  //Maybe put this in an own function to save resources.

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
