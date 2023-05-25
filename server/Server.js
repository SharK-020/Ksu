const express = require('express');  // import required libraries

const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/mainRoute');

// parse incoming request bodies in a middleware before your handlers, available under the req.body property
const bodyParser = require('body-parser');


// load environment variables from .env file
require('dotenv').config();


const app = express();

// get port and MongoDB URI from .env file
const port = process.env.PORT || 5000;
const uri = process.env.MongoURI;

app.use(cors()); // enable CORS (Cross-origin resource sharing) for allowing access to resources from other domains

mongoose.connect(uri)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use(routes) // use routes from routes.js
app.listen(port, () => console.log(`Server started on port ${port}`));