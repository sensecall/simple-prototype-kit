const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const session = require('express-session');

const app = express();

// Configure Nunjucks
nunjucks.configure(path.join(__dirname, 'views'), {
  autoescape: true,
  express: app,
  watch: true
});

app.set('view engine', 'njk');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// Routes
app.use('/', require('./routes'));

module.exports = app;