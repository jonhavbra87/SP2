export function modalShowHide() {
  const modal = document.getElementById(`loginModal`)
  const openModalButton = document.querySelector(
    `[data-bs-target="#loginModal"]`,
  )
  const closeModalButton = document.getElementById(`closeModal`)

  openModalButton.addEventListener('click', () => {
    console.log('openmodalbuttun clicked')

    modal.classList.add('show')
  })

  closeModalButton.addEventListener('click', () => {
    console.log('close modal pressed')

    modal.classList.remove('show')
  })

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.classList.remove('show')
    }
  })
}
