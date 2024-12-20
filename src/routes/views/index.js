const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/form-example', (req, res) => {
  res.render('form-example');
});

router.post('/form-example', (req, res) => {
  res.redirect('/form-example');
});

router.get('/clear-data', (req, res) => {
  req.session.data = {};
  res.redirect('/');
});

module.exports = router;
