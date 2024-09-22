import { submitCreateListing } from './submitCreateListing';

/**
 * Opens the "Create Listing" modal and sets up event listeners to close it.
 *
 * This function manages the opening of the "Create Listing" modal, positioning it correctly based on the current scroll position.
 * It also listens for the close button and outside click events to close the modal, resetting the listing form when the modal is closed.
 *
 * @function openCreateListingModal
 * @returns {void}
 *
 * @example
 * openCreateListingModal();
 */

export function openCreateListingModal() {
  const createListingModal = document.getElementById('createListingModal');
  const createListingButton = document.getElementById('newListingLink');

  if (!createListingModal || !createListingButton) {
    console.error('Modal or button not found');
    return;
  }

  createListingButton.addEventListener('click', () => {
    createListingModal.classList.add('show');
    document.body.classList.add('overflow-hidden');
    createListingModal.setAttribute('aria-modal', 'true');
    createListingModal.setAttribute('role', 'dialog');
    submitCreateListing();
  });

  const closeModalButton = createListingModal.querySelector('.btn-close');
  const listingForm = document.getElementById('createListingForm');

  function closeModal() {
    createListingModal.classList.remove('show');
    createListingModal.removeAttribute('aria-modal');
    createListingModal.removeAttribute('role');
    listingForm.reset();
    document.body.classList.remove('overflow-hidden');
  }

  closeModalButton.addEventListener('click', () => {
    closeModal();
  });

  window.addEventListener('click', (event) => {
    if (event.target === createListingModal) {
      closeModal();
    }
  });
}
