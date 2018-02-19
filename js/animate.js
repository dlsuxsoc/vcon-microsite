// animation assets for the vcon website

$(document).ready(function(){

    var stickyNavHeight = $("#sticky-nav").outerHeight();

    // about section variables
    var aboutWhatPosTop = $("#about-what-div").offset().top - stickyNavHeight - 100;
    var aboutWhoPosTop = $("#about-who-div").offset().top - stickyNavHeight - 100;
    var aboutWhyPosTop = $("#about-why-div").offset().top - stickyNavHeight - 100;

    // faqs section variables
    var faqsTitle = $("#faqs-title").offset().top - stickyNavHeight - 200;
    var faqsOne = $("#faq-one").offset().top - stickyNavHeight - 200;
    var faqsTwo = $("#faq-two").offset().top - stickyNavHeight - 200;
    var faqsThree = $("#faq-three").offset().top - stickyNavHeight - 200;
    var faqsFour = $("#faq-four").offset().top - stickyNavHeight - 200;
    var faqsFive = $("#faq-five").offset().top - stickyNavHeight - 200;

    //we are one and apollo variables
    var ctaPos = $("#call-to-action").offset().top - stickyNavHeight - 200;
    var apolloPos = $("#room-reservation").offset().top - stickyNavHeight - 200;

    $(window).scroll(function(){
        previewAbout(aboutWhatPosTop, aboutWhoPosTop, aboutWhyPosTop);
        previewFaqs(faqsTitle, faqsOne, faqsTwo, faqsThree, faqsFour, faqsFive);
        previewCTA(ctaPos);
        previewApollo(apolloPos);
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

    if(windowScroll >= faqsTitle){
        $("#faqs-title").removeClass('invisible');
        $("#faqs-title").addClass('show-visible');
    }

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

//preview function for the call to action section
function previewCTA(ctaPos){
    var windowScroll = $(this).scrollTop();

    if(windowScroll >= ctaPos){
        $("#call-to-action").removeClass('invisible');
        $("#call-to-action").addClass('show-visible');
    }
}

function previewApollo(apolloPos){
    var windowScroll = $(this).scrollTop();

    if(windowScroll >= apolloPos){
        $("#room-reservation").removeClass('invisible');
        $("#room-reservation").addClass('show-visible');
    }
}
