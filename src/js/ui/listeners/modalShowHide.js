export function modalShowHide() {
  const loginModal = document.getElementById('loginModal')
  const registerModal = document.getElementById('registrationModal')
  const openLoginModalButton = document.querySelector(
    '[data-bs-target="#loginModal"]',
  )
  const openRegisterModalButton = document.querySelector(
    '[data-bs-target="#registrationModal"]',
  )
  const closeModalButtons = document.querySelectorAll('.btn-close')

  openLoginModalButton.addEventListener('click', () => {
    console.log('openmodalbuttun clicked')

    loginModal.classList.add('show')
  })

  // Åpne register modal
  openRegisterModalButton.addEventListener('click', () => {
    console.log('Register modal opened')
    registerModal.classList.add('show')
  })

  // Lukk modaler med close-knapper
  closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      console.log('Modal closed')
      loginModal.classList.remove('show')
      registerModal.classList.remove('show')
    })
  })

  window.addEventListener('click', function (event) {
    if (event.target === loginModal) {
      loginModal.classList.remove('show')
    }
    if (event.target === registerModal) {
      registerModal.classList.remove('show')
    }
  })
}
