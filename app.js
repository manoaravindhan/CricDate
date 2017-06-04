var express = require("express");
var path = require('path');
 
var app = express();
app.use(express.logger());

// Configuration

app.configure(function(){
  app.use(express.compress());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(path.normalize(__dirname + '/app'	)));
  app.use(app.router);
});

app.get('/', function(request, response) {
  response.render('login.html')
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
