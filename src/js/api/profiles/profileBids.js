import { load } from '../../storage';
import { API_AUCTIONS, API_BASE } from '../constants';
import { authFetch } from '../fetch/authFetch';

const action = '/profiles';

export async function profileBids() {
  const profile = load('profile');
  const name = profile.name;

  if (!name) {
    throw new Error('Profile name is required.');
  }

  const url = `${API_BASE}${API_AUCTIONS}${action}/${name}/bids?_listings=true`;
  console.log(url);

  const response = await authFetch(url, 'GET');
  console.log('profileBids response:', response);

  return response;
}
