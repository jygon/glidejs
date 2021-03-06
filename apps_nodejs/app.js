var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mustacheExpress = require('mustache-express');
//var routes = require('./routes/index');
//var users = require('./routes/users');
//var signin = require('./routes/signin');
//var principal = require('./routes/principal');
var glide = require('./routes/glide');

var app = express();

//app.set('env','production');

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');


app.engine('html', mustacheExpress());          // register file extension mustache
app.set('view engine', 'html');                 // register file extension for partials
app.set('views', path.join(__dirname,'views'));
console.log(app.get('views'));
app.use(express.static(path.join(__dirname,'www'))); // set static folder

// uncomment after placing your favicon in /www
//app.use(favicon(path.join(__dirname, 'www', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//app.use('/', routes);
//app.use('/users', users);
//app.use('/signin', signin);
//app.use('/principal', principal);
console.log('iniciando a rota glide2');
app.use('/glide', glide);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log(res);
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.disable('view cache');
  console.log('em desenvolvimento');
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

if (app.get('env') === 'production') {
    console.log('em producao');
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
