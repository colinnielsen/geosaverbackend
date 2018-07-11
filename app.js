const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var auth = require('./routes/auth');
var users = require('./routes/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors())

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Headers', 'Authorization');
    next();
});

app.use('/auth', auth);
app.use('/users', users);

module.exports = app;
