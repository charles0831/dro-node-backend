const authModel = require("../models/auth");
const code = require("../constants/code");
const message = require("../constants/message");
const jwt = require("jsonwebtoken");
const key = require("../config/key");

const authService = {
  login: login,
  signup: signup,
};

function login(data) {
  return new Promise((resolve, reject) => {
    authModel
      .login(data)
      .then((data) => {
        if (data) {
          let token = jwt.sign(
            { uid: data.uid, role: data.role },
            key.JWT_SECRET_KEY,
            {
              expiresIn: key.TOKEN_EXPIRATION,
            }
          );
          resolve({
            code: code.OK,
            message: "Successfully logged in",
            data: { token: token },
          });
        }
      })
      .catch((err) => {
        if (err.message === message.INTERNAL_SERVER_ERROR)
          reject({
            code: code.INTERNAL_SERVER_ERROR,
            message: err.message,
            data: {},
          });
        else reject({ code: code.BAD_REQUEST, message: err.message, data: {} });
      });
  });
}

function signup(data) {
  return new Promise((resolve, reject) => {
    authModel
      .signup(data)
      .then((data) => {
        if (data) {
          resolve({
            code: code.OK,
            message: "Sucessfully registered!",
            data: {},
          });
        }
      })
      .catch((err) => {
        if (err.message === message.INTERNAL_SERVER_ERROR)
          reject({
            code: code.INTERNAL_SERVER_ERROR,
            message: err.message,
            data: {},
          });
        else reject({ code: code.BAD_REQUEST, message: err.message, data: {} });
      });
  });
}

module.exports = authService;
