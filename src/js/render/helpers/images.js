/**
 * Exports media assets, including avatar and profile banner placeholders, and logos.
 *
 * This module imports various media assets such as placeholders and logos from the `assets` directory
 * and re-exports them for use in other parts of the application. I made this so Vite would bundle the images.
 *
 * @module assets
 * @exports avatarPlaceholder - The placeholder image for avatars.
 * @exports profileBannerPlaceholder - The placeholder image for profile banners.
 * @exports logo - The primary logo of the application.
 * @exports logoSmall - A smaller version of the application logo.
 */

import avatarPlaceholder from '../../../assets/avatarPlaceholder.webp';
import profileBannerPlaceholder from '../../../assets/profileBannerPlaceholder.png';

import logo from '../../../assets/logo.png';
import logoSmall from '../../../assets/logoSmall.png';

export { avatarPlaceholder, profileBannerPlaceholder, logo, logoSmall };
