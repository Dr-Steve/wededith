var coming = true;

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
    coming = false;
    $("#who").text("Who will not be attending?");
    $('#wizard-1').animate({
        marginLeft: '-700px'
    }, 100, function() {

    });

    $('#wizard-2').animate({
        marginLeft: '0'
    }, 100, function() {});
});

$('#wizard2Next').click(function() {
    //validate that there is something in the name field
    if($("#name").val().length < 1)
    {
        $("#nameError").removeClass("hidden");
    }
    else
    {
        if(coming === false)
        {
            submitNotComing();
            $('#wizard-2').animate({
                marginLeft: '-700px'
            }, 100, function() {

            });

            $('#wizard-5').animate({
                marginLeft: '0'
            }, 100, function() {});
        }
        else
        {
            $('#wizard-2').animate({
                marginLeft: '-700px'
            }, 100, function() {

            });

            $('#wizard-3').animate({
                marginLeft: '0'
            }, 100, function() {});
        }
    }
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
