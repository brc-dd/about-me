var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')))
app.get('/home', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')))
app.get('/education', (req, res) => res.sendFile(path.join(__dirname, 'public/education.html')))
app.get('/experience', (req, res) => res.sendFile(path.join(__dirname, 'public/experience.html')))
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'public/contact.html')))
app.post('/save', (req, res) => {
  console.log("someone is trying to send information")
  console.log(req.body);
  res.sendStatus(200)
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
