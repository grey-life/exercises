const mongoose = require('mongoose');
const config = require('../config.json');

const url = config.mongoUrl;
const connect = mongoose.connect(
    url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

connect.then((db) => {
    console.log('Connected correctly to monogDB');
}, err => console.log(err));
require('./Articles');

