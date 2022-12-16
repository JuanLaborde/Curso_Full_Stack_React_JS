var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('silenthill', { title: 'SILENT HILL' });
});

module.exports = router;
