"use strict";
var express = require('express')
  , app = express();

app.use(express.bodyParser());
app.use(express.static(__dirname+'/app'));

app.listen(8080, "127.0.0.1");

var data = [
		{
			"name": "Faire des crêpes",
			"estimatedCount": 2,
			"doneCount": 0
		},
		{
			"name": "Manger des crêpes",
			"estimatedCount": 1,
			"doneCount": 0
		}
	];


app.get('/list', function(req, res, next) {     
   return res.send(data);	
});

app.get('/get/:index', function(req, res, next) {
    var id = req.params.index; 
   return res.send(data[index]);	
});

app.post('/add', function(req, res){
    console.log(req);   
    var item = req.body;
    data.push(item);
    console.log(item);
    res.send(item);
});