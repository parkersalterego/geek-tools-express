const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Example = require('../models/examples');

router.get('/', (req, res) => {
    console.log('Grabbing all Examples');
    Example.getExamples( (err, examples) => {
    if(err) {
        throw err;
    }
    res.json(examples);
    });
});

router.get('/:_id', (req, res) => {
    console.log('Grabbing an Example by ID');
    Example.getExampleById(req.params._id, (err, example) => {
    if(err) {
        throw err;
    }
    res.json(example);
    });
});

module.exports = router;