export async function createListing(listingData) {
  const url = `${API_BASE}/auction/listings`;
  return await apiFetch(url, 'POST', listingData);
}
