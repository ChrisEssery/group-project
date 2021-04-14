const express = require('express');
const router = express.Router();
const User = require("../models/user");


//get all useres
router.get('/', async (req, res) => {
    try{
        const users = await User.find();
        res.json(users)
    }catch(err){
        res.json({message:err});
    }
  });

router.get('/:userId', async (req, res) => {
    try{
        const user = await User.findById(req.params.userId);
        res.json(user)
    }catch(err){
        res.json({message:err});
    }
    

})

router.post('/', async (req, res) => {
    const user = new User ({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })

    // user.save().then(data => {
    //     res.status(201).json(data)
    // })
    // .catch(err => {
    //     res.json({message: err});
    // })
    try{
        const savedUser = await(user.save());
        res.json(savedUser);
    }catch(err){
        res.json({message:err});
    }
    


})

module.exports = router;

//delete: User.remove({_id: req.params.userId})
//update: User.updateOne({_id: req.params.userId} {$set:{}})