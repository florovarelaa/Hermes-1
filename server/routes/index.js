const express = require('express');
var app = express();
const user = require('./user')

app.use(user);

module.exports = app;