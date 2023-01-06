const express = require('express');
const router  = express.Router();
const quizQuestions = require('../db/queries/questions');
const quizQueries = require('../db/queries/quizzes');
const quizAnswers = require('../db/queries/answers')

  router.get('/:id', (req, res) => {
    const questionPromise = quizQuestions.getQuestions(req.params.id);
    const quizPromise = quizQueries.getQuizById(req.params.id);
    const answerPromise = quizAnswers.getQuizQA(req.params.id);
    const promises = [questionPromise, quizPromise, answerPromise];
    Promise.all(promises)
      .then(results => {
        const questions = results[0];
        const quiz = results[1];
        const answers = results[2];

for (let question of questions) {
  console.log("question", question);
  for (let answer of answers) {
    console.log("answer", answer);
    if (question.question === answer.question) {
      if(!question.answers) {
        question.answers = [];
      }
      question.answers.push(answer.answer);
    }
  }
}
console.log("questions", questions);

        // res.json({ users });
        res.render("quizzes", { data:questions, quizTitle: quiz.title, quizAnswer: answers});
        // console.log(answers);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


module.exports = router;
