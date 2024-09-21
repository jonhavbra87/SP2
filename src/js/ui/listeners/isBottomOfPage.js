export function isBottomOfPage() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
}
