const express = require("express");
const router = express.Router();
const code = require("../constants/code");
// const authService = require("../services/auth");

router.get("/", login);

function login(req, res) {
  return res.json({
    code: code.OK,
    message: "You clicked Login button",
    data: "You called backend api successfuly",
  });
}

module.exports = router;
