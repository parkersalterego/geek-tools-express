const mongoose = require('mongoose');
const config = require('../config/database');

// User Schema
const exampleSchema = new mongoose.Schema({
    title: {
        type: String
    },
    example: {
        type: String
    },
    tags: {
        type: String
    }
},
{
    collection: 'examples'
});

const Examples = module.exports = mongoose.model('examples', exampleSchema);

module.exports.getExamples = function(callback){
    Examples.find(callback);
}

module.exports.getExampleById = function(id, callback){
    Examples.findById(id, callback);
}

