var express = require('express')
var router = express.Router()
var moment = require('moment')
var messages = require('../public/javascripts/messages')


router.get('/', function(req, res, next){
    res.render('form', {tile : 'New Message'})
})

router.post('/', function(req, res, next){
    const newMessage = {
        title: req.body.title,
        description: req.body.description,
        username: req.body.username,
        date: moment()
          .startOf('hour' - 1)
          .fromNow(),
      };
      messages.unshift(newMessage);
      res.redirect('/');
});

module.exports = router;