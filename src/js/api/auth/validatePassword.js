/**
 * Validates if the provided password meets security requirements.
 *
 * The password must contain at least one lowercase letter, one uppercase letter,
 * one digit, and must be at least 8 characters long. The function returns `true`
 * if the password meets these criteria, otherwise `false`.
 *
 * @function validatePassword
 * @param {string} password - The password to be validated.
 * @returns {boolean} `true` if the password is valid, `false` otherwise.
 *
 * @example
 * validatePassword('Password123'); // true
 * validatePassword('password'); // false
 */

export function validatePassword(password) {
  // Check if password contains at least one lowercase letter, one uppercase letter, one number and is at least 8 characters long
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  // Return true if the password matches the regex (valid), otherwise false
  return passwordRegex.test(password);
}
