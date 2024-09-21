import { navigateToProfile } from '../../render/helpers/create/profile/navigateToProfile';

/**
 * Attaches a click event listener to the profile link element that triggers navigation to the profile page.
 *
 * This function selects the element with the ID `profileLink` and adds a click event listener.
 * When the link is clicked, the `navigateToProfile` function is called to handle navigation.
 *
 * @function navigateToProfileListener
 * @returns {void}
 *
 * @example
 * navigateToProfileListener();
 */

export function navigateToProfileListener() {
  const navigateToProfileLissen = document.querySelector('#profileLink');
  navigateToProfileLissen.addEventListener('click', () => {
    navigateToProfile();
  });
}
