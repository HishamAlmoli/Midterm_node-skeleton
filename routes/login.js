const express = require('express');
const db = require('../db/connection');
const router  = express.Router();
const userQueries = require('../db/queries/users');

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', (req, res) => {
<<<<<<< HEAD
  const name = req.body.name;
  const password = req.body.password;
  db.login(name, password)
  .then(user => {
    if (!user) {
      res.send({error: 'error'});
      return;
    }
    req.session.user_id = id;  //if we were using cookies we'd write this
    res.redirect("/${id}");
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
=======
  console.log('hello');
  res.redirect('/');
  // validation
>>>>>>> origin/master
});


module.exports = router;
