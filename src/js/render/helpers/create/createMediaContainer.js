export function createMediaContainer(postData) {
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('ratio', 'ratio-4x3');

  const img = document.createElement('img');
  img.classList.add('img-fluid', 'rounded');
  img.src = postData.media[0].url;
  img.alt = postData.media[0].alt || `Image from ${postData.title}`;
  //console.log('array of media:', postData.media[0].url);

  imgContainer.append(img);

  return imgContainer;
}
