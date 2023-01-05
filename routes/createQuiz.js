const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('createQuiz');
});

router.post('/', (req, res) => {
  res.redirect('/');
  // console.log('hello');
  // validation
});

module.exports = router;
