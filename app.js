var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var handlebars =require('hbs');

var indexRouter = require('./app_server/routes/index');
var travelRouter = require('./app_server/routes/travel');

var app = express();
var port = 3000;


handlebars.registerPartials(__dirname + '.app_server/views/partials');

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded( {extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/travel', travelRouter);

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});