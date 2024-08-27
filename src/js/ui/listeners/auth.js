import { onAuth } from '../events/onAuth'

export function setAuthListener() {
  document.getElementById('loginForm').addEventListener('submit', onAuth)
  // document.forms.auth.addEventListener("submit", onAuth);
}
