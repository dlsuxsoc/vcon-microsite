// animation assets for the vcon website

$(document).ready(function(){

    var stickyNavHeight = $("#sticky-nav").outerHeight();

    // about section variables
    var aboutWhatPosTop = $("#about-what-div").position().top - stickyNavHeight - 100;
    var aboutWhoPosTop = $("#about-who-div").position().top - stickyNavHeight - 100;
    var aboutWhyPosTop = $("#about-why-div").position().top - stickyNavHeight - 100;

    // faqs section variables
    var faqsTitle = $("#faqs-title").position().top - stickyNavHeight - 200;
    var faqsOne = $("#faq-one").position().top - stickyNavHeight - 200;
    var faqsTwo = $("#faq-two").position().top - stickyNavHeight - 200;
    var faqsThree = $("#faq-three").position().top - stickyNavHeight - 200;
    var faqsFour = $("#faq-four").position().top - stickyNavHeight - 200;
    var faqsFive = $("#faq-five").position().top - stickyNavHeight - 200;

    $(window).scroll(function(){
        previewAbout(aboutWhatPosTop, aboutWhoPosTop, aboutWhyPosTop);
        previewFaqs(faqsTitle, faqsOne, faqsTwo, faqsThree, faqsFour, faqsFive);
    });
});

// preview function for the about section
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

// preview function for the faqs section
function previewFaqs(faqsTitle, faqsOne, faqsTwo, faqsThree, faqsFour, faqsFive){
    var windowScroll = $(this).scrollTop();

    if(windowScroll >= faqsOne){
        $("#faq-one").removeClass('invisible');
        $("#faq-one").addClass('show-visible');
    }

    if(windowScroll >= faqsTwo){
        $("#faq-two").removeClass('invisible');
        $("#faq-two").addClass('show-visible');
    }

    if(windowScroll >= faqsThree){
        $("#faq-three").removeClass('invisible');
        $("#faq-three").addClass('show-visible');
    }

    if(windowScroll >= faqsFour){
        $("#faq-four").removeClass('invisible');
        $("#faq-four").addClass('show-visible');
    }

    if(windowScroll >= faqsFive){
        $("#faq-five").removeClass('invisible');
        $("#faq-five").addClass('show-visible');
    }
}
