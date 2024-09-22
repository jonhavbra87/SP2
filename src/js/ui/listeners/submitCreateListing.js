import { handleCreateListingFormSubmit } from '../../api/helpers/create/createListingHandler';
import { reloadPage } from '../../api/helpers/reloadPage';
import { setMaxDate } from '../../utilities/setMaxDate';
import { setMinDate } from '../../utilities/setMinDate';

/**
 * Handles the submission of the "Create Listing" form, setting date constraints and submitting the listing.
 *
 * This function sets up event listeners on the "Create Listing" form. It ensures the user cannot create a listing
 * with an invalid end date by setting minimum and maximum date constraints. Upon form submission, it calls
 * `handleCreateListingFormSubmit` to process the listing and reloads the page if successful.
 *
 * @function submitCreateListing
 * @returns {void}
 *
 * @example
 * submitCreateListing();
 */

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
    event.preventDefault(); // Forhindre standard skjema-innsendelse

    try {
      handleCreateListingFormSubmit(event);
      reloadPage();
    } catch (error) {
      console.error('Failed to create listing:', error);
      alert('An error occurred while creating the listing. Please try again.');
    }
  });
}
