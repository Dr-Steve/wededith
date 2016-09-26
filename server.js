var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = 8080;

app.use(bodyParser.json());


//Home page
app.get('/', function (req, res)
{
  res.sendfile('index.html');
});
app.get('/index.html', function (req, res)
{
  res.sendfile('index.html');
});

//RSVP
app.post('/rsvp', function (req, res)
{
    console.log(req.body);
    res.send('Success');
});

app.use(express.static('./'));

app.listen(PORT, function ()
{
  console.log('app listening on port' + 8080);
});