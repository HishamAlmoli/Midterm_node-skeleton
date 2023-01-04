const db = require('../connection');

const getquizQ = (quizID) => {
  return db.query('SELECT * FROM questions JOIN quizzes ON quiz_id = quizzes.id where quiz_id = $1;', [quizID])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getquizQ };
//SELECT question, quiz_id, quizzes.title FROM questions JOIN quizzes ON quiz_id = quizzes.id where quiz_id = 1;
