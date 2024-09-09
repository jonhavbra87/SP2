import { getProfile } from '../api/profiles/getProfile.js';
import { profileBids } from '../api/profiles/profileBids.js';
import { profileListings } from '../api/profiles/profileListings.js';
import { load } from '../storage/index.js';
import { profileTemplate } from './profileTemplates.js';

export async function renderProfile() {
  try {
    const url = new URL(location.href);
    let name = load('profile').name || url.searchParams.get('name');
    // let name = url.searchParams.get('name');
    // console.log(name);

    const profileData = await getProfile(name);
    // console.log(profileData);

    const listings = await profileListings();

    const bids = await profileBids();
    // console.log(bids);

    if (profileData) {
      const container = document.querySelector('#profile-container');

      container.innerHTML = '';
      // console.log('lisiting:', listings, 'bids:', bids);
      const profileCard = profileTemplate(profileData, listings, bids);

      container.append(profileCard);
    } else {
      alert(`No profile with the name ${name}. Please try again.`);
    }
  } catch (error) {
    throw new Error(`Failed to render profile: ${error.message}`);
  }
}
