import { load } from '../../storage/index.js';
import { showMessage } from '../../ui/errorHandling/showMessage.js';
import { API_KEY } from '../constants.js';

export async function headers() {
  try {
    // Load access token from localStorage
    const token = load('token');
    if (!token) {
      console.warn('No access token found. Proceeding without authentication.');
      return {
        'Content-Type': 'application/json',
        'X-Noroff-API-Key': API_KEY,
      };
    }

    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'X-Noroff-API-Key': API_KEY,
    };
  } catch (error) {
    console.error('Error in headers function:', error.message);
    return {
      'Content-Type': 'application/json',
      'X-Noroff-API-Key': API_KEY,
    };
  }
}
