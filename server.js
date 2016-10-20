var express    = require('express');
var bodyParser = require('body-parser');
var mysql      = require('mysql');
 
var app  = express();

//Uncomment this for local testing (or define env variable PORT=8080
//var PORT = 8080;

// when on Heroku, port will be exported to an environment variable
// and available as process.env.PORT
var PORT = process.env.PORT || CONFIG.port;

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
    //Becuase we used '?' this sanitizes user input
    var cmd = "INSERT INTO wedding_rsvp.guest " +
        "(guestName, coming, overnight, comments) VALUES ( ?, ?, ?, ? );";

    connection.query(cmd,
        [rsvp.guestName,
        ( rsvp.coming ? '1' : '0' ),
        ( rsvp.overnight ? '1' : '0' ),
        rsvp.comments ],
        function(err, rows, fields)
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
