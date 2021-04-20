const express = require('express');
const router = express.Router();
const User = require("../models/user");
const md5 = require('blueimp-md5');
const jwt = require('jwt-simple');
const moment = require('moment');



router.get('/:userId', async (req, res) => {
    try{
        const user = await User.findById(req.params.userId);
        res.json(user)
    }catch(err){
        res.json({message:err});
    }
})

//user register
router.post('/', async (req, res) => {
    const body = req.body;

    //encrypt password
    body.password = md5(body.password)

    //create new user
    const user = new User ({
        username: body.username,
        password: body.password,
        email: body.email
    })

    //save to database
    try{
        await user.save(user);
        
    }catch(err){
        return res.status(409).json({error: "username already exists"});
    }

    req.session.user = body;

    // generate token
    const token = jwt.encode({
    iss: body.id, 
    exp: moment().add( 7, 'days').valueOf()}, 'secret')
    delete body.password
    res.status(201).json({
    token,
    user: body.username
  })
})

//user log in
router.post('/session', async (req, res) => {
    const body = req.body;

    const targetUser = await User.findOne({username: body.username});

    //check username
    if (!targetUser) {
        return res.status(401).json({
            error: 'invalid username'
        })
    }

    //check password
    if (md5(body.password) !== targetUser.password) {
        return res.status(401).json({
           error: 'invalid password'
        })
    }

    req.session.user = targetUser;

    // generate token
    const token = jwt.encode({
    iss: targetUser.id, 
    exp: moment().add( 7, 'days').valueOf()}, 'secret')

    delete targetUser.password;
    res.status(201).json({
    token,
    user: body.username,
  })
})

//sign out
router.delete('/session', (req, res) => {
    // delete req.session.user
    // TODO: destroy token
    res.status(204).json({})
  })

//Get a user 's personal information
router.get('/info/:username', async (req, res) => {
    const user = await User.findOne({username: req.params.username})
    if(!user){
        return res.status(404).json({
            error: 'invalid username'
        })
    }
    return res.status(200).json({
        username: user.username,
        email: user.email,
        name: user.name,
        surname: user.surname,
        age: user.age,
        gender: user.gender,
        location: user.location
    })
})

//Update a user's personal information
router.put('/info/:username', async (req, res) => {
    const body = req.body
    const user = await User.findOne({username: req.params.username})
    if(!user){
        return res.status(404).json({
            error: 'invalid username'
        })
    }
    const filter = {username: req.params.username}
    const update = {
        email: body.email,
        name: body.name,
        surname: body.surname,
        age: body.age,
        gender: body.gender,
        location: body.location
    }
    await User.findOneAndUpdate(filter, update)
    return res.status(201).json({
        result: "updated successfully"
    })
})

//Get a user's friendlist
router.get('/friends/:username', async (req, res) => {
    const user = await User.findOne({username: req.params.username})
    if(!user){
        return res.status(404).json({
            error: 'invalid username'
        })
    }
    return res.status(200).json({
        friends: user.friends
    })
})

//Add a friend to a user's friendlist
router.post('/friends/:username', async (req, res) => {
    const user = await User.findOne({username: req.params.username})
    if(!user){
        return res.status(404).json({
            error: 'invalid username'
        })
    }
    newFriend = req.body.friendName
    if(!newFriend){
        return res.status(400).json({
            error: 'bad request'
        })
    }
    await user.friends.push(newFriend)
    await user.save(user)
    newuser = await User.findOne({username: req.params.username});
    return res.status(201).json({
        result: "friend " + newFriend + " is added successfully",
        friends: newuser
    })
})

//Get a user's game history
router.get('/games/:username/:limit', async (req, res) =>{
    limit = req.params.limit
    targetUser = await User.findOne({username:req.params.username})
    // .sort({date: -1}).limit(limit) , {gamesPlayed: 1}
    games = targetUser.gamesPlayed
    var ret = games.sort(function(a, b) {b.date - a.date}).slice(limit)
    res.status(200).json({gamesPlayed: ret})
    // targetUser = await User.findOne(req.params.username)
    // limit = req.params.limit
    // targetUser.find().sort({date: -1}).limit(limit).then(item => {
    //   console.log(item)
    // })
  
})

module.exports = router;

//delete: User.remove({_id: req.params.userId})
//update: User.updateOne({_id: req.params.userId} {$set:{}})