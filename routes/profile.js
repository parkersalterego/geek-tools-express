const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Profile = require('../models/profiles');

router.get('/profile', (req, res) => {
    console.log('Grabbing all Profiles');
    Profile.getProfile( (err, profile) => {
    if(err) {
        throw err;
    }
    res.json(profile);
    });
});

router.get('/profile/:_id', (req, res) => {
    console.log('Grabbing a Profile by ID');
    Profile.getProfileById(req.params._id, (err, profile) => {
    if(err) {
        throw err;
    }
    res.json(profile);
    });
});

module.exports = router;