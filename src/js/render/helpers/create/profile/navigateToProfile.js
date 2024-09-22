import { showMessage } from '../../../../ui/errorHandling/showMessage';

/**
 * Navigates the user to their profile page based on stored profile data in localStorage.
 *
 * This function retrieves profile data from localStorage and redirects the user to the profile page using
 * the stored profile name. If the profile data is missing or invalid, an error message is displayed, and
 * the error is logged.
 *
 * @async
 * @function navigateToProfile
 * @throws {Error} If the profile data is missing, invalid, or navigation fails.
 *
 * @example
 * navigateToProfile()
 *   .catch(error => console.error(error));
 */

export async function navigateToProfile() {
  try {
    // Retrieve profile data from localStorage
    const storedProfile = localStorage.getItem('profile');

    if (storedProfile) {
      const storedProfileData = JSON.parse(storedProfile);

      if (!storedProfileData || !storedProfileData.name) {
        throw new Error('Profile data is invalid.');
      }

      // Use the name from profile data
      const profileName = storedProfileData.name;
      const profileUrl = `/profile/?name=${profileName}`;

      // Navigate to the profile page
      window.location.href = profileUrl;
    } else {
      throw new Error('No profile data found in localStorage.');
    }
  } catch (error) {
    showMessage('Failed to navigate to profile. Please login & try again.');
    console.error('Failed to navigate to profile:', error);
  }
}
