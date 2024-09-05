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

export async function getProfile(name) {
  if (!name) {
    console.error('No profile name found in localStorage');
    return;
  }

  const getProfileURL = `${API_BASE}${API_AUCTIONS}${action}/${name}`;

  try {
    const response = await fetch(getProfileURL, {
      method,
      headers,
    });

    // if (!response.ok) {
    //   throw new Error(`Failed to fetch profile: ${response.statusText}`);
    // }

    const profileData = await response.json();

    return profileData.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
  }
}
