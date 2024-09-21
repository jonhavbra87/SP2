import { handleCreateListingFormSubmit } from '../../api/helpers/create/createListingHandler';
import { setMaxDate } from '../../utilities/setMaxDate';
import { setMinDate } from '../../utilities/setMinDate';

export function submitCreateListing() {
  const form = document.getElementById('createListingForm');

  if (!form) {
    console.error('Form not found');
    return;
  }
  // Listener so user can't create a listing that ends before the current time
  const dateInput = document.getElementById('listingEndsAt');
  if (dateInput) {
    // Sett minimums- og maksimumsdato
    setMinDate(dateInput);
    setMaxDate(dateInput);
  }
  form.addEventListener('submit', (event) => {
    handleCreateListingFormSubmit(event);
  });
}
