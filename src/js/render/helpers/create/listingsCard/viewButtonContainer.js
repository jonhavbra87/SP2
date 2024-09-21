/**
 * Creates and returns a button element that navigates to the listing details page when clicked.
 *
 * This function generates a styled "View" button that redirects the user to the listing page
 * based on the provided `postData` ID when clicked.
 *
 * @function viewButtonContainer
 * @param {Object} postData - The data object containing the listing information.
 * @param {string} postData.id - The unique ID of the listing to view.
 * @returns {HTMLButtonElement} The created button element.
 *
 * @example
 * const viewButton = viewButtonContainer(postData);
 * document.body.appendChild(viewButton);
 */

export function viewButtonContainer(postData) {
  const viewButtonContainer = document.createElement('button');

  viewButtonContainer.classList.add('btn', 'btn-cb-primary', 'text-uppercase', 'fw-bold', 'mb-2', 'make-offer-btn', 'w-50', 'mx-auto');
  viewButtonContainer.textContent = 'View';

  viewButtonContainer.onclick = () => {
    window.location.href = `/listings/?id=${postData.id}`;
  };

  return viewButtonContainer;
}
