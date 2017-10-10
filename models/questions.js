let mongoose = require('mongoose');

// question schema 

let questionSchema = mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    
    create_date: {
        type: Date,
        default: Date.now
    }
});


// set and export model

let Question = module.exports = mongoose.model('Question', questionSchema);

// get answers

module.exports.getQuestions = function(callback) {
    Question.find(callback);
}