var express = require('express');
var router = express.Router();

/* GET boards page. */
router.get('/', function(req, res, next) {
  res.redirect('/boards');
});

module.exports = router;
