const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = require('../../db');
const {check_api_token} = require('./middleware');

//import routes and use them as middlewares
const usersRoute = require("./users");
const gamesRoute = require("./games");

router.use('/users', usersRoute);
router.use(check_api_token);
router.use('/games', gamesRoute);

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// middlewares (e.g. user authentication by app.use(auth))

module.exports = router;
