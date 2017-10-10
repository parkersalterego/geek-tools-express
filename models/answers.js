let mongoose = require('mongoose');

// answer schema 

let answerSchema = mongoose.Schema({
    answer: {
        type: String,
        required: true
    },
    
    create_date: {
        type: Date,
        default: Date.now
    }
});


// set and export model

let Answer = module.exports = mongoose.model('Answer', answerSchema);

// get answers

module.exports.getAnswers = function(callback) {
    Answer.find(callback);
}
