import { API_BASE } from './constants'

const auction = '/auction'
const action = '/listings'

export async function getPosts() {
  const url = `${API_BASE}${auction}${action}`

  const response = await fetch(url)
  return await response.json()
}
const listings = await getPosts()
console.log(listings.data)

/* export async function register(name, email, password) {
  const response = await fetch(`${API_BASE}${API_AUTH}${API_REGISTER}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  })

  if (response.ok) {
    return await response.json()
  }
  throw new Error('Failed to register: ' + response.statusText)
} */
/* 
export async function login(email, password) {
  const response = await fetch(`${API_BASE}${API_AUTH}${API_LOGIN}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ email, password }),
  })

  if (response.ok) {
    const { accessToken, ...user } = (await response.json()).data

    save('token', accessToken)
    save('user', user)
    console.log(user)

    return user
  }

  throw new Error('Failed to log in: ' + response.statusText)
}

export async function onAuth(event) {
  event.preventDefault()
  const name = event.target.name?.value // Optional chaining
  const email = event.target.email.value
  const password = event.target.password.value

  try {
    if (event.submitter.dataset.auth === 'login') {
      await login(email, password)
    } else {
      await register(name, email, password)
    }
  } catch (error) {
    console.error('Authentication error:', error)
  }
}

export function setAuthListener() {
  document.getElementById('loginForm').addEventListener('submit', onAuth)
  // document.forms.auth.addEventListener("submit", onAuth);
}
 */
