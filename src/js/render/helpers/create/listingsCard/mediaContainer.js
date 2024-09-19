import { avatarPlaceholder } from '../../images';

export function mediaContainer(postData) {
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('ratio', 'ratio-1x1');

  const img = document.createElement('img');
  img.classList.add('img-fluid', 'rounded', 'object-fit-cover');
  img.setAttribute('loading', 'lazy');
  img.src = postData.media[0]?.url;
  img.alt = postData.media[0]?.alt || `Image from ${postData.title}`;

  let imageUrl;
  let imageAlt;

  if (postData.media && postData.media.length > 0 && postData.media[0].url) {
    imageUrl = postData.media[0].url;
    imageAlt = postData.media[0].alt || `Image from ${postData.title}`;
  } else {
    imageUrl = avatarPlaceholder;
    imageAlt = 'Placeholder image';
  }

  imgContainer.append(img);

  return imgContainer;
}
