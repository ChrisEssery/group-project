const express = require('express');
const router = express.Router();
const Game = require("../models/game");

router.get('/', (req, res) => {
    res.send('games api works');
  });


module.exports = router;