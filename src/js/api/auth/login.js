import * as storage from '../../storage/index.js';
import { API_BASE, API_AUTH, API_LOGIN } from '../constants';

const method = 'POST';

export async function login(email, password) {
  const loginURL = `${API_BASE}${API_AUTH}${API_LOGIN}`;

  const body = JSON.stringify({ email, password });

  const response = await fetch(loginURL, {
    headers: {
      'Content-Type': 'application/json',
    },
    method,
    body,
  });

  if (response.ok) {
    const { accessToken, ...user } = (await response.json()).data;
    if (!accessToken) {
      throw new Error('No access token found in response');
    }

    storage.save('token', accessToken);
    storage.save('profile', user);
    // alert('You have been logged in successfully')

    return user;
  } else {
    throw new Error('Failed to log in: ' + response.statusText);
  }
}
