const db = require('../connection');

const addQuiz = (quizTitle, isPublic) => {
  db.query(`INSERT INTO quizzes (title, user_id, isPublic) VALUES ($1, 1, $2);`, [quizTitle, isPublic]);
};

const getQuizId = () => {
  return db.query(`select max(id) from quizzes;`)
    .then(data => {
      return data.rows;
    });
};

module.exports = {
  addQuiz,
  getQuizId
};
