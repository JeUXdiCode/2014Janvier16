"use strict";
var express = require('express')
  , app = express();

app.use(express.static(__dirname+'/app'));

app.listen(8080, "127.0.0.1");