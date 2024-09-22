import { createListing } from '../../fetch/createListing';

/**
 * Handles the submission of the create listing form by gathering form data and sending it to the API.
 *
 * This function prevents the default form submission behavior, collects the input values,
 * creates the listing data object, and calls the `createListing` function to submit the data.
 * If the listing is successfully created, the form is reset and the page is reloaded.
 *
 * @async
 * @function handleCreateListingFormSubmit
 * @param {Event} event - The form submit event.
 * @returns {void}
 * @throws {Error} If the listing creation fails or if the response is not ok.
 *
 * @example
 * document.querySelector('form').addEventListener('submit', handleCreateListingFormSubmit);
 */

export async function handleCreateListingFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const title = event.target.title.value.trim();
  const description = event.target.description.value.trim();
  const mediaUrl = event.target.mediaUrl.value.trim();
  const endsAt = event.target.endsAt.value.trim();

  const listingData = {
    title,
    description,
    media: mediaUrl ? [{ url: mediaUrl, alt: title }] : [],
    endsAt,
  };

  if (listingData) {
    try {
      const response = await createListing(listingData);

      if (!response) {
        console.warn('Response is not ok!');
        throw new Error('Response is not ok!');
      }

      console.log('Listing created:', response);
      form.reset();

      window.location.reload();
    } catch (error) {
      console.error('Error creating listing:', error);
    }
  }
}
