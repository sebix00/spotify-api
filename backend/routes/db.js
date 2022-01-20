const express = require("express");
const router = express.Router();

const trackActions = require("../actions/trackActions");
console.log(trackActions);
//get favourite tracks
router.get("/tracks", trackActions.getAllTrack);

router.post("/tracks", trackActions.saveTrack);

router.delete("/tracks/:id", trackActions.deleteTrack);

module.exports = router;
