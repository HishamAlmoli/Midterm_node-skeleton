const express = require('express');
const router  = express.Router();
const quizQueries = require('../db/queries/addQuiz');

router.get('/', (req, res) => {
  res.render('createQuiz');
});

router.post('/', (req, res) => {
  res.render("createQuizQuestions");
  // userQueries.getQuizId()
  // .then(quizId => {
  //   res.render("createQuizQuestions", { data:quizId });
  //   console.log('idd'+ quizId);
  // })
  // .catch(err => {
  //   res
  //     .status(500)
  //     .json({ error: err.message });
  // });

  //res.redirect('/createQuizQuestions');
  // console.log('hello');
  // validation addQuiz getQuizId
});

module.exports = router;
