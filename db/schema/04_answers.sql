DROP TABLE IF EXISTS answers CASCADE;
CREATE TABLE answers (
  id SERIAL PRIMARY KEY NOT NULL,
  question_id INTEGER REFERENCES questions(id),
  answer TEXT NOT NULL,
  isCorrect BOOLEAN NOT NULL DEFAULT FALSE
);
