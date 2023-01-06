const express = require('express');
const router  = express.Router();
const quizQueries = require('../db/queries/addQuestion');

router.get('/', (req, res) => {
  res.render('createQuiz');
});

router.post('/', (req, res) => {
  console.log('QuizID ', req.body.QuizID);
  console.log('req.body: ', req.body);
  quizQueries.addQuestion(
    req.body.QuizID,
    req.body.question
    )
    .then(( ) => {
      quizQueries.addAnswer1(
        req.body.answer1,
        req.body.check1
        )
        .catch((error ) => {
          console.log('Answer1Error' + error)
        });

        quizQueries.addAnswer2(
          req.body.answer2,
          req.body.check2
          )
          .catch((error ) => {
            console.log('Answer2Error' + error)
          });

    //console.log('idd '+ quizId);
    })
    .catch((error ) => {
      console.log('AddQuestionError' + error)
    });

  res.render("createQuizQuestions", {quizId:req.body.QuizID});
  //res.redirect('/');
  // console.log('hello');
  // validation
});

module.exports = router;
