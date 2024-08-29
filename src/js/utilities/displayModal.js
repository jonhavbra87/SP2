export function displayModal() {
  const modal = document.getElementById('loginModal');
  const openModalBtn = document.getElementById('openModal');
  const closeBtn = document.getElementsByClassName('close')[0];

  if (modal && openModalBtn && closeBtn) {
    openModalBtn.addEventListener('click', function () {
      modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  } else {
    console.error('Modal or related elements not found in the DOM.');
  }
}
