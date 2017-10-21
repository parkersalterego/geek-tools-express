const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/database');
const bodyParser = require('body-parser');
const Faqs = require('./models/faq');
const Profile = require('./models/profiles');
const Example = require('./models/examples');
const Answer = require('./models/answers');


mongoose.Promise = global.Promise;
// Connects us to our database
mongoose.connect(config.database);

// Lets us know we're connected!
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database)
});

// Lets us know we're having trouble connecting to the database!
mongoose.connection.on('error', (err) => {
    console.log('Something Went Wrong! ==> ' + err)
});

const app = express();

const port = 3000;

/*//options for cors midddleware
const options:cors.CorsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: API_URL,
    preflightContinue: false
  };*/


//CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

// Setting Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.get('/answers', (req, res) => {
    console.log('Grabbing all Answers');
    Answer.getAnswers( (err, answers) => {
    if(err) {
        throw err;
    }
    res.json(answers);
    });
});

app.get('/answers/:_id', (req, res) => {
    console.log('Grabbing an FAQ by ID');
    Answer.getAnswerById(req.params._id, (err, Answer) => {
    if(err) {
        throw err;
    }
    res.json(Answer);
    });
});

app.get('/faq', (req, res) => {
    console.log('Grabbing all FAQ\'s');
    Faqs.getFaqs( (err, faqs) => {
    if(err) {
        throw err;
    }
    res.json(faqs);
    });
});

app.get('/faq/:_id', (req, res) => {
    console.log('Grabbing an FAQ by ID');
    Faqs.getFaqById(req.params._id, (err, faq) => {
    if(err) {
        throw err;
    }
    res.json(faq);
    });
});



app.get('/profile', (req, res) => {
    console.log('Grabbing all Profiles');
    Profile.getProfile( (err, profile) => {
    if(err) {
        throw err;
    }
    res.json(profile);
    });
});

app.get('/profile/:_id', (req, res) => {
    console.log('Grabbing a Profile by ID');
    Profile.getProfileById(req.params._id, (err, profile) => {
    if(err) {
        throw err;
    }
    res.json(profile);
    });
});

app.get('/examples', (req, res) => {
    console.log('Grabbing all Examples');
    Example.getExamples( (err, examples) => {
    if(err) {
        throw err;
    }
    res.json(examples);
    });
});

app.get('/examples/:_id', (req, res) => {
    console.log('Grabbing an Example by ID');
    Example.getExampleById(req.params._id, (err, example) => {
    if(err) {
        throw err;
    }
    res.json(example);
    });
});




// Starting the Server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});
