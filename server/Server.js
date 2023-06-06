const express = require('express');
const mongo = require('./db/mongo');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const mainRoute = require('./routes/mainRoute');
const bodyparser = require('body-parser');
require('dotenv').config();
const content = require('./models/contentSchema');
const app = express();
const port = process.env.port || 3000;

app.use(cors()); // enable CORS (Cross-origin resource sharing) for allowing access to resources from other domains
app.use(express.json());
app.use(bodyparser.json());
app.get("/", (req, res) => {
    res.send("Hello World");

});

/* app.use('/', authRoutes); */
app.get('/contents', (req, res) => {
    content.find({})
        .then(contents => {
            console.log(contents);
            res.json({ contents });
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json({ error: 'Server error' });
        });
});

const run = async () => {
    try {
        await mongo(process.env.MONGO_URL);
        app.listen(port, () => console.log(`Server started on port ${port}`));
    }
    catch (err) {
        console.log(err);
    }
}

run();