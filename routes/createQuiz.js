const express = require('express');
const router  = express.Router();
const quizQueries = require('../db/queries/addQuiz');

router.get('/', (req, res) => {
  res.render('createQuiz');
});

router.post('/', async (req, res) => {
  let isPublic = false;
  if (req.body.isPublic === true )
  {
    isPublic = true;
  }
  let title = req.body.title;
  await quizQueries.addQuiz(
    title,
    isPublic
    );
    let quizId = await quizQueries.getQuizId();
  console.log('idd '+ quizId);
  res.render("createQuizQuestions", {quizId});
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
