export function showMessage(message, status = false, timeout = 5000) {
  console.log('message:', message);

  const messageBox = document.getElementById('messageBox');
  if (!messageBox) {
    return;
  }

  if (status) {
    messageBox.className = 'alert alert-success';
  } else {
    messageBox.className = 'alert alert-danger';
  }

  messageBox.textContent = message;

  messageBox.classList.remove('d-none');
  messageBox.classList.add('text-center', 'mx-auto');

  // if (timeout) {
  //   setTimeout(() => {
  //     messageBox.classList.add('d-none');
  //   }, timeout);
  // }
}
