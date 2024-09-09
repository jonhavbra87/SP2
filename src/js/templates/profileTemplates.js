export function profileTemplate(profileData) {
  const profileContainer = document.createElement('div');
  profileContainer.classList.add('container-fluid', 'bg-dark');

  /* Banner and Profile Section */
  const bannerRow = document.createElement('div');
  bannerRow.classList.add('row', 'position-relative');

  // Banner Image
  const bannerCol = document.createElement('div');
  bannerCol.classList.add('col-12');
  const banner = document.createElement('img');
  banner.classList.add('img-fluid', 'w-100', 'object-fit-cover');
  banner.style.height = '312px'; // Adjust height if necessary

  banner.src = profileData.banner.url || '../../assets/profileBannerPlaceholder.png'; // Use placeholder if no banner available
  banner.alt = profileData.banner.alt || 'Profile banner';

  if (banner.src === 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&h=500&w=1500') {
    banner.src = '../../assets/profileBannerPlaceholder.png';
  } else {
    banner.src = profileData.banner.url;
  }

  bannerCol.append(banner);
  bannerRow.append(bannerCol);

  // Avatar (Overlapping the Banner)
  const avatarCol = document.createElement('div');
  avatarCol.classList.add('col-12', 'd-flex', 'justify-content-center', 'position-absolute');
  avatarCol.style.top = '250px'; // Adjust avatar position
  const avatar = document.createElement('img');
  avatar.classList.add('rounded', 'border', 'border-3', 'border-light');
  avatar.style.width = '300px'; // Adjust avatar size if needed
  avatar.style.height = '200px';
  avatar.src = profileData.avatar.url || '../../assets/avatarPlaceholder.webp'; // Use placeholder if no avatar available
  avatar.alt = profileData.avatar.alt || 'Profile avatar';

  if (avatar.src === 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&h=400&w=400') {
    avatar.src = '../../assets/avatarPlaceholder.webp';
  } else {
    avatar.src = profileData.avatar.url;
  }

  avatarCol.append(avatar);
  bannerRow.append(avatarCol);

  /* Bio Section */
  const bioRow = document.createElement('div');
  bioRow.classList.add('row', 'mt-5', 'justify-content-center');
  const bioCol = document.createElement('div');
  bioCol.classList.add('col-lg-8', 'text-center');
  const profileTitle = document.createElement('h1');
  profileTitle.classList.add('fw-bold', 'text-uppercase', 'mb-3');
  profileTitle.textContent = profileData.name || 'Unknown User'; // Fallback if no name
  const profileBio = document.createElement('p');
  profileBio.textContent = profileData.bio || 'This user hasn’t written their bio yet.';
  bioCol.append(profileTitle, profileBio);
  bioRow.append(bioCol);

  /* Stats Section */
  const statsRow = document.createElement('div');
  statsRow.classList.add('row', 'mt-4', 'text-center');

  // Latest Bids Column
  const latestBidsCol = document.createElement('div');
  latestBidsCol.classList.add('col-md-3');
  const latestBidsTitle = document.createElement('h5');
  latestBidsTitle.classList.add('fw-bold');
  latestBidsTitle.textContent = 'Latest Bids';
  const latestBidsList = document.createElement('ul');
  latestBidsList.classList.add('list-unstyled');
  latestBidsList.innerHTML = `
    <li>Prada Purse: 7000$</li>
    <li>Rolex Submariner: 15,500$</li>
    <li>Ferrari 250 GTO Model: 3,500$</li>
  `;
  latestBidsCol.append(latestBidsTitle, latestBidsList);

  // Active Listings Column
  const activeListingsCol = document.createElement('div');
  activeListingsCol.classList.add('col-md-3');
  const activeListingsTitle = document.createElement('h5');
  activeListingsTitle.classList.add('fw-bold');
  activeListingsTitle.textContent = 'Active Listings';
  const activeListingsList = document.createElement('ul');
  activeListingsList.classList.add('list-unstyled');
  activeListingsList.innerHTML = `
    <li>Diamond Necklace: 27,000$</li>
    <li>Antique Persian Rug: 9,200$</li>
    <li>Ming Dynasty Vase: 18,750$</li>
  `;
  activeListingsCol.append(activeListingsTitle, activeListingsList);

  // Winning Bids Column
  const winningBidsCol = document.createElement('div');
  winningBidsCol.classList.add('col-md-3');
  const winningBidsTitle = document.createElement('h5');
  winningBidsTitle.classList.add('fw-bold');
  winningBidsTitle.textContent = 'Winning Bids';
  const winningBidsList = document.createElement('ul');
  winningBidsList.classList.add('list-unstyled');
  winningBidsList.innerHTML = `
    <li>Louis Vuitton Trunk: 8,500$</li>
    <li>Patek Philippe Watch: 32,000$</li>
    <li>Vintage Cartier Watch: 12,300$</li>
  `;
  winningBidsCol.append(winningBidsTitle, winningBidsList);

  // Credits and Avatar Update Button
  const creditsCol = document.createElement('div');
  creditsCol.classList.add('col-md-3');
  const creditsTitle = document.createElement('h5');
  creditsTitle.classList.add('fw-bold');
  creditsTitle.textContent = 'Credits';
  const creditsValue = document.createElement('p');
  creditsValue.textContent = `${profileData.credits || 0}`;
  const updateAvatarButton = document.createElement('button');
  updateAvatarButton.classList.add('btn', 'btn-warning', 'text-dark', 'fw-bold');
  updateAvatarButton.textContent = 'Update Avatar';
  creditsCol.append(creditsTitle, creditsValue, updateAvatarButton);

  statsRow.append(latestBidsCol, activeListingsCol, winningBidsCol, creditsCol);

  // Append all sections to the container
  profileContainer.append(bannerRow, bioRow, statsRow);

  return profileContainer;
}
