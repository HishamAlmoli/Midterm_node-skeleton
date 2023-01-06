const db = require('../connection');


const getQuizQA = (quizID) => {
  return db.query(`
  SELECT question, quiz_id, quizzes.title, answers.answer, answers.isCorrect
  FROM questions
  JOIN quizzes ON quiz_id = quizzes.id
  JOIN answers ON questions.id = answers.question_id
  WHERE quiz_id = $1;`, [quizID])
.then(data => {
      return data.rows;
    });
};
module.exports = { getQuizQA };

