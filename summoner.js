const router = require("express").Router();
const axios = require("axios");

//Route to get general account data
router.route("/username").post((req, res) => {
  console.log("Username from backend: " + req.body.summonerName);

  let options = {
    method: "GET",
    url: `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.body.summonerName}`,
    headers: { "X-Riot-Token": "RGAPI-b245eade-3552-415f-8e32-b4a405c983d9" },
  };
  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

//Route to get the user's ranked stats, if any
router.route("/rank").post((req, res) => {
  console.log("Summoner iD from backend: " + req.body.summonerId);
  let options = {
    method: "GET",
    url: `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${req.body.summonerId}`,
    headers: { "X-Riot-Token": "RGAPI-b245eade-3552-415f-8e32-b4a405c983d9" },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error("error");
    });
});

// Route to get a person's last 15 matches using their account id
router.route("/matches").post((req, res) => {
  const options = {
    method: "GET",
    url: `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${req.body.accountId}?endIndex=15`,
    headers: { "X-Riot-Token": "RGAPI-b245eade-3552-415f-8e32-b4a405c983d9" },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

module.exports = router;
