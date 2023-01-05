const db = require('../connection');

const getQuizzes = () => {
  return db.query('SELECT * FROM quizzes;')
    .then(data => {
      return data.rows;
    });
};

const getQuizById = (quizId) => {
  return db.query('SELECT * FROM quizzes WHERE id = $1;', [quizId])
    .then(data => {
      return data.rows[0];
    });
};
module.exports = {
  getQuizzes,
  getQuizById
};
