var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('assassinscreed', { title: 'ASSASSINS CREED' });
});

module.exports = router;
