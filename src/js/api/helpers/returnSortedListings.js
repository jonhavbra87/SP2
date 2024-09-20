import { sortListings } from '../../ui/helpers/sortListings';

export function returnSortedListings(listings) {
  const sortedListings = sortListings(listings);

  return sortedListings;
}
