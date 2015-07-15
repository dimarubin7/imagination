$(document).ready(function(){
    // hide #back-top first
    $("#back-top").hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 350) {
                $('#back-top').fadeIn(500);
            } else {
                $('#back-top').fadeOut(500);
            }
        });
        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});