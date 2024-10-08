import { avatarPlaceholder, profileBannerPlaceholder } from '../render/helpers/images';
import { submitAvatarUrl } from '../ui/listeners';
import { submitCreateListing } from '../ui/listeners/submitCreateListing';

/**
 * Creates and returns a profile container element, displaying user details, stats, listings, bids, and controls.
 *
 * This function generates the profile page layout, including the user's banner, avatar, bio, latest bids,
 * active listings, winning bids, credits, and buttons to update the avatar or create a new listing.
 * It organizes the content in a responsive and user-friendly format.
 *
 * @function profileTemplate
 * @param {Object} profileData - The data object containing user profile information.
 * @param {Object} listings - The user's listings and wins data.
 * @param {Array<Object>} bids - The user's latest bids.
 * @returns {HTMLDivElement} The created profile container element.
 *
 * @example
 * const profilePage = profileTemplate(profileData, listings, bids);
 * document.body.appendChild(profilePage);
 */

export function profileTemplate(profileData, listings, bids) {
  const profileContainer = document.createElement('div');
  profileContainer.classList.add('container-fluid', 'bg-dark', 'position-relative');

  /* Banner and Profile Section */
  const bannerRow = document.createElement('div');
  bannerRow.classList.add('row');

  // Banner Image
  const bannerCol = document.createElement('div');
  bannerCol.classList.add('col-12');
  const banner = document.createElement('img');
  banner.classList.add('img-fluid', 'w-100', 'object-fit-cover');
  banner.style.height = '312px';
  banner.src = profileData.banner.url || profileBannerPlaceholder;
  banner.alt = profileData.banner.alt || 'Profile banner';

  if (banner.src === 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&h=500&w=1500') {
    banner.src = profileBannerPlaceholder;
  } else {
    banner.src = profileData.banner.url;
  }
  bannerCol.append(banner);
  bannerRow.append(bannerCol);

  // Avatar (Overlapping the Banner)
  const avatarCol = document.createElement('div');
  avatarCol.classList.add('col-12', 'd-flex', 'justify-content-center', 'position-absolute');
  avatarCol.style.top = '150px';

  const avatar = document.createElement('img');
  avatar.classList.add('img-fluid', 'rounded', 'object-fit-cover', 'border', 'border-3', 'border-light');
  avatar.style.width = '300px';
  avatar.style.height = '200px';
  avatar.src = profileData.avatar?.url || avatarPlaceholder;
  avatar.alt = profileData.avatar?.alt || 'Profile avatar';

  if (avatar.src === 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&h=400&w=400') {
    avatar.src = avatarPlaceholder;
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
  profileTitle.textContent = profileData.name || 'Unknown User';
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
  latestBidsTitle.classList.add('fw-bold', 'text-uppercase', 'linear-text-color');
  latestBidsTitle.textContent = 'Latest Bids';
  const latestBidsList = document.createElement('ul');
  latestBidsList.classList.add('list-unstyled');

  // Loop through bids and display them
  if (bids && bids.length > 0) {
    bids
      .reverse()
      .slice(0, 6)
      .forEach((bid) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${bid.amount}$ on ${new Date(bid.created).toLocaleDateString()}`;
        latestBidsList.append(listItem);
      });
  } else {
    const listItem = document.createElement('li');
    listItem.textContent = 'No bids available';
    latestBidsList.append(listItem);
  }

  latestBidsCol.append(latestBidsTitle, latestBidsList);

  // Active Listings Column
  const activeListingsCol = document.createElement('div');
  activeListingsCol.classList.add('col-md-3');
  const activeListingsTitle = document.createElement('h5');
  activeListingsTitle.classList.add('fw-bold', 'text-uppercase', 'linear-text-color');
  activeListingsTitle.textContent = 'Active Listings';
  const activeListingsList = document.createElement('ul');
  activeListingsList.classList.add('list-unstyled');

  // Loop through active listings
  if (listings.listings && listings.listings.length > 0) {
    listings.listings.slice(0, 6).forEach((listing) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${listing.title}: Ends on ${new Date(listing.endsAt).toLocaleDateString()}`;
      activeListingsList.append(listItem);
    });
  } else {
    const listItem = document.createElement('li');
    listItem.textContent = 'No active listings';
    activeListingsList.append(listItem);
  }

  activeListingsCol.append(activeListingsTitle, activeListingsList);

  // Winning Bids Column
  const winningBidsCol = document.createElement('div');
  winningBidsCol.classList.add('col-md-3');
  const winningBidsTitle = document.createElement('h5');
  winningBidsTitle.classList.add('fw-bold', 'text-uppercase', 'linear-text-color');
  winningBidsTitle.textContent = 'Winning Bids';
  const winningBidsList = document.createElement('ul');
  winningBidsList.classList.add('list-unstyled');

  // Assuming you have a way to determine winning bids
  if (listings.wins && listings.wins.length > 0) {
    let hasWinningBids = false;

    listings.wins.forEach((listing) => {
      const highestBid = listing.bids && listing.bids[0];
      if (highestBid?.bidder.name === profileData.name) {
        const listItem = document.createElement('li');
        listItem.textContent = `${listing.title}: ${highestBid.amount}$`;
        winningBidsList.append(listItem);
        hasWinningBids = true;
      }
    });

    if (!hasWinningBids) {
      const listItem = document.createElement('li');
      listItem.textContent = 'No winning bids';
      winningBidsList.append(listItem);
    }
  } else {
    const listItem = document.createElement('li');
    listItem.textContent = 'No listings won, yet';
    winningBidsList.append(listItem);
  }

  winningBidsCol.append(winningBidsTitle, winningBidsList);

  // Credits and Avatar Update Button
  const creditsCol = document.createElement('div');
  creditsCol.classList.add('col-md-3');
  const creditsTitle = document.createElement('h5');
  creditsTitle.classList.add('fw-bold', 'text-uppercase', 'linear-text-color');
  creditsTitle.textContent = 'Credits';
  const creditsValue = document.createElement('p');
  creditsValue.textContent = `${profileData.credits || 0}`;
  creditsCol.append(creditsTitle, creditsValue);

  statsRow.append(latestBidsCol, activeListingsCol, winningBidsCol, creditsCol);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('d-flex', 'flex-wrap', 'justify-content-center', 'justify-content-lg-end', 'gap-2', 'mt-3');

  // Update Avatar Button
  const updateAvatarButton = document.createElement('button');
  updateAvatarButton.classList.add('btn', 'btn-cb-primary', 'me-2');
  updateAvatarButton.type = 'button';
  updateAvatarButton.id = 'updateAvatarButton';
  updateAvatarButton.setAttribute('data-bs-toggle', 'modal');
  updateAvatarButton.setAttribute('role', 'dialog');
  updateAvatarButton.setAttribute('data-bs-target', '#avatarModal');
  updateAvatarButton.textContent = 'Update Avatar';

  updateAvatarButton.onclick = () => {
    const avatarModal = document.getElementById('avatarModal');
    avatarModal.style.top = `${window.scrollY}px`;
    avatarModal.classList.add('show');
    document.body.classList.add('overflow-hidden');
    submitAvatarUrl();
  };

  const createListingModal = document.getElementById('createListingModal');

  // Create Listing Button
  const createListingButton = document.createElement('button');
  createListingButton.classList.add('btn', 'btn-cb-primary', 'me-2');
  createListingButton.type = 'button';
  createListingButton.id = 'createListingModalButton';
  createListingButton.setAttribute('data-bs-toggle', 'modal');
  createListingModal.setAttribute('role', 'dialog');
  createListingButton.setAttribute('data-bs-target', '#createListingModal');
  createListingButton.textContent = 'Create Listing';

  createListingButton.onclick = () => {
    createListingModal.style.top = `${window.scrollY}px`;
    createListingModal.classList.add('show');
    document.body.classList.add('overflow-hidden');
    submitCreateListing();
  };

  buttonContainer.append(updateAvatarButton, createListingButton);

  // Append all sections to the container
  profileContainer.append(bannerRow, bioRow, statsRow, buttonContainer);

  return profileContainer;
}
