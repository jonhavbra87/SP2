import { avatarPlaceholder } from '../images';

/**
 * Creates a carousel slide for a post, including an image and a button to view the post details.
 *
 * This function generates a carousel slide element with a post image and title. If the post has media,
 * it displays the first image; otherwise, it uses a placeholder image. A "View" button redirects the user
 * to the post's detailed listing page.
 *
 * @function createCarousel
 * @param {Object} postData - The data object containing the post's media, title, and ID.
 * @returns {void}
 *
 * @example
 * createCarousel(postData);
 */

export function createCarousel(postData) {
  const blogContainer = document.querySelector('.slider');
  blogContainer.classList.add('slider');

  if (!blogContainer) {
    console.error('Blog container not found for the post: ', postData);
    return;
  }

  const postContainer = document.createElement('div');
  postContainer.classList.add('slide');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('w-100', 'h-100', 'position-relative');

  const img = document.createElement('img');
  img.classList.add('img-fluid', 'carousel-image');
  img.setAttribute('loading', 'lazy');

  if (postData.media.length > 0 && postData.media[0].url) {
    img.src = postData.media[0].url;
    img.alt = postData.media[0].alt || `Image from ${postData.title}`;
  } else {
    img.src = avatarPlaceholder;
    img.alt = 'Placeholder  image';
  }

  imgContainer.append(img);

  const textContainer = document.createElement('div');
  textContainer.classList.add('carousel-text-container');

  const title = document.createElement('h1');
  title.textContent = postData.title;
  title.classList.add('card-title', 'mb-3', 'text-uppercase', 'fw-bold', 'linear-text-color');

  const readMoreButton = document.createElement('a');
  readMoreButton.href = '/listings/?id=' + postData.id;
  readMoreButton.classList.add('btn', 'btn-cb-primary', 'fw-bold', 'text-uppercase', 'py-1', 'py-sm-2', 'py-md-3', 'px-3', 'px-sm-4', 'px-md-5');
  readMoreButton.textContent = 'View';

  // Prevent both click and touch events from bubbling up to the slide
  readMoreButton.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  // Prevent touch events from affecting the carousel
  readMoreButton.addEventListener('touchstart', (event) => {
    event.stopPropagation();
  });

  textContainer.append(title, readMoreButton);

  postContainer.append(imgContainer, textContainer);

  blogContainer.appendChild(postContainer);
}
