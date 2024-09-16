import { avatarPlaceholder } from '../../images';

export function mediaContainer(postData) {
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('ratio', 'ratio-1x1');

  const img = document.createElement('img');
  img.classList.add('img-fluid', 'rounded', 'object-fit-cover');
  img.setAttribute('loading', 'lazy');
  img.src = postData.media[0]?.url;
  img.alt = postData.media[0]?.alt || `Image from ${postData.title}`;

  // Check if the media array and URL exist
  // if (postData.media && postData.media.length > 0 && postData.media[0].url) {
  //   img.src = postData.media[0].url;
  //   img.alt = postData.media[0].alt || `Image from ${postData.title}`;
  // } else {
  //   // Fallback to placeholder image if no media exists
  //   img.src = avatarPlaceholder;
  //   img.alt = 'Placeholder image';
  // }
  let imageUrl;
  let imageAlt;

  if (postData.media && postData.media.length > 0 && postData.media[0].url) {
    imageUrl = postData.media[0].url;
    imageAlt = postData.media[0].alt || `Image from ${postData.title}`;
  } else {
    imageUrl = avatarPlaceholder;
    imageAlt = 'Placeholder image';
  }

  // Apply srcset for responsive image loading
  img.srcset = `
   ${imageUrl}?w=500&auto=format&q=60 500w,
   ${imageUrl}?w=1000&auto=format&q=60 1000w,
   ${imageUrl}?w=1500&auto=format&q=60 1500w
 `;
  img.sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'; // Adjust for screen sizes

  // Set default src as fallback for older browsers that do not support srcset
  img.src = `${imageUrl}?w=1000&auto=format&q=80`;
  img.alt = imageAlt;

  imgContainer.append(img);

  return imgContainer;
}
