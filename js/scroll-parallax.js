/*
    javacripy for parallax scrolling
*/

$(document).ready(function(){
    //important variables
    var headerHeight = $('header').outerHeight();

    // sticky nav functions
    $(window).scroll(function(){
        updateStickyNav(headerHeight);
    });

    var stickyHeight = $('#sticky-nav').outerHeight();
    $('nav ul li').click(function(e){
        targetSection = $(this).attr('href');
        $('body, html').animate({
            scrollTop: $(targetSection).offset().top - stickyHeight + 1
        }, 1000);
        e.preventDefault();
    });
});

function updateStickyNav(headerHeight){
    var windowScroll = $(this).scrollTop();
    if(windowScroll >= headerHeight)
        $('nav.sticky').addClass('sticky-show');

    else $('nav.sticky').removeClass('sticky-show');
}
