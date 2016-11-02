//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//Sorry about this nasty looking bit, on a time crunch
//This applies different classes and click events based on screen size
//so that if the screen is small and you click on a menu item it closes
//the menu.
$(window).on('resize', function() {
    if($(window).width() > 768) {
        $('.menu-button').addClass('page-scrollhack');
        $('.menu-button').removeClass('page-scroll');
    }else{
        $('.menu-button').addClass('page-scroll');
        $('.menu-button').removeClass('page-scrollhack');
    }

    $('a.page-scrollhack').unbind('click');
    $('a.page-scroll').unbind('click');

    $('a.page-scroll').bind('click', function(event) {
        $('.navbar-toggle').click();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $('a.page-scrollhack').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
//Fire this on start
$(function() { $(window).resize(); });
