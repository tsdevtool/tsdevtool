var express = require("express");
var router = express.Router();
router.use("/", function (req, res) {
  res.render("product.ejs");
});
module.exports = router;
