var express    = require('express');
var bodyParser = require('body-parser');
var mysql      = require('mysql');
 
var app  = express();

//Uncomment this for local testing (or define env variable PORT=8080
var PORT = 8080;

// when on Heroku, port will be exported to an environment variable
// and available as process.env.PORT
//var PORT = process.env.PORT || CONFIG.port;

var dbConfig = {
  host     : 'us-cdbr-iron-east-04.cleardb.net',
  user     : 'bb01b428ddb924',
  password : '00f784c7',
  database : 'heroku_d7e34d20a0b9521'
}

//var connection = mysql.createConnection(dbConfig);

app.use(bodyParser.json());

///////////////////////////////
//HELPER FUNCTIONS//
///////////////////////////////

//Store rsvp results to database
function saveRSVP(rsvp)
{
    //Becuase we used '?' this sanitizes user input
    var cmd = "INSERT INTO guest " +
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


//Handle mysql server disconnect.  Found this on stackoverflow: http://stackoverflow.com/questions/20210522/nodejs-mysql-error-connection-lost-the-server-closed-the-connection
function handleDisconnect() {
  connection = mysql.createConnection(dbConfig); // Recreate the connection, since
                                                  // the old one cannot be reused.

  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}

//handleDisconnect();
