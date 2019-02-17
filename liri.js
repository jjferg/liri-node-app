require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var axios = require('axios');
var fs = require("fs");
var userOption = process.argv[2]; 
var inputParameter = process.argv[3];

var axios = require("axios");

// Then run a request with axios to the OMDB API with the movie specified
// axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
//   function(response) {
//     console.log("The movie's rating is: " + response.data.imdbRating);
//   }
// );

 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });



// function searchSpotify(construct) {
//   var artist = construct
//   spotify.search({
//       type: 'track',
//       query: artist
//     },
//     function (err, data) {
//       if (err) {
//         return console.log('Error occurred: ' + err);
//       }
//       // console.log( "All Tracks:", data.tracks.items );
//       var track = (data.tracks.items[0])
//       console.log("Artists Name: ", track.artists[0].name)
//       console.log("Track Name: ", track.name)
//       console.log("Track Preview: ", track.preview_url)
//       console.log("Album Name: ", track.album.name)
//       console.log(script + '' + log.txt)

//     })

// }

