import { reloadPage } from '../../api/helpers/reloadPage.js';
import { updateProfileAvatar } from '../../api/profiles/updateProfileAvatar.js';
import { load } from '../../storage/load.js';

/**
 * Handles the submission of the avatar URL form to update the user's profile avatar and reloads the page.
 *
 * This function listens for form submission, retrieves the avatar URL, and sends it to the API
 * to update the user's profile avatar. It checks that the profile name is valid and, on success,
 * reloads the page to reflect the updated avatar.
 *
 * @function submitAvatarUrl
 * @returns {void}
 *
 * @example
 * submitAvatarUrl();
 */

export function submitAvatarUrl() {
  const form = document.getElementById('avatarForm');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const avatarUrlInput = document.getElementById('avatarUrl');
    const avatarUrl = avatarUrlInput.value;

    if (!avatarUrl) {
      console.error('Avatar URL is missing.');
      return;
    }

    // Construct the avatar data to be sent in the API request
    const avatarData = {
      avatar: {
        url: avatarUrl,
        alt: 'User avatar',
      },
    };

    // Make sure profile name is loaded correctly
    const profileName = load('profile')?.name;
    if (!profileName) {
      console.error('Profile name not found.');
      return;
    }

    try {
      // Update the profile avatar with the provided URL
      const response = await updateProfileAvatar(profileName, avatarData);
      console.log('Profile avatar updated:', response);
      reloadPage();
    } catch (error) {
      console.error('Failed to update profile avatar:', error);
      alert('An error occurred while updating the profile avatar. Please try again.');
    }
  });
}
