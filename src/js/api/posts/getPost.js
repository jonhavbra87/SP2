import { API_AUCTIONS, API_BASE } from '../constants.js';

const action = '/listings';

export async function getPost(id) {
  if (!id) {
    throw new Error('Get post requires a postID');
  }
  try {
    const url = `${API_BASE}${API_AUCTIONS}${action}/${id}`;

    console.log('fetched data from', url);

    const response = await fetch(url);
    const json = await response.json();

    return json.data;
  } catch (error) {
    throw new Error(`Failed to fetch the specific post`);
  }
}
