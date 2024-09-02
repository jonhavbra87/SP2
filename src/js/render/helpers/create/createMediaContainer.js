export function createMediaContainer(postData) {
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('ratio', 'ratio-1x1');

  const img = document.createElement('img');
  img.classList.add('img-fluid', 'rounded', 'object-fit-cover');
  img.src = postData.media[0]?.url;
  img.alt = postData.media[0]?.alt || `Image from ${postData.title}`;

  if (postData.media[0]?.url) {
    img.src = postData.media[0]?.url;
  } else {
    // If the user don't upload a img, then this will create a placeholder img for that listing.
    const placeholderMedia = ['./src/assets/logo_full_size.png'];

    img.src = placeholderMedia;
  }

  imgContainer.append(img);

  return imgContainer;
}
