
//wizard animation
$('#wizard1Yes').click(function() {

    $('#wizard-1').animate({
        marginLeft: '-700px'
    }, 100, function() {
      //$('#wizard-1').css('display', "none");

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
      //$('#wizard-1').css('display', "none");

    });

    $('#wizard-3').animate({
        marginLeft: '0'
    }, 100, function() {});
});

function wizard3Next() {
 $('#wizard-3').animate({
        marginLeft: '-700px'
    }, 100, function() {
      //$('#wizard-1').css('display', "none");

    });

    $('#wizard-4').animate({
        marginLeft: '0'
    }, 100, function() {});
}
$('#wizard3Yes').click(wizard3Next);

$('#wizard4Next').click(function() {
 $('#wizard-4').animate({
        marginLeft: '-700px'
    }, 100, function() {
      //$('#wizard-1').css('display', "none");

    });

    $('#wizard-5').animate({
        marginLeft: '0'
    }, 100, function() {});
});

