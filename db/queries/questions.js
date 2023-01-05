const db = require('../connection');

const getQuestions = (quizId) => {
  return db.query('SELECT * FROM questions WHERE quiz_id = $1;', [quizId])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getQuestions };
