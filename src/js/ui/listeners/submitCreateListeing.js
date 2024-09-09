import { handleCreateListingFormSubmit } from '../../api/helpers/create/createListingHandler';

export function submitCreateListing() {
  const form = document.getElementById('createListingForm');

  if (!form) {
    console.error('Form not found');
    return;
  }

  form.addEventListener('submit', (event) => {
    handleCreateListingFormSubmit(event);
  });
}
