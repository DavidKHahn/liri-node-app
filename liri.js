require("dotenv").config();

var keys = require('./keys.js');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var updateTweets = function () {

    var params = { screen_name: 'davidhahnLiri' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].created_at);
                console.log(' ');
                console.log(tweets[i].text);
            }
        }
    });

}
var getArtists = function (artist) {
    return artist.name;
}
var getSpotify = function (songName) {


    spotify.search({ type: 'track', query: songName }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++) {
            console.log(i);
            console.log('artist name: ' + songs[i].artists.map(
                getArtists));
            console.log('song name: ' + songs[i].name);
            console.log('preview song: ' + songs[i].preview_url);
            console.log('album: ' + songs[i].album.name);
        }
    });

    var MovieData = function (movieName) {

        request("http://www.omdbapi.com/?t=" + moveName + "&y=&plot=short&apikey=trilogy", function (error, response, body) {

            if (!error && response.statusCode === 200) {
                console.log("\nMovie Title : " + JSON.parse(body).Title);
                console.log("\nYear Released : " + JSON.parse(body).Year);
                console.log("\nIMDB rating : " + JSON.parse(body).imdbRating);
                console.log("\nRotten Tomatoes Rating : " + JSON.parse(body).Ratings[1].Value);
                console.log("\nCountry of Production : " + JSON.parse(body).Country);
                console.log("\nStarring Actors : " + JSON.parse(body).Actors);
                console.log("\nMovie Plot: " + JSON.parse(body).Plot + "\n");
            }
        })
    }

    var runInsideThisFile = function () {

        fs.readFile('random.txt', 'utf8', function (err, data) {
            if (err) throw err;

            var dataArray = data.split(',');

            if (dataArray.length == 2) {
                choose(dataArray[0], dataArray[1]);
            } else if (dataArray.length == 1) {
                choose(dataArray[0]);

            }
        })

    }
    var choose = function (caseData, functionData) {
        switch (caseData) {
            case 'check-tweets':
                updateTweets();
                break;
            case 'spotify-song':
                getSpotify(functionData);
                break;
            case 'movie-search':
                movieData(functionData);
            default:
            case 'run-this-file':
                runInsideThisFile();
                break;
                console.log('LIRI is not sure what you mean');
        }
    }

    var runUserArg = function (argOne, argTwo) {
        choose(argOne, argTwo);
    };

    runUserArg(process.argv[2], process.argv[3]);
}