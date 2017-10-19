const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/database');
const bodyParser = require('body-parser');
const Faq = require('./models/faq');
const Profile = require('./models/profiles');
const Example = require('./models/examples');


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

app.get('/faq', (req, res) => {
    console.log('Grabbing all FAQ');
    Faq.getFaq( (err, faq) => {
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

app.get('/examples', (req, res) => {
    console.log('Grabbing all Examples');
    Example.getExamples( (err, example) => {
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
