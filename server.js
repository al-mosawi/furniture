var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var port = process.env.PORT || 8989;
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/furniture', function(err){
    if (err){
        console.log(err)
    }else{
        console.log('connected to database')
    }
});
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, function(){
    console.log('server is listening at' + port)
});