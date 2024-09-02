/* export function cardModal() {
  const cardModal = document.getElementById('cardModal');
  const openModalBtn = document.querySelector(`[data-bs-target="#cardModal"]`); //endre til id el noe annet
  const closeBtn = document.querySelector('.btn-close');
  //console.log(document.querySelector('[data-bs-target="#cardModal"]'));

  try {
    document.getElementById('listings').addEventListener('click', (event) => {
      if (event.target && event.target.getAttribute('data-bs-target') === '#cardModal') {
        console.log('openmodalbutton clicked');
        console.log(cardModal);
        openModalBtn.classList.add('show');

        // Her kan du legge til ekstra funksjonalitet om nødvendig
      }
    });

    // Pass på at du har valgt det riktige elementet, og at du legger til event listener på riktig måte
    closeBtn.addEventListener('click', () => {
      console.log('close button clicked');
    });

    window.addEventListener('click', (event) => {
      if (event.target == cardModal) {
        console.log('Modal backdrop clicked');
      }
    });
  } catch (error) {
    console.error(error.message);
  }
}
 */
