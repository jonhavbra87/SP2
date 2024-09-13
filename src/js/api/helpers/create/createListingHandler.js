import { createListing } from '../../fetch/createListing';

export async function handleCreateListingFormSubmit(event) {
  event.preventDefault();

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

  console.log('Listing data:', listingData);

  if (listingData) {
    try {
      const response = await createListing(listingData);

      if (!response) {
        console.warn('Response is not ok!');
        throw new Error('Response is not ok!');
      }
      console.log('Listing created:', response);
      window.location.reload();
    } catch (error) {
      console.error('Error creating listing:', error);
      //   alert('Failed to create listing. Please check your input and try again.');
    }
  }
}
