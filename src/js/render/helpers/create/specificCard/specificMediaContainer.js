export function specificMediaContainer(postData) {
  const mediaContainer = document.createElement('div');
  mediaContainer.classList.add('col-12', 'col-lg-6', 'mb-3', 'mb-lg-0'); // mb-3 for space on mobile, no space on larger screens

  const img = document.createElement('img');
  img.classList.add('img-fluid', 'object-fit-cover', 'w-100');
  // Check if the media array and URL exist
  if (postData.media && postData.media.length > 0 && postData.media[0].url) {
    img.src = postData.media[0].url;
    img.alt = postData.media[0].alt || `Image from ${postData.title}`;
  } else {
    // Fallback to placeholder image if no media exists
    img.src = '../../assets/logo_full_size.png';
    img.alt = 'Placeholder image';
  }

  mediaContainer.append(img);
  return mediaContainer;
}
