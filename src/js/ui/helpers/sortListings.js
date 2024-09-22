/**
 * Sorts a list of auction listings into active and expired groups, with active listings shown first.
 *
 * Active listings are sorted by the earliest ending date (ascending), and expired listings
 * are sorted by the latest ending date (descending). The function returns a combined array
 * with active listings followed by expired listings.
 *
 * @function sortListings
 * @param {Array<Object>} listings - The array of listing objects to be sorted.
 * @returns {Array<Object>} A sorted array with active listings first and expired listings last.
 *
 * @example
 * const sortedListings = sortListings(listings);
 */

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
