import { API_AUCTIONS, API_BASE } from '../constants';
import { authFetch } from '../fetch/authFetch';

const action = '/profiles';

export async function updateProfileAvatar(profileName, avatarData) {
  const url = `${API_BASE}${API_AUCTIONS}${action}/${profileName}`;
  return await authFetch(url, 'PUT', avatarData);
}