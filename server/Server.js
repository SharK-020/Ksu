const express = require('express');
const mongo = require('./db/mongo');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const mainRoute = require('../server/routes/mainRoute')
const bodyparser = require('body-parser');
require('dotenv').config();
const app = express();
const port = process.env.port || 3000;

app.use(cors()); // enable CORS (Cross-origin resource sharing) for allowing access to resources from other domains
app.use(express.json());
app.use(bodyparser.json());
/* app.get("/", (req, res) => {
    res.send("Hello World");

}); */

/* app.use('/', authRoutes); */
app.use('/api', mainRoute);
app.use('/auth', authRoutes)

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