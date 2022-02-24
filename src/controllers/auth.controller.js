const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const code = require("../constants/code");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt-nodejs");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, salt),
  });
  user.save((err) => {
    if (err) {
      res.status(500).send({ code: code.INTERNAL_SERVER_ERROR, message: err });
      return;
    }
    res.status(200).send({
      code: code.OK,
      message: "User was registered successfully!",
      data: {},
    });
  });
};

exports.signin = (req, res) => {
  User.findOne({
    email: req.body.email,
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
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({
        code: code.UNAUTHORIZED,
        accessToken: null,
        message: "Invalid Password!",
      });
    }
    var token = jwt.sign({ id: user.id }, config.JWT_SECRET_KEY, {
      expiresIn: 86400, // 24 hours
    });
    res.status(200).send({
      code: code.OK,
      message: "User was logged in successfully!",
      data: {
        id: user._id,
        username: user.username,
        email: user.email,
        token: token,
      },
    });
  });
};
