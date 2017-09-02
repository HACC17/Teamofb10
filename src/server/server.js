var express         = require('express');
var app             = express();
// var mongoose        = require('mongoose');
// var mysql           = require('mysql');
var morgan          = require('morgan');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');

// var promise = mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu', {
//     useMongoClient: true
// });

// var dbConnect = mysql.createConnection({
//     host: 'localhost',    
//     user: 'admin',
//     password: 'admin',
//     database: 'volunteers'
// });

// dbConnect.connect(function(err){
//     if(!err) {
//         console.log("Database is connected ...");    
//     } else {
//         console.log("Error connecting database ...");    
//     }
// });

app.use("/", express.static(__dirname));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

app.listen(8080);
console.log('App listening on port 8080');