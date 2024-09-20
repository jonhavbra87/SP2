import { avatarPlaceholder } from '../../images';

export function specificMediaContainer(postData) {
  const mediaContainer = document.createElement('div');
  mediaContainer.classList.add('col-12', 'col-md-6', 'mb-3', 'mb-lg-0', 'd-flex', 'flex-column');

  //IMgContainer
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('media-container');

  const largeImage = document.createElement('img');
  largeImage.classList.add('img-fluid', 'object-fit-cover', 'w-100', 'h-auto');

  largeImage.setAttribute('loading', 'lazy');

  if (postData.media && postData.media.length > 0 && postData.media[0].url) {
    largeImage.src = postData.media[0].url;
    largeImage.alt = postData.media[0].alt || `Image from ${postData.title}`;
  } else {
    largeImage.src = avatarPlaceholder;
    largeImage.alt = 'Placeholder image';
  }

  imgContainer.append(largeImage);
  mediaContainer.append(imgContainer);

  // Create the thumbnail container for smaller images
  const thumbnailContainer = document.createElement('div');
  thumbnailContainer.classList.add('d-flex', 'flex-wrap', 'justify-content-around', 'mt-3', 'gap-1');

  if (postData.media && postData.media.length > 0) {
    postData.media.forEach((mediaItem) => {
      const thumbnail = document.createElement('img');
      thumbnail.classList.add('small-thumbnail', 'img-fluid', 'rounded', 'object-fit-cover', 'opacity-50');
      thumbnail.setAttribute('loading', 'lazy');
      thumbnail.src = mediaItem.url;
      thumbnail.alt = mediaItem.alt || `Thumbnail of ${postData.title}`;
      thumbnail.addEventListener('click', () => {
        largeImage.src = mediaItem.url;
        largeImage.alt = mediaItem.alt;
      });
      thumbnailContainer.append(thumbnail);
    });
  }

  mediaContainer.append(thumbnailContainer);

  return mediaContainer;
}
