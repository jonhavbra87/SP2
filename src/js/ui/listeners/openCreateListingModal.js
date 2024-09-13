import { submitCreateListing } from './submitCreateListeing';

export function openCreateListingModal() {
  const createListingModal = document.getElementById('createListingModal');
  const createListingButton = document.getElementById('newListingLink');
  console.log('newListingLink:', createListingButton);

  if (!createListingModal || !createListingButton) {
    console.error('Modal or button not found');
    return;
  }

  createListingButton.addEventListener('click', () => {
    createListingModal.classList.add('show');
    createListingModal.style.display = 'block';
    createListingModal.setAttribute('aria-modal', 'true');
    createListingModal.setAttribute('role', 'dialog');

    submitCreateListing();
    // window.location.reload();
  });

  const closeModalButton = createListingModal.querySelector('.btn-close');
  const listingForm = document.getElementById('createListingForm');

  function closeModal() {
    createListingModal.classList.remove('show');
    createListingModal.style.display = 'none';
    createListingModal.removeAttribute('aria-modal');
    createListingModal.removeAttribute('role');
    listingForm.reset();
  }

  closeModalButton.addEventListener('click', () => {
    console.log('Modal closed');
    closeModal();
  });

  window.addEventListener('click', (event) => {
    if (event.target === createListingModal) {
      closeModal();
    }
  });
}
