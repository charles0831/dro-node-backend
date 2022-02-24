const db = require("../models");
const code = require("../constants/code");
const User = db.user;

exports.getUser = (req, res) => {
  User.find({
    // email: req.body.email,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ code: code.INTERNAL_SERVER_ERROR, message: err });
      return;
    }
    if (!user) {
      return res
        .status(404)
        .send({ code: code.NOT_FOUND, message: "User Not found." });
    }
    res.status(200).send({
      code: code.OK,
      message: "Successfully logged in",
      data: user,
    });
  });
};
