/**
 * Displays a message in a message box, setting the status as success or error.
 *
 * This function updates the message box with the provided message and applies a success or error
 * style based on the `status` parameter. The message box is shown and can be closed by clicking
 * the close button.
 *
 * @function showMessage
 * @param {string} message - The message to be displayed in the message box.
 * @param {boolean} [status=false] - The status of the message; `true` for success, `false` for error.
 * @returns {void}
 *
 * @example
 * showMessage('Profile updated successfully', true);
 */

export function showMessage(message, status = false) {
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
