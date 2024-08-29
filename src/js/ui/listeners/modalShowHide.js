export function modalShowHide() {
  const loginModal = document.getElementById('loginModal');
  const registerModal = document.getElementById('registrationModal');
  const openLoginModalButton = document.querySelector('[data-bs-target="#loginModal"]');
  const openRegisterModalButton = document.querySelector('[data-bs-target="#registrationModal"]');
  const closeModalButtons = document.querySelectorAll('.btn-close');
  console.log(closeModalButtons);

  openLoginModalButton.addEventListener('click', () => {
    console.log('openmodalbuttun clicked');

    loginModal.classList.add('show');
  });

  openRegisterModalButton.addEventListener('click', () => {
    console.log('Register modal opened');
    registerModal.classList.add('show');
  });

  //Maybe put this in an own function to save resources.
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
