console.log(
  'Hello from custom.js. This is a custom JavaScript file that I will create all my custom JavaScript! I will import this file into main.js.',
)
const themeToggleBtn = document.getElementById('themeToggle')
const bodyElement = document.body
const navbarElement = document.querySelector('.navbar')

// Hent den lagrede tema-modusen fra localStorage
const currentTheme = localStorage.getItem('theme') || 'light-mode'
bodyElement.classList.add(currentTheme)
navbarElement.classList.add(currentTheme)
themeToggleBtn.textContent =
  currentTheme === 'dark-mode' ? 'Light Mode' : 'Dark Mode'

themeToggleBtn.addEventListener('click', () => {
  // Bytt mellom lys og mørk modus
  const isDarkMode = bodyElement.classList.contains('dark-mode')
  bodyElement.classList.toggle('dark-mode', !isDarkMode)
  bodyElement.classList.toggle('light-mode', isDarkMode)
  navbarElement.classList.toggle('dark-mode', !isDarkMode)
  navbarElement.classList.toggle('light-mode', isDarkMode)

  // Oppdater knappeteksten
  themeToggleBtn.textContent = isDarkMode ? 'Dark Mode' : 'Light Mode'

  // Lagre det valgte temaet i localStorage
  const selectedTheme = isDarkMode ? 'light-mode' : 'dark-mode'
  localStorage.setItem('theme', selectedTheme)
})
