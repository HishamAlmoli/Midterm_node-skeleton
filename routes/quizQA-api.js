/*
 * All routes for quizzes Data are defined here
 * Since this file is loaded in server.js into api/quizzes,
 *   these routes are mounted onto /api/quizzes
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/qAndAForQuiz');

  router.get('/:id', (req, res) => {
    userQueries.getquizQA(req.params.id)
      .then(quizzes => {
        // res.json({ users });
        res.render("qTest", { data:quizzes });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


module.exports = router;
