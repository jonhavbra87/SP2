export function profileTemplate(profileData) {
  const profileContainer = document.createElement('div');
  profileContainer.classList.add('container', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center', 'col-lg-6', 'mt-5');

  const profileTitle = document.createElement('h1');
  profileTitle.classList.add('text-center', 'mb-3');
  profileTitle.textContent = profileData.name;

  const profileBio = document.createElement('p');
  profileBio.classList.add('text-center', 'mb-3');
  profileBio.textContent = profileData.bio;

  const profileCredits = document.createElement('p');
  profileCredits.classList.add('text-center', 'mb-3');
  profileCredits.textContent = profileData.credits;

  const profileAvatar = document.createElement('div');
  profileAvatar.classList.add('ratio', 'ratio-16x9');

  const avatar = document.createElement('img');
  avatar.classList.add('avatar-fluid', 'rounded', 'object-fit-cover');
  avatar.src = profileData.avatar.url;
  avatar.alt = profileData.avatar.alt;

  if (avatar.src === 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&h=400&w=400') {
    avatar.src = '../../assets/logo_full_size.png';
  } else {
    return;
  }

  const profileBanner = document.createElement('div');
  profileBanner.classList.add('ratio', 'ratio-16x9');

  const banner = document.createElement('img');
  banner.classList.add('img-fluid', 'rounded', 'object-fit-cover');
  banner.src = profileData.banner.url;
  banner.alt = profileData.banner.alt;

  if (banner.src === 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&h=500&w=1500') {
    banner.src = '../../assets/logo.png';
  } else {
    return;
  }

  profileAvatar.append(avatar);
  profileBanner.append(banner);
  profileContainer.append(profileTitle, profileBio, profileCredits, profileAvatar, profileBanner);

  return profileContainer;
}
