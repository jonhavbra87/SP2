import { getPosts } from '../api/posts/getPosts.js';
import { listingsAppend } from './listingsAppend.js';

const loader = document.getElementById('loader');

export async function listingsRender() {
  loader.innerHTML = '';
  loader.classList.add('d-none');

  const container = document.getElementById('listings');
  container.innerHTML = '';

  try {
    const posts = await getPosts();

    if (!posts || !posts.length) {
      return;
    }
    listingsAppend(posts, container);
  } catch (error) {
    throw new Error(`Failed to render posts: ${error.message}`);
  }
}
