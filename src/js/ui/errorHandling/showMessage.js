export function showMessage(message, status = false) {
  console.log('Showing message:', message, status);

  const messageBox = document.getElementById('messageBox');
  const messageText = document.getElementById('messageText');
  const closeButton = document.getElementById('closeButton');

  if (!messageBox || !messageText || !closeButton) {
    return;
  }

  messageText.textContent = message;

  if (status) {
    messageBox.className = 'alert alert-success';
  } else {
    messageBox.className = 'alert alert-danger';
  }

  messageBox.classList.remove('d-none');
  messageBox.classList.add('text-center');

  closeButton.addEventListener('click', () => {
    messageBox.classList.add('d-none');
  });
}
