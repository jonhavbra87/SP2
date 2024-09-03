export function modalShowHide(postData, modalId) {
  const loginModal = document.getElementById('loginModal');
  const registerModal = document.getElementById('registrationModal');

  const openLoginModalButton = document.querySelector('[data-bs-target="#loginModal"]');
  const openRegisterModalButton = document.querySelector('[data-bs-target="#registrationModal"]');

  const closeModalButtons = document.querySelectorAll('.btn-close');

  openLoginModalButton.addEventListener('click', () => {
    console.log('openLoginModalButton clicked');

    loginModal.classList.add('show');
  });

  openRegisterModalButton.addEventListener('click', () => {
    console.log('openRegisterModalButton modal opened');

    registerModal.classList.add('show');
  });

  /* CARD MODAL */

  // document.getElementById('listings').addEventListener('click', (event) => {
  //   if (event.target && event.target.getAttribute('data-bs-target') === `#modal-${postData.id}`) {
  //     const cardModal = document.getElementById(modalId);

  //       if (!cardModal) {
  //         console.error(`Modal with ID ${modalId} not found`);
  //         return;
  //       }

  //       console.log('openCardModal clicked');
  //       console.log(postData.id);
  //       cardModal.classList.add('show');
  //       cardModal.style.display = 'block';
  //       cardModal.setAttribute('aria-modal', 'true');
  //       cardModal.setAttribute('role', 'dialog');
  //     }
  //   });

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
    // if (event.target === cardModal) {
    //   cardModal.classList.remove('show');
    //   cardModal.style.display = 'none';
    //   cardModal.removeAttribute('aria-modal');
    //   cardModal.removeAttribute('role');
    // }
  });
}
