var express    = require('express');
var bodyParser = require('body-parser');
var mysql      = require('mysql');
 
var app  = express();
var PORT = 8080;

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'app',
  password : 'b4RV;JpLqs7DSt(m'
});

app.use(bodyParser.json());

///////////////////////////////
//HELPER FUNCTIONS//
///////////////////////////////

//Store rsvp results to database
function saveRSVP(rsvp)
{
    var cmd = "INSERT INTO wedding_rsvp.guest " +
        "(guestName, coming, overnight, comments) VALUES ('" +
        rsvp.guestName               + "', " +
        (rsvp.coming ? '1' : '0')    + ", " +
        (rsvp.overnight ? '1' : '0') + ", '" +
        rsvp.comments                + "' );";

    connection.query(cmd, function(err, rows, fields)
    {
      if (err) throw err;
    });
}

///////////////////////////////
//ROUTING//
///////////////////////////////

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
    //TODO: SANITIZE THIS!!!
    try
    {
        saveRSVP(req.body);
    }
    catch(e)
    {
        //TODO: How should we handle errors?
        console.log(e);
    }
    res.send('Success');
});

app.use(express.static('./'));

app.listen(PORT, function ()
{
  console.log('app listening on port' + 8080);
});