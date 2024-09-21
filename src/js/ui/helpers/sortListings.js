export function sortListings(listings) {
  const now = new Date();

  // Split listings into active and expired
  const activeListings = listings.filter((listing) => new Date(listing.endsAt) > now);
  const expiredListings = listings.filter((listing) => new Date(listing.endsAt) <= now);

  // Sort active listings by earliest ending first (ascending)
  activeListings.sort((a, b) => new Date(a.endsAt) - new Date(b.endsAt));

  // Sort expired listings by latest ending first (descending)
  expiredListings.sort((a, b) => new Date(b.endsAt) - new Date(a.endsAt));

  // Combine the sorted arrays: active first, then expired
  return [...activeListings, ...expiredListings];
}
