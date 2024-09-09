import { load } from '../../storage';
import { API_AUCTIONS, API_BASE } from '../constants';
import { authFetch } from '../fetch/authFetch';

const action = '/profiles';

export async function profileListings() {
  const profile = load('profile');
  const name = profile.name;

  if (!name) {
    throw new Error('Profile name is required.');
  }

  const url = `${API_BASE}${API_AUCTIONS}${action}/${name}?_wins=true&_listings=true`;
  // console.log('profileListings url', url);

  const response = await authFetch(url, 'GET');
  // console.log('profileListings response:', response);

  return response;
}
