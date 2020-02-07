var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  var result = 0;
  for (var i = 0; i < 100; i++) {
    result += i;
  }
  res
    .status(200)
    .json({ success: true, data: "healthy!!!!!b" + result.toString() });
});

module.exports = router;
