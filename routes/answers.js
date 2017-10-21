const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Answer = require('../models/answers');


router.get('/', (req, res) => {
    console.log('Grabbing all Answers');
    Answer.getAnswers( (err, answers) => {
    if(err) {
        throw err;
    }
    res.json(answers);
    });
});

router.get('/:_id', (req, res) => {
    console.log('Grabbing an FAQ by ID');
    Answer.getAnswerById(req.params._id, (err, Answer) => {
    if(err) {
        throw err;
    }
    res.json(Answer);
    });
});

module.exports = router;