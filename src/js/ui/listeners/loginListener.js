export function loginListener() {
  document
    .getElementById('loginForm')
    .addEventListener('submit', async (event) => {
      event.preventDefault()

      const loader = document.getElementById('loader')

      loader.classList.remove('d-none')

      setTimeout(() => {
        window.location.pathname = `/`
      }, 2000)
    })
}
