import { load } from '../../storage/index.js';
import { API_KEY } from '../constants.js';

export async function headers() {
  try {
    // Load access token from localStorage
    const token = load('token');
    if (!token) {
      throw new Error('No access token available. Please log in.');
    }

    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'X-Noroff-API-Key': API_KEY,
    };
  } catch (error) {
    console.error('Error in headers function:', error.message);
    throw new Error('Unable to retrieve headers due to an access token issue.');
  }
}
