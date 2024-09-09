export function modalShowHide() {
  const loginModal = document.getElementById('loginModal');
  const registerModal = document.getElementById('registrationModal');

  const openLoginModalButton = document.querySelector('[data-bs-target="#loginModal"]');
  const openRegisterModalButton = document.querySelector('[data-bs-target="#registrationModal"]');

  const closeModalButtons = document.querySelectorAll('.btn-close');

  /* OPEN MODAL */
  openLoginModalButton.addEventListener('click', () => {
    console.log('openLoginModalButton clicked');

    loginModal.classList.add('show');
  });

  openRegisterModalButton.addEventListener('click', () => {
    console.log('openRegisterModalButton modal opened');

    registerModal.classList.add('show');
  });

  /* HIDE MODAL */
  closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      console.log('Modal closed');
      loginModal.classList.remove('show');
      registerModal.classList.remove('show');
    });
  });

  window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
      loginModal.classList.remove('show');
    }
    if (event.target === registerModal) {
      registerModal.classList.remove('show');
    }
  });
}
