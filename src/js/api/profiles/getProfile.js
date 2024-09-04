//
// authentication: bearer $load("token")
//X-noroff i Headers

import { load } from '../../storage/index.js';
import { API_AUCTIONS, API_BASE, API_KEY } from '../constants.js';

const action = '/profiles';
const method = 'GET';
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${load('token')}`,
  'X-Noroff-API-Key': API_KEY,
};

// const profile = load('profile');
// let name = '';

// if (profile && profile.name) {
//   name = profile.name;
//   console.log('Loaded profile name:', name);
// } else {
//   console.error('No profile found in localStorage');
// }

export async function getProfile(name) {
  if (!name) {
    console.error('No profile name found in localStorage');
    return;
  }

  const getProfileURL = `${API_BASE}${API_AUCTIONS}${action}/${name}`;
  console.log('getProfileURL:', getProfileURL);

  try {
    const response = await fetch(getProfileURL, {
      headers,
      method,
    });

    const profileData = await response.json();
    console.log('response profileData:', profileData.data);

    return profileData.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
}
