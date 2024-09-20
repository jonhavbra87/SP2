import { login } from '../../api/auth/login.js';
import { register } from '../../api/auth/register.js';
import { validateEmail } from '../../api/auth/validateEmail.js';
import { handleApiError } from '../../api/helpers/handleApiError.js';

export async function onAuth(event) {
  event.preventDefault();

  let name;
  const email = event.target.email.value;
  const password = event.target.password.value;

  if (!email) {
    validateEmail(email);
    handleApiError('Email is not valid');
    return;
  }

  try {
    if (event.submitter.dataset.auth === 'login') {
      await login(email, password);
    }
    if (event.submitter.dataset.auth === 'register') {
      name = event.target.username.value;

      await register(name, email, password);
      await login(email, password); //This line automatically login after registration!
    }
  } catch (error) {
    console.error('Authentication error:', error);
  }
}
