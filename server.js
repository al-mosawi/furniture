var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var morgan = require('morgan');
var jwt = require('jsonwebtoken');
var config = require('./config');
var expressJwt = require('express-jwt');
app.use(morgan('dev'));
var furnitureRouter = require('./routes/furnitureRouter')
var port = process.env.PORT || 1116;
app.use(bodyParser.json());
app.use('/furniture', furnitureRouter)
mongoose.connect(config.databaseLocal, function(err){
    if (err){
        console.log(err)
    }else{
        console.log('connected to database')
    }
});
app.use('api', expressJwt({secret: config.secret}));
app.use('/api/furniture', furnitureRouter);
app.use('/auth', require('./routes/authRoutes'))
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, function(){
    console.log('server is listening at' + port)
});