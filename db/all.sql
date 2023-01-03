-- Schema folder

--01 Schema --> create users table
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

--02 Schema --> create quizzes table
DROP TABLE IF EXISTS quizzes CASCADE;
CREATE TABLE quizzes (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id),
  isPublic BOOLEAN NOT NULL DEFAULT TRUE
);

--03 Schema --> create questions table
DROP TABLE IF EXISTS questions CASCADE;
CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  quiz_id INTEGER REFERENCES quizzes(id),
  question TEXT NOT NULL
);

--04 Schema --> create answers table
DROP TABLE IF EXISTS answers CASCADE;
CREATE TABLE answers (
  id SERIAL PRIMARY KEY NOT NULL,
  question_id INTEGER REFERENCES questions(id),
  answer TEXT NOT NULL,
  isCorrect BOOLEAN NOT NULL DEFAULT FALSE
);

--05 Schema --> create attempts table
DROP TABLE IF EXISTS attempts CASCADE;
CREATE TABLE attempts (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  quiz_id INTEGER REFERENCES quizzes(id),
  result INTEGER
);

-- Seeds folder

--01 Seeds --> fill users table
INSERT INTO users (name, password) VALUES ('Samreen', 123);
INSERT INTO users (name, password) VALUES ('Hisham', 1234);
INSERT INTO users (name, password) VALUES ('Dihni', 12345);

--02 Seeds --> fill quizzes table
INSERT INTO quizzes (title, user_id, isPublic) VALUES ('Sports', 2, true);
INSERT INTO quizzes (title, user_id, isPublic) VALUES ('Movies', 1, true);
INSERT INTO quizzes (title, user_id, isPublic) VALUES ('Countries', 3, true);

--03 Seeds --> fill questions table
INSERT INTO questions (quiz_id, question) VALUES (1, 'Lebron James is an ice hockey player, true or false?');
INSERT INTO questions (quiz_id, question) VALUES (1, 'Which team won the 2019 NBA Championship?');
INSERT INTO questions (quiz_id, question) VALUES (1, 'Which team won the MLB 2022 World Series?');
INSERT INTO questions (quiz_id, question) VALUES (1, 'Which team won the 2022 FIFA World Cup?');
INSERT INTO questions (quiz_id, question) VALUES (1, 'Which two jersey numbers did Michael Jordan wear?');
INSERT INTO questions (quiz_id, question) VALUES (2, 'Who did the cat in The Godfather belong to?');
INSERT INTO questions (quiz_id, question) VALUES (2, 'How many Oscars has Denzel Washington won?');
INSERT INTO questions (quiz_id, question) VALUES (2, 'How many Godfather movies are there?');
INSERT INTO questions (quiz_id, question) VALUES (2, 'In which movie do Detectives Carter and Lee race to save a diplomats daughter?');
INSERT INTO questions (quiz_id, question) VALUES (2, 'Who played the role of Malcolm X in the 1992 film of the same name?');
INSERT INTO questions (quiz_id, question) VALUES (3, 'What is the capital of Canada?');
INSERT INTO questions (quiz_id, question) VALUES (3, 'Which country is the largest in the world?');
INSERT INTO questions (quiz_id, question) VALUES (3, 'What is the smallest country in the world?');
INSERT INTO questions (quiz_id, question) VALUES (3, 'How many countries are in Africa?');
INSERT INTO questions (quiz_id, question) VALUES (3, 'How many provinces are in Canada?');

--04 Seeds --> fill answers table
INSERT INTO answers (question_id, answer, isCorrect) VALUES (1, 'False', TRUE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (1, 'True', FALSE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (1, 'Toronto Raptors', TRUE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (1, 'Golden State Warriors', FALSE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (1, 'Houston Astros', TRUE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (1, 'Philadelphia Phillies', FALSE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (1, 'Argentina', TRUE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (1, 'France', FALSE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (1, '45 and 23', TRUE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (1, '22 and 56', FALSE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (2, 'Nobody, it was a stray cat', TRUE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (2, 'Don Corleone', FALSE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (2, '2', TRUE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (2, '0', FALSE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (2, '3', TRUE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (2, '5', FALSE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (2, 'Rush Hour', TRUE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (2, 'Rush Hour 2', FALSE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (2, 'Denzel Washington', TRUE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (2, 'Samuel L Jackson', FALSE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (3, 'Ottawa', TRUE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (3, 'Toronto', FALSE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (3, 'Russia', TRUE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (3, 'Canada', FALSE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (3, 'Vatican City', TRUE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (3, 'Malta', FALSE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (3, '54', TRUE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (3, '50', FALSE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (3, '10', TRUE);
INSERT INTO answers (question_id, answer, isCorrect) VALUES (3, '13', FALSE);

--05 Seeds --> fill attempts table
INSERT INTO attempts (user_id, quiz_id, result) VALUES (1, 2, 0);
INSERT INTO attempts (user_id, quiz_id, result) VALUES (2, 1, 5);
INSERT INTO attempts (user_id, quiz_id, result) VALUES (3, 3, 2);
INSERT INTO attempts (user_id, quiz_id, result) VALUES (2, 1, 4);
INSERT INTO attempts (user_id, quiz_id, result) VALUES (2, 3, 3);
INSERT INTO attempts (user_id, quiz_id, result) VALUES (1, 2, 1);
INSERT INTO attempts (user_id, quiz_id, result) VALUES (3, 1, 0);
INSERT INTO attempts (user_id, quiz_id, result) VALUES (1, 1, 5);
INSERT INTO attempts (user_id, quiz_id, result) VALUES (2, 3, 4);
INSERT INTO attempts (user_id, quiz_id, result) VALUES (1, 2, 5);
INSERT INTO attempts (user_id, quiz_id, result) VALUES (1, 1, 3);
INSERT INTO attempts (user_id, quiz_id, result) VALUES (2, 2, 1);
