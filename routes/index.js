const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


// will display the public quizzes on the homepage
  router.get('/:user_id', (req, res) => {
    req.session.user_id = req.params.user_id;
    db.query(`SELECT * FROM quizzes WHERE isPublic = TRUE;`)
    .then(data => {
      const templateVar = {quizzes: data.rows, user_id: req.params.user_id};
      res.render('../views/index', templateVar);
    })
  });
  return router;


module.exports = router;
