import { avatarPlaceholder } from '../images';

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
  imgContainer.classList.add('ratio', 'ratio-1x1', 'object-fit-cover', 'w-100');

  const img = document.createElement('img');
  img.classList.add('img-fluid');
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

  const title = document.createElement('h3');
  title.textContent = postData.title;
  title.classList.add('carousel-title');

  const readMoreButton = document.createElement('a');
  readMoreButton.href = '/listings/?id=' + postData.id;
  readMoreButton.classList.add('btn', 'btn-cb-primary', 'fw-bold', 'text-uppercase');
  readMoreButton.textContent = 'View';

  textContainer.append(title, readMoreButton);

  postContainer.append(imgContainer, textContainer);

  blogContainer.appendChild(postContainer);
}
