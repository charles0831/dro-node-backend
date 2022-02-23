const express = require("express");
const router = express.Router();
const authService = require("../services/auth");

router.post("/login", login);
router.post("/register", signup);

function login(req, res) {
  let data = {
    email: req.body.email,
    password: req.body.password,
  };
  authService
    .login(data)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
}

function signup(req, res) {
  let data = {
    email: req.body.email,
    password: req.body.password,
  };
  authService
    .signup(data)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
}

module.exports = router;
