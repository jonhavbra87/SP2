import { getProfile } from '../api/profiles/getProfile.js';
import { profileBids } from '../api/profiles/profileBids.js';
import { profileListings } from '../api/profiles/profileListings.js';
import { load } from '../storage/index.js';
import { hideLoader } from '../ui/helpers/hideLoader.js';
import { showLoader } from '../ui/helpers/showLoader.js';
import { profileTemplate } from '../templates/profileTemplates.js';
import { showMessage } from '../ui/errorHandling/showMessage.js';

export async function renderProfile() {
  showLoader();
  try {
    let name = load('profile').name;

    const profileData = await getProfile(name);

    const listings = await profileListings();

    const bids = await profileBids();

    hideLoader();

    if (profileData) {
      const container = document.querySelector('#profile-container');
      container.innerHTML = '';

      const profileCard = profileTemplate(profileData, listings, bids);

      container.append(profileCard);
    } else {
      showMessage(`No profile with the name ${name}. Please try again.`);
    }
  } catch (error) {
    throw new Error(`Failed to render profile: ${error.message}`);
  } finally {
    hideLoader();
  }
}
