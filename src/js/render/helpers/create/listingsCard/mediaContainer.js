import { avatarPlaceholder } from '../../images';

/**
 * Creates and returns a media container displaying an image for a post.
 *
 * This function generates a `div` container with an image. If the post contains valid media with a URL,
 * the image is displayed; otherwise, a placeholder image is shown.
 *
 * @function mediaContainer
 * @param {Object} postData - The post data containing media and title information.
 * @param {Array<Object>} postData.media - An array of media objects, each containing `url` and `alt` properties.
 * @param {string} postData.title - The title of the post, used for the image's alt text.
 * @returns {HTMLDivElement} The created media container element.
 *
 * @example
 * const media = mediaContainer(postData);
 * document.body.appendChild(media);
 */

export function mediaContainer(postData) {
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('ratio', 'ratio-1x1');

  const img = document.createElement('img');
  img.classList.add('img-fluid', 'rounded', 'object-fit-cover');
  img.setAttribute('loading', 'lazy');

  if (postData.media && postData.media.length > 0 && postData.media[0].url) {
    img.src = postData.media[0].url;
    img.alt = postData.media[0].alt || `Image from ${postData.title}`;
  } else {
    img.src = avatarPlaceholder;
    img.alt = 'Placeholder image';
  }

  imgContainer.append(img);

  return imgContainer;
}
