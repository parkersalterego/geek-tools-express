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

module.exports.getFaqs = function(callback){
    Faq.find(callback);
}

module.exports.getFaqById = function(id, callback){
    Faq.findById(id, callback);
}

module.exports.getFaqByQuestion = function(id, callback){
    Faq.findByName(question, callback);
}

