const express = require('express');
const router = express.Router();
const Player = require('../models/player');

//--------methods

router.get('/', (req, res) => {
    Player.find().then(players => res.json(players))
    .catch(err => console.log(err));
    console.log("returned:", res.json)
})

router.post('/', (req, res) => {
    const {/*field, field*/} = req.body;
    const newPlayer = new Player({
        //name: name, email: email
    })
    newPlayer.save()
        .then(() => res.json({
            message: "Created account successfully"
        }))
        .catch(err => res.status(400).json({
            "error": err,
            "message": "Error creating account"
        }))
})

module.exports = router;