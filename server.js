// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');



// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));
app.use(cookieParser());

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const loginRoutes = require('./routes/login');
const registerRoutes = require('./routes/register');
const createQuizRoutes = require('./routes/createQuiz');
const createQuizRoutesIndex = require('./routes/creatQuizIndex');
const createQuizQuestions = require('./routes/createQuizQuestions');
const user_homepage = require('./routes/quizQA-api');
const genral_homepage = require('./routes/quizzes-api');
const user_homepage2 = require('./routes/quizzes-api');
const quizQuestions = require('./routes/questions');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
// app.use('/api/users', userApiRoutes);
// app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/createQuiz', createQuizRoutes);
app.use('/createQuizIndex', createQuizRoutesIndex);
app.use('/createQuestions', createQuizQuestions);
app.use('/qtest', user_homepage);
app.use('/home', genral_homepage);
app.use('/api/users', user_homepage2);
app.use('/quizzes', quizQuestions);
// app.use('/movies', quizQuestions);
// app.use('/countries', quizQuestions);


// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  res.redirect('/home');
});




app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

// do this instead
app.get('/login/:id', (req, res) => {
  // or using plain-text cookies
  res.cookie('user_id', req.params.id);

  // send the user somewhere
  res.redirect('/');
});
