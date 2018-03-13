console.log('this is loaded');

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};


//loaded from .env file
// //# Spotify API keys

// SPOTIFY_ID=3d12a918388b4dfd8a4f6352390bf09d
// SPOTIFY_SECRET=2c83297360f7488ab1a191662063c9de

// # Twitter API keys

// TWITTER_CONSUMER_KEY=lnJoPoBLsOXzPY2G57yyd1No7
// TWITTER_CONSUMER_SECRET=Ej7eggDVVylbtyPei1Gc45ylPa2H0XoZdGWSP2vhUiX2yEZwBk
// TWITTER_ACCESS_TOKEN_KEY=973350039778074624-SDwwldDsox1Oidk8weZSuZJLESaUkyY
// TWITTER_ACCESS_TOKEN_SECRET=01uXSbSnRUsNKTVGWL3cJop7HKP5BFMHtUnjGxafPUGPG
