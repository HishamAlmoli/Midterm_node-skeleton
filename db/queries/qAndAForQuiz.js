const db = require('../connection');

const getquizQA = (quizID) => {
  return db.query('SELECT * FROM questions JOIN quizzes ON quiz_id = quizzes.id where quiz_id = $1;', [quizID])
.then(data => {
      return data.rows;
    });
};

module.exports = { getquizQA };
//SELECT question, quiz_id, quizzes.title FROM questions JOIN quizzes ON quiz_id = quizzes.id JOIN answers ON questions.id = answers.question_id where quiz_id = 1;
//  return db.query('SELECT * FROM questions JOIN quizzes ON quiz_id = quizzes.id where quiz_id = $1;', [quizID])
