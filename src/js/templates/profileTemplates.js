export function profileTemplate(profileData) {
  const profileContainer = document.createElement('div');
  profileContainer.classList.add('container', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center', 'col-lg-6', 'mt-5');

  const profileTitle = document.createElement('h1');
  profileTitle.classList.add('text-center', 'mb-3');
  profileTitle.textContent = profileData.name;

  const profileBio = document.createElement('p');
  profileBio.classList.add('text-center', 'mb-3');
  profileBio.textContent = profileData.bio;

  profileContainer.append(profileTitle, profileBio);

  return profileContainer;
}
