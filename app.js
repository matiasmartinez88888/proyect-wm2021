var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs')

//Listado de Rutas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var contactoRouter = require('./routes/contacto');
var productosRouter = require('./routes/productos');
var productos2Router = require('./routes/productos2');
var altaproductosRouter = require('./routes/altaProducto');
//formato de importacion de ES10 -> import {productoRouter} from './routes/productos.js'

var app = express();

//registramos los Partials
hbs.registerPartials(__dirname + '/views/partials')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//ejecutar la ruta
app.use('/', indexRouter);
app.use('/usuarios', usersRouter);
app.use('/contacto', contactoRouter);
app.use('/productos', productosRouter);
app.use('/productos2', productos2Router);
app.use('/nuevo-producto', altaproductosRouter);

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