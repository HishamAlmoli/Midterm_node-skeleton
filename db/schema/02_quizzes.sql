DROP TABLE IF EXISTS quizzes CASCADE;
CREATE TABLE quizzes (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id),
  isPublic BOOLEAN NOT NULL DEFAULT TRUE
);