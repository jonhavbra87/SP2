export function scrollListener() {
  // Add event listener for scroll
  window.addEventListener('scroll', () => {
    if (isBottomOfPage() && !isLoading) {
      listingsRender();
    }
  });
}
