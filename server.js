var Twit = require('twit');

var T = new Twit({
    consumer_key:         'qwcSxkl8GqhYZOn4MMFW5oY11'
  , consumer_secret:      'HjDdwD9HLHY5Mg82VYtiCWkFdlLoOtmWbpLw1iuhEuzFWy6IKP'
  , access_token:         '18745434-MVBSt2HCYb48130cnmVUVaW87E0jcx5fCabOEWlc2'
  , access_token_secret:  'frgHDZsqHVNHHlePxwYNalfe79aOgwOHnZqJuLgpdKFJd'
})

var stream = T.stream('statuses/filter', { track: '#apple' })


stream.on('tweet', function (tweet) {

  console.log(tweet.text);

});