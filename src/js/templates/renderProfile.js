import { getProfile } from '../api/profiles/getProfile.js';
import { load } from '../storage/index.js';
import { profileTemplate } from './profileTemplates.js';

export async function renderProfile() {
  try {
    const url = new URL(location.href);
    const name = url.searchParams.get('name') || load('profile').name;

    const profileData = await getProfile(name);

    if (profileData) {
      const container = document.querySelector('#profile');
      container.innerHTML = '';

      const profileCard = profileTemplate(profileData);

      container.append(profileCard);
    } else {
      alert(`No profile with the name ${name}. Please try again.`);
    }
  } catch (error) {
    throw new Error(`Failed to render profile: ${error.message}`);
  }
}
