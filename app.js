var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var router = express.Router();
var http = require('http');
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var app = express();
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
// console.log(router)
router.use(function(req, res, next) {
    console.log(req.method, req.url);
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

router.get("/login", function(req, res) {

	console.log(req.orangealUrl);
  res.redirect('login.html#/login')
	// res.sendFile(path.resolve(__dirname, '', './public/login.html#/login'));
});

router.get("/index", function(req, res) {

  console.log(req.orangealUrl);
  res.redirect('index.html#/index')
  // res.sendFile(path.resolve(__dirname, '', './public/login.html#/login'));
});

router.post('/dologin', function (req, res) {
  res.redirect('login.html#/login')
});

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/',router);
app.use(express.static('public'));
app.use(function(req,res){
  console.log('app.use')
  console.log(req)
})

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
// var server = http.createServer(app);
var server=app.listen(server_port, server_ip_address, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});

// 

// module.exports = app;
