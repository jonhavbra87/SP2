export function profileTemplate(profileData) {
  const profileContainer = document.createElement('div');
  profileContainer.classList.add('container-fluid', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center', 'col-lg-6', 'mt-5');

  const profileTitle = document.createElement('h1');
  profileTitle.classList.add('text-center', 'mb-3', 'text-uppercase');
  profileTitle.textContent = profileData.name;

  const profileBio = document.createElement('p');
  profileBio.classList.add('text-center', 'mb-3');
  profileBio.textContent = profileData.bio;

  const profileCredits = document.createElement('p');
  profileCredits.classList.add('text-center', 'mb-3');
  profileCredits.textContent = `Credits: ${profileData.credits}`;

  const avatarWidth = document.createElement('div');
  avatarWidth.classList.add('row');
  const profileAvatar = document.createElement('div');
  profileAvatar.classList.add('rounded', 'position-relative', 'z-1', 'col-6');

  //removed ratio and ratio-1x1 so the name can be adjust right with bootstrap
  const avatar = document.createElement('img');
  avatar.classList.add('img-fluid', 'rounded', 'object-fit-cover', 'z-2', 'position-absolute', 'bottom-50', 'start-0', 'z-1');
  avatar.src = profileData.avatar.url;
  avatar.alt = profileData.avatar.alt;

  if (avatar.src === 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&h=400&w=400') {
    avatar.src = '../../assets/avatarPlaceholder.webp';
  } else {
    return;
  }

  // maybe have a grid with the name and the avatar
  // const profileNameAvatar = document.createElement('p');
  // profileNameAvatar.classList.add("position-absolute","z-10", "bottom-0", "translate-middle-x", "start-50", "text-uppercase", "fw-bold", "text-white", "bg-dark", "rounded-pill", "px-2");
  // profileNameAvatar.textContent = profileData.name;

  const profileBanner = document.createElement('div');
  profileBanner.classList.add('position-relative', 'z-0');

  const banner = document.createElement('img');
  banner.classList.add('img-fluid', 'rounded', 'object-fit-cover');
  banner.src = profileData.banner.url;
  banner.alt = profileData.banner.alt;

  if (banner.src === 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&h=500&w=1500') {
    banner.src = '../../assets/profileBannerPlaceholder.png';
  } else {
    return;
  }

  const updateAvatar = document.createElement('button');
  updateAvatar.classList.add('btn', 'btn-cb-primary', 'text-uppercase', 'fw-bold', 'm-2');
  updateAvatar.textContent = 'Update avatar';

  const profileListings = document.createElement('p');
  profileListings.classList.add('text-center', 'm-2');
  profileListings.textContent = `Listings: ${profileData._count.listings}`;

  const profileWins = document.createElement('p');
  profileWins.classList.add('text-center', 'mb-2');
  profileWins.textContent = `Wins: ${profileData._count.wins}`;

  avatarWidth.append(profileAvatar);
  profileAvatar.append(avatar);
  profileBanner.append(banner);
  profileContainer.append(profileTitle, profileBio, profileCredits, profileBanner, profileAvatar, updateAvatar, profileListings, profileWins);

  return profileContainer;
}
