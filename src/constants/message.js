/**
 * Message constants
 */
const messages = {
  INVALID_INPUT_PARAMS: "Invalid input parameters.",
  INVALID_AUTH_TOKEN: "Auth token is invalid.",
  AUTH_ERROR: "Sorry, your request could not be authenticated",
  INTERNAL_SERVER_ERROR: "The request was not completed.",
  INVALID_PASSWORD: "Invalid password.",
  USER_EMAIL_DUPLICATED: "Sorry, this user already exists.",
  ACCOUNT_NOT_EXIST: "This user does not exist.",
  ACCOUNT_EXIST: "This user does already exist.",
  INVALID_OLD_PASSWORD: "Old password does not match!",
  CHANGEPWD_ERROR: "Sorry, you can not change the password.",
  DATA_NOT_EXIST: "The data does not exists.",
  UPLOAD_FAILED: "Sorry, Uploading failed.",
  SEND_CHALLENGE_ERROR: "Sorry, sending challenge email failed.",
  API_KEY_REQUIRED: "API key is required for this functionality",
};

module.exports = messages;
