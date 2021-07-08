var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var LoginRouter = require('./routes/login');
var RegisterRouter = require('./routes/register');
var AddHeroRouter = require('./routes/heroes');
var BuscaAPIRouter = require('./routes/BuscaAPI');
var ShowHeroRouter = require('./routes/showHero');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Implementando Session Cookies
app.use(cookieParser('session_secret'));
app.use(session({
  secret: 'session_secret',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false}
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', LoginRouter);
app.use('/register', RegisterRouter);
app.use('/heroes', AddHeroRouter);
app.use('/busca', BuscaAPIRouter);
app.use('/showhero', ShowHeroRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
