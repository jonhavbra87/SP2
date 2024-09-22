/**
 * Imports custom CSS and initializes the application by calling the router.
 *
 * This script imports the required custom SCSS styles and the application's router logic.
 * It then executes the `router()` function to handle routing within the application. This script is executed on page load.
 *
 * @module init
 * @requires ../scss/styles.scss
 * @requires ./router.js
 *
 * @example
 * // This script is executed on page load to apply styles and initialize routing:
 * router();
 */

// Import our custom CSS
import '../scss/styles.scss';

// Import our custom JS
import router from './router.js';

router();
