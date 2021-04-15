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
    user: body
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
    user: targetUser
  })
})

//sign out
router.delete('/session', (req, res) => {
    // delete req.session.user
    // TODO: destroy token
    res.status(204).json({})
  })


module.exports = router;

//delete: User.remove({_id: req.params.userId})
//update: User.updateOne({_id: req.params.userId} {$set:{}})