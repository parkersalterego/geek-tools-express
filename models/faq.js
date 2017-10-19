const mongoose = require('mongoose');
const config = require('../config/database');

// User Schema
const faqSchema = new mongoose.Schema({
    question: {
        type: String
    },
    answer: {
        type: String
    }
},
{
    collection: 'faq'
});

const Faq = module.exports = mongoose.model('faq', faqSchema);

module.exports.getFaq = function(callback){
    Faq.find(callback);
}

