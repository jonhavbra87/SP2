/**
 * Validates if the provided email is a valid Noroff student email.
 *
 * This function checks if the email address follows the pattern of a Noroff student email,
 * which must end with `@stud.noroff.no`. It returns a boolean indicating whether the email is valid.
 *
 * @function validateEmail
 * @param {string} email - The email address to be validated.
 * @returns {boolean} `true` if the email matches the Noroff student pattern, `false` otherwise.
 *
 * @example
 * validateEmail('student@stud.noroff.no'); // true
 * validateEmail('user@example.com'); // false
 */

export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@stud\.noroff\.no$/;
  return emailRegex.test(email);
}
