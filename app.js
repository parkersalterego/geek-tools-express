const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use (cors());
app.use(bodyParser.json());

Answer = require('./models/answers');
Question = require('./models/questions');

// connect mongoose 
mongoose.connect('mongodb://geektoolsuser:SimCityNo3@ds155424.mlab.com:55424/geektools');

app.get('/', function(req, res){
    res.send('use api');
});

app.get('/api/answers', function(req, res){
    Answer.getAnswers(function(err, answers){
        if(err){
            throw err;
        }
        res.json(answers);
    });
});

app.get('/api/questions', function(req, res){
    Question.getQuestions(function(err, questions){
        if(err){
            throw err;
        }
        res.json(questions);
    });
});

app.listen(5000);
console.log('running on port 5000!');