/**
 * Opens the avatar modal and sets up event listeners to close it.
 *
 * This function adds a click event listener to the modal close button and the window to detect clicks outside the modal.
 * When the modal is closed, the `avatarUrl` input field is cleared and the page overflow is reset.
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

  closeModalButton.addEventListener('click', () => {
    avatarModal.classList.remove('show');
    document.body.classList.remove('overflow-hidden');
    document.getElementById('avatarUrl').value = '';
  });

  window.addEventListener('click', (event) => {
    if (event.target === avatarModal) {
      avatarModal.classList.remove('show');
      document.body.classList.remove('overflow-hidden');
      document.getElementById('avatarUrl').value = '';
    }
  });
}
