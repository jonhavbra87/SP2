import { login } from '../../api/auth/login.js';
import { register } from '../../api/auth/register.js';
import { validateEmail } from '../../api/auth/validateEmail.js';
import { validatePassword } from '../../api/auth/validatePassword.js';
import { handleApiError } from '../../api/helpers/handleApiError.js';

/**
 * Handles user authentication (login or registration) based on the form submission.
 *
 * This function validates the email and password, then triggers either login or registration
 * depending on the submitter's action. If registration is chosen, it also logs the user in
 * after successful registration. Errors during authentication are handled and displayed.
 *
 * @async
 * @function onAuth
 * @param {Event} event - The form submission event.
 * @returns {void}
 * @throws {Error} If there is an issue with login or registration.
 *
 * @example
 * document.querySelector('form').addEventListener('submit', onAuth);
 */

export async function onAuth(event) {
  event.preventDefault();

  let name;
  const email = event.target.email.value;
  const password = event.target.password.value;

  if (!validateEmail(email)) {
    alert('Please enter a valid @stud.noroff.no email.');
    return;
  }

  if (!validatePassword(password)) {
    alert('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.');
    return;
  }

  try {
    if (event.submitter.dataset.auth === 'login') {
      await login(email, password);
    }
    if (event.submitter.dataset.auth === 'register') {
      name = event.target.username.value;
      if (!name) {
        alert('Please enter a username.');
        return;
      }
      await register(name, email, password);
      await login(email, password); //This line automatically login after registration!
    }
  } catch (error) {
    console.error('Authentication error:', error);
    handleApiError(error.status);
  }
}
