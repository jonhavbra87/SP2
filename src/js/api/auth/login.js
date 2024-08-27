// import { API_FULL_URL } from '../constants.js'
import * as storage from '../storage/index.js'
import { API_BASE, API_AUTH, API_LOGIN } from '../constants'

/**
 * Logs in a user by sending their profile data to the API.
 *
 * This function sends a login request to the API with the provided profile data.
 * If the login is successful, it stores the access token and user profile in local storage
 * and displays a success alert. If the login fails, it throws an error with the response status text.
 *
 * @async - Asynchronous function
 * @function login - Logs in a user by sending their profile data to the API.
 * @param {Object} profile - The profile data containing username and password for login.
 * @returns {Promise<void>} - A promise that resolves if the login is successful.
 * @throws {Error} Throws an error if the login request fails.
 **/

// body: JSON.stringify({ email, password }),

const method = 'POST'

export async function login(email, password) {
  const loginURL = `${API_BASE}${API_AUTH}${API_LOGIN}`

  const body = JSON.stringify({ email, password })

  const response = await fetch(loginURL, {
    headers: {
      'Content-Type': 'application/json',
    },
    method,
    body,
  })

  if (response.ok) {
    const { accessToken, ...user } = (await response.json()).data
    storage.save('accessToken', accessToken)
    storage.save('profile', user)
    alert('You have been logged in successfully')

    return user
  } else {
    throw new Error('Failed to log in: ' + response.statusText)
  }
}
/* 
const action = "/auth/register";

export async function register(profile) {
  const registerURL = API_SOCIAL_URL + action;

  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();
  alert("You have been registered in successfully");
  window.location.href = "/profile/login/";
  return result;
} */

export async function onAuth(event) {
  event.preventDefault()
  const email = event.target.email.value
  const password = event.target.password.value

  try {
    if (event.submitter.dataset.auth === 'login') {
      await login(email, password)
    } else {
      // await register(name, email, password)
    }
  } catch (error) {
    console.error('Authentication error:', error)
  }
}

export function setAuthListener() {
  document.getElementById('loginForm').addEventListener('submit', onAuth)
  // document.forms.auth.addEventListener("submit", onAuth);
}
