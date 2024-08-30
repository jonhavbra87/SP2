export function cardModal() {
  const cardModal = document.getElementById('cardModal');
  const openModalBtn = document.querySelector(`[data-bs-target="#cardModal"]`);
  const closeBtn = document.querySelector('.btn-close');
  console.log(document.querySelector('[data-bs-target="#cardModal"]')); // Dette skal logge knappen hvis den eksisterer

  try {
    // Manuell åpning av modal er ikke nødvendig, men hvis du vil gjøre noe ekstra, legg det her
    openModalBtn.addEventListener('click', () => {
      console.log('openmodalbutton clicked');
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
