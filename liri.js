require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var axios = require('axios');
// var fs = require("fs");
// var request = require('request')
// var bandsintown = require('bandsintown')
var userSubject = process.argv[2];
var userChoice = process.argv[3];



comLine(userSubject,userChoice)


function comLine(userSubject,userChoice ) {
  switch (userSubject) {
    case 'concert-this':
          bands(userChoice);
          break;
    case 'spotify-this-song':
    console.log('hello world' + userChoice);
          song(userChoice);
          break;
    case 'movie-this':
          movie_this(userChoice);
          break;
     default:
          console.log("Please use one of the following options to before making a selection: 'concert-this' 'spotify-this-song' 'movie-this' ")
console.log(userChoice)
  }
}

function song(userSubject){
  if (userChoice === undefined){
    userChoice = "The Sign"
  }

spotify.search({ type: 'track', query: userSubject }, 
function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    var songs = data.tracks.items;

    for (var i = 0; i < songs.length; i++){
        console.log("============SONG INFO===================")
        console.log("Artist: " + songs[i].artists[0].name);
        console.log("Song name: " + songs[i].name);
        console.log("Preview URL: " + songs[i].preview_url);
        console.log("Album name: " + songs[i].album.name);
        console.log("=========================================" + "\n")
    };
  
  });
}


function movie_this(userSubject) {

  var nodeArgs = process.argv;

  var movie = "";

  for (var i = 2; i < nodeArgs.length; i++) {
    if (i > 2 && i < nodeArgs.length){
      movie = movie + "+" + nodeArgs[i];
    } 
    else{
      movie += nodeArgs[i];
    }
  }
 

  
  var queryUrl = "http://www.omdbapi.com/?t=" + movie +
    "&y=&plot=short&apikey=87ab13ab";

    axios.get(queryUrl).then(
      function(response) {
        console.log("Release Year: " + response.data.Year);
      }
    );
    
  
      console.log("=============MOVIE INFO=========")
      console.log("Movie Title: ",response.data.Title);
      console.log("Year of Release: ",response.data.Year);
      console.log("Country: ",response.data.Country);
      console.log("Language: ",response.data.Language);
      console.log("Plot: ",response.data.Plot);
      console.log("Actors: ",response.data.Actors);
      console.log("Rotten Tomatoes: ",response.data.Ratings[1])
      console.log("IMDB Review: ",response.data.imdbRating)
      console.log("=========================================" + "\n")
    }
  





function bands(userChoice){
  var queryUrl = "https://rest.bandsintown.com/artists/" + userSubject + "/events?app_id=codingbootcamp"
      request(queryUrl, function(error, response, body){
       var bands = JSON.parse(body);
       for (var i = 0; i < bands.length; i++ ) {
        console.log("=============" + (userSubject) + "==============");
        console.log("Venue Name: ", bands[i].venue.name);
        console.log("City: ", bands[i].venue.city);
        console.log("Region: ", bands[i].venue.region);
        console.log("Country: ", bands[i].venue.country);
        console.log("Date: ", bands[i].datetime);
        console.log("=========================================" + "\n")

       };
      });
  };

bands()
movie_this()
music()



