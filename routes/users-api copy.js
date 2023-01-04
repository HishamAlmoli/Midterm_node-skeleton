/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');

router.get('/abc', (req, res) => {
  console.log("test1");
  userQueries.getUsers()
    .then(users => {
      // res.json({ users });
      console.log("test");
      console.log("users"+ {users});
      res.render("login", { data:users });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// router.get('/', (req, res) => {
//   userQueries.getUsers()
//     .then(users => {
//       res.json({ users });
//       res.render("login", { data:users });
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });

module.exports = router;
