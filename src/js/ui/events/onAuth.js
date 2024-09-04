import { login } from '../../api/auth/login.js';
import { register } from '../../api/auth/register.js';
import { twoSecDelay } from '../../api/helpers/twoSecDelay.js';

export async function onAuth(event) {
  event.preventDefault();

  let name;
  const email = event.target.email.value;
  const password = event.target.password.value;

  try {
    if (event.submitter.dataset.auth === 'login') {
      await login(email, password);
    }
    if (event.submitter.dataset.auth === 'register') {
      name = event.target.username.value;

      // make this work
      // const profile = {
      //   name: name,
      //   email: email,
      //   password: password,
      //   banner: banner,
      //   avatar: avatar,
      // };

      await register(name, email, password);
      await login(email, password);
    }
    // twoSecDelay();
  } catch (error) {
    console.error('Authentication error:', error);
  }
}
