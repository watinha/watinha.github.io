var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/',function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('img/search.png', function(req, res) {
  res.sendFile(__dirname + '/img/search.png');
}) 

app.get('*', function(req, res){
  res.redirect('/');
});

app.listen(port, function() {
  console.log("App is running on port: " + port);
});

