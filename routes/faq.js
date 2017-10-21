const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Faqs = require('../models/faq');

router.get('/', (req, res) => {
    console.log('Grabbing all FAQ\'s');
    Faqs.getFaqs( (err, faqs) => {
    if(err) {
        throw err;
    }
    res.json(faqs);
    });
});

router.get('/:_id', (req, res) => {
    console.log('Grabbing an FAQ by ID');
    Faqs.getFaqById(req.params._id, (err, faq) => {
    if(err) {
        throw err;
    }
    res.json(faq);
    });
});

module.exports = router;