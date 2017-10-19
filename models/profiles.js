const mongoose = require('mongoose');
const config = require('../config/database');

// User Schema
const profileSchema = new mongoose.Schema({
    name: {
        type: String
    },
    position: {
        type: String
    },
    skillset: {
        type: String
    },
    languages: {
        type: String
    },
    image: {
        type: String
    },
    mantra: {
        type: String
    },
    email: {
        type: String
    },
    slackname: {
        type: String
    }
},
{
    collection: 'profile'
});

const Profile = module.exports = mongoose.model('profile', profileSchema);

module.exports.getProfile = function(callback){
    Profile.find(callback);
}

