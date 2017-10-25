const mongoose = require('mongoose');
const config = require('../config/database');
var Schema = mongoose.Schema;

// User Schema
const faqSchema = new mongoose.Schema({
    question: {
        type: String
    },
    answer: {
        type: Schema.Types.ObjectId,
        ref: 'answers'
    }
},
{
    collection: 'faq'
});

const Faq = module.exports = mongoose.model('faq', faqSchema);

module.exports.getFaqs = function(callback){
    Faq.find(callback).populate('answer').
    exec(function (err, story) {
        if (err) return handleError(err);
    }
)};

module.exports.getFaqById = function(id, callback){
    Faq.findById(id, callback);
}

module.exports.getFaqByQuestion = function(id, callback){
    Faq.findByName(question, callback);
}

