export function navbarShowHide() {
  const toggleButton = document.querySelector(`[data-bs-toggle="collapse"]`)
  const navbarContent = document.getElementById('navbarSupportedContent')
  toggleButton.addEventListener('click', () => {
    const navBarIsExpanded =
      toggleButton.getAttribute(`aria-expanded`) === `true`
    toggleButton.setAttribute(`aria-expanded`, !navBarIsExpanded)

    navbarContent.classList.toggle('show')
  })
}
