export function createCarousel(postData) {
  const blogContainer = document.querySelector('.slider');
  blogContainer.classList.add('slider');
  if (!blogContainer) {
    console.error('Blog container not found for the post: ', postData);
    return;
  }

  const postContainer = document.createElement('div');
  postContainer.classList.add('slide');

  const img = document.createElement('img');
  img.classList.add('carousel-image');
  img.src = postData.media[0]?.url || '../../../assets/logo_full_size.png';
  img.alt = postData.media[0]?.alt || `Image from ${postData.title}`;

  const textContainer = document.createElement('div');
  textContainer.classList.add('carousel-text-container');

  const title = document.createElement('h3');
  title.textContent = postData.title;
  title.classList.add('carousel-title');

  const readMoreButton = document.createElement('a');
  readMoreButton.href = '/listings/?id=' + postData.id;
  readMoreButton.classList.add('btn', 'btn-cb-primary', 'fw-bold', 'text-uppercase');
  readMoreButton.textContent = 'read now';

  textContainer.append(title, readMoreButton);

  postContainer.append(img, textContainer);

  blogContainer.appendChild(postContainer);
}
