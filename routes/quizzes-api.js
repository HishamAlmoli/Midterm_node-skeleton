/*
 * All routes for quizzes Data are defined here
 * Since this file is loaded in server.js into api/quizzes,
 *   these routes are mounted onto /api/quizzes
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
//const db = require('../connection');
const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/quizzes');

  router.get('/', (req, res) => {
    console.log("quizzesTest1");
    userQueries.getQuizzes()
      .then(quizzes => {
        // res.json({ users });
        console.log("quizzesTest2");
        console.log("Quizzes"+ {quizzes});
        res.render("index", { data:quizzes });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


module.exports = router;
