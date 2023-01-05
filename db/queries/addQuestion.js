const db = require('../connection');

const addQuestion = (quizId, question) => {
  return db.query(`INSERT INTO questions (quiz_id, question) VALUES ($1,$2);`, [quizId, question]);

};


const addAnswer1 = (answer) => {
  const max = db.query(`select max(id) from quizzes;`)
  const questionId = db.query(`select max(id) from questions;`);
  let answer1 = true;
  if (answer === false) {
    answer1 = false;
  }
  return db.query(`INSERT INTO answers (question_id, answer, isCorrect) VALUES ($1, $2, $3);`, [questionId, 'True', answer1]);
};

const addAnswer2 = (answer) => {
  const max = db.query(`select max(id) from quizzes;`)
  const questionId = db.query(`select max(id) from questions;`);
  let answer2 = false;
  if (answer === false) {
    answer2 = true;
  }
  return db.query(`INSERT INTO answers (question_id, answer, isCorrect) VALUES ($1, $2, $3);`, [questionId, 'False', answer2]);
};

module.exports = {
  addQuestion,
  addAnswer1,
  addAnswer2
};


module.exports = { addQuestion };
