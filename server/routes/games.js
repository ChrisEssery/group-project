const express = require('express');
const router = express.Router();
const GameInstance = require("../models/gameInstance");

router.get('/', (req, res) => {
    res.send('games api works');
  });


module.exports = router;