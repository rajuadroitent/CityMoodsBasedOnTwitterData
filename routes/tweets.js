var express = require('express');
var router = express.Router();
var Tweet = require('../models/Tweet.model');
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


/* GET home page. */
router.get('/', function(req, res, next) {
  Tweet.find({}, function (err, tweets) {
    res.json(tweets);
  });
});

router.get('/:id', function(req, res, next) {
  Tweet.find({}, function (err, tweets) {
    res.json(tweets);
  });
});

router.post('/insert', function(req, res) {
  var content=req.body.content;
  var user=req.body.user;

  var tweet = new Tweet({
    content: content,
    user: user
  });

  tweet.save(function(err) {
    if (err) throw err;

    console.log('tweet saved successfully!');
  });
  res.send('success');

});



module.exports = router;
