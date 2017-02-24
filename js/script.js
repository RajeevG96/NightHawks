$(document).ready(function () {

var elem   = $('#bs-example-navbar-collapse-1');  
    
var bottom = $(elem).position().top+$(elem).outerHeight(true)

    $(window).scroll(function () {
        if ($(this).scrollTop() > bottom) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });

});