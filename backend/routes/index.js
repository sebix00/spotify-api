var express = require("express");
var router = express.Router();
const path = require("path");
const request = require("request");

var SpotifyWebApi = require("spotify-web-api-node");
const { routes } = require("../app");
scopes = [
  "user-read-private",
  "user-read-email",
  "playlist-modify-public",
  "playlist-modify-private",
];

require("dotenv").config();

var spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_API_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.CALLBACK_URL,
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/login", (req, res) => {
  var html = spotifyApi.createAuthorizeURL(scopes);
  console.log(html);
  res.sendFile(path.join(__dirname, "index.html"));
  res.send(html + "&show_dialog=true");
});

router.get("/callback", async (req, res) => {
  const { code } = req.query;
  console.log(code);
  try {
    var data = await spotifyApi.authorizationCodeGrant(code);
    const { access_token, refresh_token } = data.body;
    spotifyApi.setAccessToken(access_token);
    spotifyApi.setRefreshToken(refresh_token);

    res.redirect("http://localhost:3002/");
  } catch (err) {
    res.redirect("/#/error/invalid token");
  }
});

router.get("/userinfo", async (req, res) => {
  try {
    var result = await spotifyApi.getMe();
    console.log(result.body);
    res.status(200).send(result.body);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/playlists", async (req, res) => {
  try {
    var result = await spotifyApi.getUserPlaylists();
    console.log(result.body);
    res.status(200).send(result.body);
  } catch (err) {
    res.status(400).send(err);
  }
});

// router.get("/search", async (req, res) => {
//   try {
//     const result = await spotifyApi.getArtistAlbums("Krawczyk");
//     console.log(result.body);
//     res.status(200).send(result.body);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

router.get("/search/:aritst", async function (req, res) {
  const code = await spotifyApi.clientCredentialsGrant();
  const token = code.body["access_token"];
  console.log("token" + token);

  let authOptions = {
    url:
      "https://api.spotify.com/v1/search?q=" +
      req.params.aritst +
      "&type=track&market=US&limit=2&offset=2",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  request.get(authOptions, async function (error, response, body) {
    if (error) {
      res.send(error);
    }
    const re = await JSON.parse(body);
    const data = re.tracks.items.map((item) => ({
      name: item.name,
      id: item.id,
    }));

    res.send(data);
  });
});
module.exports = router;
