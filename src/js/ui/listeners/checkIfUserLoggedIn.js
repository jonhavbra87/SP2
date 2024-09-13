import { load } from '../../storage';
import { updateNavbarAuthUser } from '../helpers/updateNavbarAuthUser';
import { updateNavbarGuestUser } from '../helpers/updateNavbarGuestUser';

export function checkIfUserLoggedIn() {
  const token = load('token');
  if (token) {
    updateNavbarAuthUser();
  } else {
    updateNavbarGuestUser();
  }
}
