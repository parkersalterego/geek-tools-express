const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/database');
const bodyParser = require('body-parser');

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

// Bringing in our routes
const answers = require('./routes/answers');
const code = require('./routes/code');
const examples = require('./routes/examples');
const faq = require('./routes/faq');
const profiles = require('./routes/profile');


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

// Using our routes
app.use('/answers', answers);
app.use('/code', code);
app.use('/examples', examples);
app.use('/faq', faq);
app.use('/profile', profiles);

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

// Starting the Server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});
