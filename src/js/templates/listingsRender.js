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
      console.warn('No posts found or posts array is empty.');
      return;
    }
    listingsAppend(posts, container);
  } catch (error) {
    console.error('Failed to render posts:', error);
    container.innerHTML = `<p class="error-message">Failed to load listings. Please try again later.</p>`;
  }
}
