// Returns an array of the username and domain for a standard email address
// ex. username@domain.com || USERNAME@DOMAIN.COM

function emailParts(email) {
  return email.toLowerCase().split("@");

}
