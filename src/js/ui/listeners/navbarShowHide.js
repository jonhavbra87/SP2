/**
 * Toggles the visibility of the navbar content when the toggle button is clicked.
 *
 * This function listens for a click event on the navbar toggle button and toggles the `show` class
 * on the navbar content, updating the `aria-expanded` attribute to reflect the expanded state of the navbar.
 *
 * @function navbarShowHide
 * @returns {void}
 *
 * @example
 * navbarShowHide();
 */

export function navbarShowHide() {
  const toggleButton = document.querySelector(`[data-bs-toggle="collapse"]`);
  const navbarContent = document.getElementById('navbarSupportedContent');
  toggleButton.addEventListener('click', () => {
    const navBarIsExpanded = toggleButton.getAttribute(`aria-expanded`) === `true`;
    toggleButton.setAttribute(`aria-expanded`, !navBarIsExpanded);

    navbarContent.classList.toggle('show');
  });
}
