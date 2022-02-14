const dotenv = require('dotenv')
dotenv.config()

/**
 * Key configuration constants
 */

module.exports = {
  JWT_SECRET_KEY: process.env.JWT_SECRET,
  CRYPT_SECRET_KEY: process.env.CRYPT_SECRET,
  TOKEN_EXPIRATION: process.env.TOKEN_EXPIRATION,
}
