export function modalShowHide() {
  const toggleModalButton = document.querySelector(`[data-bs="modal"]`)

  const openModalButton = document.getElementById(`loginModal`)

  const closeModalButton = document.getElementById(`closeModal`)

  toggleModalButton.addEventListener('click', () => {
    openModalButton.classList.add('show')
  })

  // closeModalButton.addEventListener('click', () => {

  //   closeModalButton.classList.remove('show')

  // });
}
