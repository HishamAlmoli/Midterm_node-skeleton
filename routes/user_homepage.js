const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');

router.get('/', (req, res) => {
  userQueries.getUsers()
    .then(users => {
      res.json({ users });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// shows user homepage where you can only see your own quizzes
router.get('/:id', (req, res) => {
  db.query(`
  SELECT quizzes.id, users.id AS user_id, users.name AS user_name, quizzes.title, iSPublic
  FROM quizzes
  JOIN users ON user_id = users.id
  WHERE user_id = $
`, [req.params.id])
    .then(user => {
      let templateVar = {userData: user.rows, user_id: req.params.id};
      res.render("../views/user_homepage", templateVar);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: error.message });
    });
});

// connecting to the create quiz page
router.get("/createQuiz/:user_id", (req, res) => {
  let templateVar = { userId: req.params.user_id };
  res.render('../views/createQuiz', templateVar);
})



const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', (req, res) => {
  console.log('hello');
  // validation
});


module.exports = router;


module.exports = router;
