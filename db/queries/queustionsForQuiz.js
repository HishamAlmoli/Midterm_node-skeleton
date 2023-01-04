const db = require('../connection');

const getQuizzes = (quizID) => {
  return db.query('SELECT * FROM questions JOIN  quizzes ON where id = $1  ;', [quizID])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getQuizzes };
