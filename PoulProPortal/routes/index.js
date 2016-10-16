var express = require('express');
var router = express.Router();
var path = require('path');
var app = express();



/* GET home page. */
router.get('/', function(req, res, next) {
  app.use(express.static(path.join(__dirname, 'public')));
  res.sendFile(path.resolve('public/html/index.html'));
});

module.exports = router;
