const express = require('express');
const router = express.Router();
const MemoryGame = require("../models/games/memoryGame");
const Connect4 = require("../models/games/connect4");
const {check_api_token} = require('./middleware');

router.use(check_api_token);
router.get('/', (req, res) => {
    res.send('games api works');
  });


module.exports = router;