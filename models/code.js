const mongoose = require('mongoose');
const config = require('../config/database');

// User Schema
const codeSchema = new mongoose.Schema({
    language: {
        type: String
    },
    name: {
        type: String
    },
    simpleExplanation: {
        type: String
    },
    explanation: {
        type: String
    },
    references: {
        type: String
    },
    webBrowser: {
        type: String
    },
    codePen: {
        type: String
    },
    example: {
        type: String
    }
},
{
    collection: 'code'
});

const Code = module.exports = mongoose.model('code', codeSchema);

module.exports.getCode = function(callback){
    Code.find(callback);
}

module.exports.getHtml = function(callback) {
    Code.find({"language" : "html"}, callback);
}

module.exports.getCss = function(callback) {
    Code.find({"language" : "css"}, callback);
}

module.exports.getCodeById = function(id, callback){
    Code.findById(id, callback);
}

