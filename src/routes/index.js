const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const membersRouter = require("./members");

router.use("/auth", authRouter);
router.use("/members", membersRouter);

module.exports = router;
