var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./src/utilities/config');
mongoose.connect(config.db);
var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 3000));
app.use(express.static('public'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

var studentRoute=require('./src/routes/studentRoute');
app.use('/student',studentRoute);
app.listen(app.get('port'),function(err) {
    if(!err)
    {
        console.log("server started at port 3000");
    }
});