import { getProfile } from '../api/profiles/getProfile.js';
import { profileBids } from '../api/profiles/profileBids.js';
import { profileListings } from '../api/profiles/profileListings.js';
import { load } from '../storage/load.js';
import { hideLoader } from '../ui/helpers/hideLoader.js';
import { showLoader } from '../ui/helpers/showLoader.js';
import { profileTemplate } from '../templates/profileTemplates.js';
import { showMessage } from '../ui/errorHandling/showMessage.js';

/**
 * Renders the user's profile, including their profile data, listings, and bids.
 *
 * This function retrieves the current user's profile name from storage, fetches the profile data,
 * listings, and bids, and then renders this information using the `profileTemplate`.
 * A loader is shown while data is being fetched, and an error message is displayed if the profile cannot be found.
 *
 * @async
 * @function renderProfile
 * @returns {void}
 * @throws {Error} If there is an issue fetching or rendering the profile.
 *
 * @example
 * renderProfile();
 */

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
    console.error(`Failed to render profile: ${error.message}`);
  } finally {
    hideLoader();
  }
}
