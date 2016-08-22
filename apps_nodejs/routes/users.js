var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/signin', function(req, res, next) {
  res.send('signin/popup.html');
});

module.exports = router;
