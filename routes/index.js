var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DotProductify', text: 'Does what it says on the tin' });
});

module.exports = router;
