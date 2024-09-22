/**
 * Manages the display and hiding of login and registration modals.
 *
 * This function opens the login or registration modals when the corresponding buttons are clicked and
 * hides the modals when the close button is clicked or the user clicks outside the modal. It adjusts
 * the page scroll and prevents overflow when the modals are visible.
 *
 * @function modalShowHide
 * @returns {void}
 *
 * @example
 * modalShowHide();
 */

export function modalShowHide() {
  const loginModal = document.getElementById('loginModal');
  const registerModal = document.getElementById('registrationModal');

  const openLoginModalButton = document.querySelector('[data-bs-target="#loginModal"]');
  const openRegisterModalButton = document.querySelector('[data-bs-target="#registrationModal"]');

  const closeModalButtons = document.querySelectorAll('.btn-close');

  /* OPEN MODAL */
  openLoginModalButton.addEventListener('click', () => {
    loginModal.style.top = `${window.scrollY}px`;
    loginModal.classList.add('show');
    document.body.classList.add('overflow-hidden');
  });

  openRegisterModalButton.addEventListener('click', () => {
    registerModal.classList.add('show');
    document.body.classList.add('overflow-hidden');
  });

  /* HIDE MODAL */
  closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      loginModal.classList.remove('show');
      registerModal.classList.remove('show');
      document.body.classList.remove('overflow-hidden');
    });
  });

  window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
      loginModal.classList.remove('show');
      document.body.classList.remove('overflow-hidden');
    }
    if (event.target === registerModal) {
      registerModal.classList.remove('show');
      document.body.classList.remove('overflow-hidden');
    }
  });
}
