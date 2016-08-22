var express = require('express');
var router = express.Router();

console.log('rota glide2');

/* GET users listing. */
router.get('/glide', function(req, res, next) {
	console.log('localizando glide2');
  res.render('glide2');
});

module.exports = router;