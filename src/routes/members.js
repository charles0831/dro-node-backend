let express = require("express");
let router = express.Router();
let memberService = require("../services/members");
let authMiddleware = require("../middleware/auth");

router.use(authMiddleware.checkToken);

router.get("/", getMemberList);

function getMemberList(req, res) {
  let data = {
    page: req.query.page,
    rowsPerPage: req.query.rowsPerPage,
  };

  memberService
    .getMemberList(data)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
}

module.exports = router;
