const mongoose = require('mongoose');
const config = require('../config/database');

// User Schema
const answerSchema = new mongoose.Schema({
    question: {
        type: String
    },
    answer: {
        type: String
    }
},
{
    collection: 'answers'
});

const Answer = module.exports = mongoose.model('answers', answerSchema);

module.exports.getAnswers = function(callback){
    Answer.find(callback);
}

module.exports.getAnswerById = function(id, callback){
    Answer.findById(id, callback);
}

module.exports.getAnswerByAnswer = function(id, callback){
    Answer.findByName(answer, callback);
}

