export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@stud\.noroff\.no$/
  return emailRegex.test(email)
}
