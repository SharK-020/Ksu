const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const mongo = (url) => {
    return mongoose.connect(url, {}, console.log("connected to mongo db"));

}
module.exports = mongo;
