export function specificMediaContainer(postData) {
  if (!postData.media) {
    console.error('Failed to render media: media is undefined');
    return;
  }

  const mediaContainer = document.createElement('div');
  mediaContainer.classList.add('ratio', 'ratio-16x9');

  const img = document.createElement('img');
  img.classList.add('img-fluid', 'rounded', 'object-fit-cover');
  img.src = postData.media[0]?.url;
  img.alt = postData.media[0]?.alt || `Image from ${postData.title}`;

  mediaContainer.append(img);

  return mediaContainer;
}
