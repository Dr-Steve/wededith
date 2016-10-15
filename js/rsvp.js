
//
// Data structure
//
var rsvp =
{
  "guestName" : "",
  "comments"  : "",
  "coming"    : false,
  "overnight" : false
};

//
//Methods
//
function ajaxSuccess()
{
  console.log("SUCCESS");
}

function ajaxError()
{
   $('#wizard-1').animate({
        marginLeft: '-700px'
    }, 100, function() {

    });

   $('#wizard-2').animate({
        marginLeft: '-700px'
    }, 100, function() {

    });

   $('#wizard-3').animate({
        marginLeft: '-700px'
    }, 100, function() {

    });

   $('#wizard-4').animate({
        marginLeft: '-700px'
    }, 100, function() {

    });
   $('#wizard-5').animate({
        marginLeft: '-700px'
    }, 100, function() {

    });

    $('#wizard-6').animate({
        marginLeft: '0'
    }, 100, function() {});
}

function onSubmit()
{
  rsvp.guestName = $( "#name" ).val();
  rsvp.comments  = $( "#comments" ).val();
  rsvp.coming    = true;

  console.log(rsvp);

  console.log("firing AJAX request");
  $.ajax(
      {
        url:        "/rsvp",
        type:       "POST",
        success:     ajaxSuccess,
        error:       ajaxError,
        contentType: "application/json; charset=utf-8",
        data:        JSON.stringify(rsvp)
      }
  );
}

function submitNotComing()
{
  rsvp.guestName = $( "#name" ).val();
  rsvp.coming    = false;

  console.log(rsvp);

  console.log("firing AJAX request");
  $.ajax(
      {
        url:        "/rsvp",
        type:       "POST",
        success:     ajaxSuccess,
        error:       ajaxError,
        contentType: "application/json; charset=utf-8",
        data:        JSON.stringify(rsvp)
      }
  );
}

function stayingOvernight()
{
  rsvp.overnight = true;
}

function notStayingOvernight()
{
  rsvp.overnight = false;
}

//
// Apply actions to HTML Buttons
//
$( "#wizard3Yes"  ).click( stayingOvernight );
$( "#wizard3No"   ).click( notStayingOvernight );
$( "#wizard4Next" ).click( onSubmit );

