import { updateProfileAvatar } from '../../api/profiles/updateProfileAvatar.js';
import { load } from '../../storage';

const profileName = load('profile')?.name;
console.log('Profile name:', profileName);

export function submitAvatarUrl() {
  const form = document.getElementById('avatarForm'); // Move form selection outside the event listener
  console.log(form); // Check if form is selected

  if (!form) {
    console.error('Avatar form not found.');
    return;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    console.log('Form submitted, but prevented page reload.');

    const avatarUrlInput = document.getElementById('avatarUrl');
    const avatarUrl = avatarUrlInput.value;

    if (!avatarUrl) {
      console.error('Avatar URL is missing.');
      return;
    }

    const avatarData = {
      avatar: {
        url: avatarUrl,
        alt: 'User avatar', // Optional
      },
    };

    try {
      const response = await updateProfileAvatar(profileName, avatarData);
      console.log('Profile avatar updated:', response);
    } catch (error) {
      console.error('Failed to update profile avatar:', error);
    }
  });
}
