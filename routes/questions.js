const express = require('express');
const router  = express.Router();
const quizQuestions = require('../db/queries/questions');

  router.get('/', (req, res) => {
    quizQuestions.getQuestions()
      .then(questions => {
        // res.json({ users });
        res.render("quizzes", { data:questions });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


module.exports = router;
