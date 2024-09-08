export function mediaContainer(postData) {
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('ratio', 'ratio-1x1');

  const img = document.createElement('img');
  img.classList.add('img-fluid', 'rounded', 'object-fit-cover');
  img.src = postData.media[0]?.url;
  img.alt = postData.media[0]?.alt || `Image from ${postData.title}`;

  console.log('img.src:', img.src);

  // Check if the media array and URL exist
  if (postData.media && postData.media.length > 0 && postData.media[0].url) {
    img.src = postData.media[0].url;
    img.alt = postData.media[0].alt || `Image from ${postData.title}`;
  } else {
    // Fallback to placeholder image if no media exists
    img.src = '../../assets/logo_full_size.png';
    img.alt = 'Placeholder image';
  }

  imgContainer.append(img);

  return imgContainer;
}
