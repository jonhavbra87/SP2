import { updateProfileAvatar } from '../../api/profiles/updateProfileAvatar.js';
import { load } from '../../storage';

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
    // console.log('Profile name:', profileName);

    try {
      // Update the profile avatar with the provided URL
      const response = await updateProfileAvatar(profileName, avatarData);
      console.log('Profile avatar updated:', response);
      location.reload();
    } catch (error) {
      console.error('Failed to update profile avatar:', error);
    }
  });
}
