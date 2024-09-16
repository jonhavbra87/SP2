export function modalShowHide() {
  const loginModal = document.getElementById('loginModal');
  const registerModal = document.getElementById('registrationModal');
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  const openLoginModalButton = document.querySelector('[data-bs-target="#loginModal"]');
  const openRegisterModalButton = document.querySelector('[data-bs-target="#registrationModal"]');

  const closeModalButtons = document.querySelectorAll('.btn-close');

  loginModal.style.top = `${scrollY}px`;
  registerModal.style.top = `${scrollY}px`;

  /* OPEN MODAL */
  openLoginModalButton.addEventListener('click', () => {
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
      console.log('Modal closed');
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
