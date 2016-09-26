
//wizard animation
$('#wizard1Yes').click(function() {

    $('#wizard-1').animate({
        marginLeft: '-700px'
    }, 100, function() {

    });

    $('#wizard-2').animate({
        marginLeft: '0'
    }, 100, function() {});
});

$('#wizard1No').click(function() {

    $('#wizard-1').animate({
        marginLeft: '-700px'
    }, 100, function() {
      $('.rsvp-section').css('background', "url(img/sadseal.jpg) no-repeat center center fixed");
    });
});

$('#wizard2Next').click(function() {
 $('#wizard-2').animate({
        marginLeft: '-700px'
    }, 100, function() {

    });

    $('#wizard-3').animate({
        marginLeft: '0'
    }, 100, function() {});
});

$('#wizard3Yes').click(function()
{
     $('#wizard-3').animate({
        marginLeft: '-700px'
    }, 100, function() {

    });

    $('#wizard-4').animate({
        marginLeft: '0'
    }, 100, function() {});
});

$('#wizard3No').click(function()
{
     $('#wizard-3').animate({
        marginLeft: '-700px'
    }, 100, function() {

    });

    $('#wizard-4').animate({
        marginLeft: '0'
    }, 100, function() {});
});

$('#wizard4Next').click(function() {
 $('#wizard-4').animate({
        marginLeft: '-700px'
    }, 100, function() {

    });

    $('#wizard-5').animate({
        marginLeft: '0'
    }, 100, function() {});
});

