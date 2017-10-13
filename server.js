var express = require('express');
var app = express();
app.set('views', './views');
app.set('view engine', 'jade');

app.listen(9000);    //setting the port to run the application on
