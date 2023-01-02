
DROP TABLE IF EXISTS attempts CASCADE;
CREATE TABLE attempts (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  quiz_id INTEGER REFERENCES quizzes(id),
  result INTEGER
);
