// animation assets for the vcon website

$(document).ready(function(){

    var stickyNavHeight = $("#sticky-nav").outerHeight();

    // about section variables
    var aboutWhatPosTop = $("#about-what-div").position().top - stickyNavHeight - 100;
    var aboutWhoPosTop = $("#about-who-div").position().top - stickyNavHeight - 100;
    var aboutWhyPosTop = $("#about-why-div").position().top - stickyNavHeight - 100;

    //history section variables
    var historyPosTop = $("#history").position().top - stickyNavHeight - 100;

    $(window).scroll(function(){
        previewAbout(aboutWhatPosTop, aboutWhoPosTop, aboutWhyPosTop);
        previewHistory(historyPosTop);
    });
});

function previewAbout(aboutWhatPosTop, aboutWhoPosTop, aboutWhyPosTop){
    var windowScroll = $(this).scrollTop();

    if(windowScroll >= aboutWhatPosTop){
        $("#about-what-div").removeClass('invisible');
        $("#about-what-div").addClass('show-visible');
    }

    if(windowScroll >= aboutWhoPosTop){
        $("#about-who-div").removeClass('invisible');
        $("#about-who-div").addClass('show-visible');
    }

    if(windowScroll >= aboutWhyPosTop){
        $("#about-why-div").removeClass('invisible');
        $("#about-why-div").addClass('show-visible');
    }
}

function previewHistory(historyPosTop){
    var windowScroll = $(this).scrollTop();

    if(windowScroll >= historyPosTop){
        $("#history").removeClass('invisible');
        $("#history").addClass('show-visible');
    }
}
