const db = require('../connection');

const addQuestion = (quizId, question, answer) => {
  db.query(`INSERT INTO questions (quiz_id, question) VALUES ($1,$2);`, [quizId, question]);
  const questionId = db.query(`select max(id) from questions;`);
  let answer1 = true;
  let answer2 = false;
  if (answer === false) {
    answer1 = false;
    answer2 = true;
  }
  db.query(`INSERT INTO answers (question_id, answer, isCorrect) VALUES ($1, $2, $3);`, [questionId, 'True', answer1]);
  db.query(`INSERT INTO answers (question_id, answer, isCorrect) VALUES ($1, $2, $3);`, [questionId, 'False', answer2]);

};

module.exports = { addQuestion };
