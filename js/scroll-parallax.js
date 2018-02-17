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
});

function updateStickyNav(headerHeight){
    var windowScroll = $(this).scrollTop();
    if(windowScroll >= headerHeight)
        $('nav.sticky').addClass('sticky-show');

    else $('nav.sticky').removeClass('sticky-show');
}
