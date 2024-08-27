// import { API_SOCIAL_URL } from "../constants.mjs";

import { API_AUTH, API_BASE, API_REGISTER } from '../constants'

/**
 * Registers a new user profile to the social network API.
 * This function takes a profile object, converts it to JSON,
 * and sends it to the register endpoint. If successful, it alerts
 * the user of successful registration and returns the result.
 * @param {Object} profile - The user profile to register
 * @returns {Promise} response - The result of the API call
 * @throws {Error} result - The error which was thrown during the API call
 * ```js
 * register(profile)
 * ```
 * **/

const method = 'POST'

export async function register(profile) {
  const registerURL = `${API_BASE}${API_AUTH}${API_REGISTER}`

  const body = JSON.stringify(profile)

  const response = await fetch(registerURL, {
    headers: {
      'Content-Type': 'application/json',
    },
    method,
    body,
  })

  const result = await response.json()
  alert('You have been registered in successfully')
  // window.location.href = "/profile/login/";
  return result
}
