async function navigateToProfile() {
  try {
    // Retrieve profile data from localStorage
    const storedProfile = localStorage.getItem('profile');

    if (storedProfile) {
      const storedProfileData = JSON.parse(storedProfile);

      if (!storedProfileData || !storedProfileData.name) {
        throw new Error('Profile data is invalid.');
      }

      // Use the name from profile data
      const profileName = storedProfileData.name;
      const profileUrl = `/profile/?name=${profileName}`;
      console.log('Profile URL:', profileUrl);

      // Navigate to the profile page
      window.location.href = profileUrl;
    } else {
      throw new Error('No profile data found in localStorage.');
    }
  } catch (error) {
    alert('Failed to navigate to profile. Please try again.');
    throw new Error(`Error navigating to profile: ${error.message}`);
  }
}

export function navigateToProfileListener() {
  const navigateToProfileLissen = document.querySelector('#profileLink');
  navigateToProfileLissen.addEventListener('click', () => {
    navigateToProfile();
  });
}
