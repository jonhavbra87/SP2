import { submitCreateListing } from './submitCreateListeing';

export function openCreateListingModal() {
  const createListingModal = document.getElementById('createListingModal');
  const createListingButton = document.getElementById('newListingLink');

  const scrollY = window.scrollY || document.documentElement.scrollTop;

  if (!createListingModal || !createListingButton) {
    console.error('Modal or button not found');
    return;
  }

  createListingModal.style.top = `${scrollY}px`;
  createListingButton.style.top = `${scrollY}px`;

  createListingButton.addEventListener('click', () => {
    createListingModal.style.top = `${window.scrollY}px`;
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
    console.log('Modal closed');
    closeModal();
  });

  window.addEventListener('click', (event) => {
    if (event.target === createListingModal) {
      closeModal();
    }
  });
}
