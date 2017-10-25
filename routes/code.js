const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Code = require('../models/code');

router.get('/', (req, res) => {
    console.log('Grabbing all Code Examples');
    Code.getCode( (err, code) => {
    if(err) {
        throw err;
    }
    res.json(code);
    });
});

router.get('/html', (req, res) => {
    console.log('Grabbing all HTML Examples');
    Code.getHtml( (err, html) => {
    if(err) {
        throw err;
    }
    res.json(html);
    });
});

router.get('/css', (req, res) => {
    console.log('Grabbing all CSS Examples');
    Code.getCss( (err, css) => {
    if(err) {
        throw err;
    }
    res.json(css);
    });
});

router.get('/:_id', (req, res) => {
    console.log('Grabbing some Code Examples by ID');
    Code.getCodeById(req.params._id, (err, code) => {
    if(err) {
        throw err;
    }
    res.json(code);
    });
});

module.exports = router;