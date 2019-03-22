var express = require('express');
var router = require('./routes/router');
var app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);
app.listen(3000, function(){
	console.log('port 3000')
});