// import { API_FULL_URL } from '../constants.js'
// import * as storage from '../../storage/index.js'

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
/* 
const action = 'login'
const method = 'post'

export async function login(profile) {
  const loginURL = API_FULL_URL + action

  const body = JSON.stringify(profile).data;

  const response = await fetch(loginURL, {
    headers: {
      'Content-Type': 'application/json',
    },
    method,
    body,
  })
  if (response.ok) {
    const { accessToken, ...user } = await response.json()
    storage.save('accessToken', accessToken)
    storage.save('profile', user)
    alert('You have been logged in successfully')
  } else {
    throw new Error('Failed to log in: ' + response.statusText)
  }
} */
