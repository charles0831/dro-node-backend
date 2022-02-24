const db = require("../models");
const User = db.user;
const code = require("../constants/code");

checkDuplicateUsernameOrEmail = (req, res, next) => {
  User.findOne({
    email: req.body.email,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ code: code.INTERNAL_SERVER_ERROR, message: err });
      return;
    }
    if (user) {
      res.status(400).send({
        code: code.INVALID_INPUT_PARAMS,
        message: "Failed! Email is already in use!",
      });
      return;
    }
    next();
  });
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
};

module.exports = verifySignUp;
