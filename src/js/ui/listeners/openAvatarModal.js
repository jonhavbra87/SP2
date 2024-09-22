/**
 * Opens and manages the behavior of the avatar modal, including closing functionality.
 *
 * This function adds event listeners to handle closing the avatar modal when the close button is clicked or
 * when the user clicks outside the modal. The modal's attributes are reset upon closing, and the avatar form is cleared.
 *
 * @function openAvatarModal
 * @returns {void}
 *
 * @example
 * openAvatarModal();
 */

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
