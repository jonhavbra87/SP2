export function openAvatarModal() {
  const avatarModal = document.getElementById('avatarModal');

  const closeModalButton = document.querySelector('.btn-close');
  const avatarForm = document.getElementById('avatarForm');
  function closeModal() {
    avatarModal.classList.remove('show');
    avatarModal.removeAttribute('aria-modal');
    avatarModal.removeAttribute('role');
    avatarForm.reset();
    document.body.classList.remove('overflow-hidden');
  }

  closeModalButton.addEventListener('click', () => {
    closeModal();
  });

  window.addEventListener('click', (event) => {
    if (event.target === avatarModal) {
      closeModal();
    }
  });
}
