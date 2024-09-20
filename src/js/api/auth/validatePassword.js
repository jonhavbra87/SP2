export function validatePassword(password) {
  // Check if password contains at least one lowercase letter, one uppercase letter, one number and is at least 8 characters long
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  // Return true if the password matches the regex (valid), otherwise false
  return passwordRegex.test(password);
}
