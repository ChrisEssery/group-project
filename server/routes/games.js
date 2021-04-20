const express = require('express');
const router = express.Router();
const User = require("../models/user");
const Game = require("../models/games/game");
const {check_api_token} = require('./middleware');

router.use(check_api_token);
router.get('/', (req, res) => {
    res.send('games api works');
  });

//Add a new game instance
router.post('/:gamename', async (req, res) => {
  if(req.params.gamename==='memorygame'){gamename='Memory Game'}
  else if(req.params.gamename==='connect4'){gamename = 'Connect 4'}
  else{
    res.status(400).json({error: "invalid parameter of gamename"})
  }
  body = req.body
  gameInstance = new Game ({
    gameName: gamename,
    players: body.players,
    // diffcultylevel: body.diffcultylevel
  })
  await gameInstance.save(gameInstance);
  players = body.players
  players.forEach(player => updateUserGameHistory(player, players, gamename))
  return res.status(201).json({result: "game added"})
})

async function updateUserGameHistory(player, players, gamename)
{
  const targetPlayer = await User.findOne({username: player.username})
  newPlayedWith = []
  const newGame = {
    gamename: gamename,
    result: player.result,
    playedWith: newPlayedWith
  }
  players.filter(player => player.username!==targetPlayer.username)
     .forEach(otherPlayer => newGame.playedWith.push(otherPlayer.username))
  try{
    await targetPlayer.gamesPlayed.push(newGame)
  }catch(err){
    return res.status(400).json({error: "fail to add the game, invalid gamename/gameresult"})
  }
  await targetPlayer.save(targetPlayer)
}


module.exports = router;