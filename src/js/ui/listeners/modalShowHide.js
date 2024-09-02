export function modalShowHide() {
  const loginModal = document.getElementById('loginModal');
  const registerModal = document.getElementById('registrationModal');
  const cardModal = document.getElementById('cardModal');

  const openLoginModalButton = document.querySelector('[data-bs-target="#loginModal"]');
  const openRegisterModalButton = document.querySelector('[data-bs-target="#registrationModal"]');
  const openCardModalButtons = document.querySelectorAll('[data-bs-target="#cardModal"]');

  const closeModalButtons = document.querySelectorAll('.btn-close');

  openLoginModalButton.addEventListener('click', () => {
    console.log('openmodalbuttun clicked');

    loginModal.classList.add('show');
  });

  openRegisterModalButton.addEventListener('click', () => {
    console.log('Register modal opened');
    registerModal.classList.add('show');
  });

  /*   openCardModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      console.log('Card modal opened');
      cardModal.classList.add('show');
    });
  }); */

  document.getElementById('listings').addEventListener('click', (event) => {
    if (event.target && event.target.getAttribute('data-bs-target') === '#cardModal') {
      console.log('openmodalbutton clicked');
      console.log(cardModal);
      cardModal.classList.add('show');

      // Her kan du legge til ekstra funksjonalitet om nødvendig
    }
  });

  //Maybe put this in an own function to save resources.
  closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      console.log('Modal closed');
      loginModal.classList.remove('show');
      registerModal.classList.remove('show');
      cardModal.classList.remove('show');
    });
  });

  window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
      loginModal.classList.remove('show');
    }
    if (event.target === registerModal) {
      registerModal.classList.remove('show');
    }
    if (event.target === cardModal) {
      cardModal.classList.remove('show');
    }
  });
}
