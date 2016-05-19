var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TweetSchema = new Schema({
    content:String,
    user:String,
    created_at:String
});

var Tweet = mongoose.model('Tweet', TweetSchema);

module.exports = Tweet;