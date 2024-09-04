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

const queryString = document.location.search;
export const params = new URLSearchParams(queryString);
export const name = params.get('name');

export async function getProfile() {
  // if (!name) {
  //     throw new Error(`Profile name is required. Received name: ${name}`);
  // }

  const getProfileURL = `${API_BASE}${API_AUCTIONS}${action}${name}`;

  try {
    const response = await fetch(getProfileURL, {
      headers,
      method,
    });

    const profileData = await response.json();
    console.log('profileData:', profileData);
    return profileData;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
}
