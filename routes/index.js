var express = require('express');
var router = express.Router();
var messages = require('../public/javascripts/messages')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages : messages });
});

module.exports = router;
