const db = require('../connection');

const addQuestion = (quizId, question) => {
  return db.query(`INSERT INTO questions (quiz_id, question) VALUES ($1,$2);`, [quizId, question]);

};


const addAnswer1 = (answer, isCorrect) => {
  // const max = db.query(select max(id) from quizzes;)
  // const questionId = db.query(select max(id) from questions;);
  // return db.query(INSERT INTO answers (question_id, answer, isCorrect) VALUES ($1, $2, $3);, [questionId, answer, isCorrect]);
  return db.query(`INSERT INTO answers (question_id, answer, isCorrect) VALUES ((select max(id) from questions), $1, $2);`, [answer, isCorrect]);
};

const addAnswer2 = (answer, isCorrect) => {
  // const max = db.query(select max(id) from quizzes;)
  // const questionId = db.query(select max(id) from questions;);
  // return db.query(INSERT INTO answers (question_id, answer, isCorrect) VALUES ($1, $2, $3);, [questionId, answer, isCorrect]);
  return db.query(`INSERT INTO answers (question_id, answer, isCorrect) VALUES ((select max(id) from questions), $1, $2);`, [answer, isCorrect]);
};

module.exports = {
  addQuestion,
  addAnswer1,
  addAnswer2
};
