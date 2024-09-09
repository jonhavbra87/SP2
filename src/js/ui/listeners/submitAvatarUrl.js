import { updateProfileAvatar } from '../../api/profiles/updateProfileAvatar.js';
import { load } from '../../storage';

export function submitAvatarUrl() {
  const form = document.getElementById('avatarForm');
  console.log('Avatar form:', form);

  // Add the event listener for form submission
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Get the avatar URL input value
    const avatarUrlInput = document.getElementById('avatarUrl');
    const avatarUrl = avatarUrlInput.value;

    // Check if the URL is valid
    if (!avatarUrl) {
      console.error('Avatar URL is missing.');
      return;
    }

    // Construct the avatar data to be sent in the API request
    const avatarData = {
      avatar: {
        url: avatarUrl,
        alt: 'User avatar', // Optional alt text
      },
    };

    // Make sure profile name is loaded correctly
    const profileName = load('profile')?.name;
    console.log('Profile name:', profileName);

    try {
      // Update the profile avatar with the provided URL
      const response = await updateProfileAvatar(profileName, avatarData);
      console.log('Profile avatar updated:', response);

      location.reload();

      // Optionally, close the modal after a successful update
      //   const avatarModal = document.getElementById('avatarModal');
      //   avatarModal.classList.remove('show');
    } catch (error) {
      console.error('Failed to update profile avatar:', error);
    }
  });
}
