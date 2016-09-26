var express = require('express');
var app = express();
var PORT = 8080;

app.get('/', function (req, res) {
  res.sendfile('index.html');
});
app.use(express.static('./'));

app.listen(PORT, function () {
  console.log('app listening on port' + 8080);
});