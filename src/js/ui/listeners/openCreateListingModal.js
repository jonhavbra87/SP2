export function openCreateListingModal() {
  const createListingModal = document.getElementById('createListingModal');
  const closeModalButton = createListingModal.querySelector('.btn-close');
  const listingForm = document.getElementById('createListingForm');

  closeModalButton.addEventListener('click', () => {
    console.log('Modal closed');
    createListingModal.classList.remove('show');
    listingForm.reset();
  });

  window.addEventListener('click', (event) => {
    if (event.target === createListingModal) {
      createListingModal.classList.remove('show');
      listingForm.reset();
    }
  });
}
