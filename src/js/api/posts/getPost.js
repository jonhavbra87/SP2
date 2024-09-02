import { API_AUCTIONS } from '../constants.js';
import { action } from './getPosts';

export async function getPost(id) {
  if (!id) {
    throw new Error('Get post requires a postID');
  }
  try {
    const post = await doFetch(`${API_AUCTIONS}${action}/${id}`);
    console.log(post);

    return post;
  } catch (error) {
    throw new Error(error);
  }
}
