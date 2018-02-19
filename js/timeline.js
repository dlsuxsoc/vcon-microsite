// interaction functions for the timeline

$(document).ready(function(){

    var stickyNavHeight = $("#sticky-nav").outerHeight();

    //history section variables
    var historyPosTop = $("#history").offset().top - stickyNavHeight - 100;
    var vcon2001 = $("#vcon-2001").offset().top - stickyNavHeight - 100;
    var vcon2002 = $("#vcon-2002").offset().top - stickyNavHeight - 100;
    var vcon2003 = $("#vcon-2003").offset().top - stickyNavHeight - 100;
    var vcon2004 = $("#vcon-2004").offset().top - stickyNavHeight - 100;
    var vcon2005 = $("#vcon-2005").offset().top - stickyNavHeight - 100;
    var vcon2006 = $("#vcon-2006").offset().top - stickyNavHeight - 100;
    var vcon2007 = $("#vcon-2007").offset().top - stickyNavHeight - 100;
    var vcon2008 = $("#vcon-2008").offset().top - stickyNavHeight - 100;
    var vcon2009 = $("#vcon-2009").offset().top - stickyNavHeight - 100;
    var vcon2010 = $("#vcon-2010").offset().top - stickyNavHeight - 100;
    var vcon2011 = $("#vcon-2011").offset().top - stickyNavHeight - 100;
    var vcon2012 = $("#vcon-2012").offset().top - stickyNavHeight - 100;
    var vcon2013 = $("#vcon-2013").offset().top - stickyNavHeight - 100;
    var vcon2014 = $("#vcon-2014").offset().top - stickyNavHeight - 100;
    var vcon2015 = $("#vcon-2015").offset().top - stickyNavHeight - 100;
    var vcon2016 = $("#vcon-2016").offset().top - stickyNavHeight - 100;
    var vcon2017 = $("#vcon-2017").offset().top - stickyNavHeight - 100;

    $(window).scroll(function(){
        var windowScroll = $(this).scrollTop();

        if(windowScroll >= historyPosTop){
            $("#history").removeClass('invisible');
            $("#history").addClass('show-visible');
        }

        if(windowScroll >= vcon2001){
            $("#vcon-2001").removeClass('invisible');
            $("#vcon-2001").addClass('show-visible');
        }

        if(windowScroll >= vcon2002){
            $("#vcon-2002").removeClass('invisible');
            $("#vcon-2002").addClass('show-visible');
        }

        if(windowScroll >= vcon2003){
            $("#vcon-2003").removeClass('invisible');
            $("#vcon-2003").addClass('show-visible');
        }

        if(windowScroll >= vcon2004){
            $("#vcon-2004").removeClass('invisible');
            $("#vcon-2004").addClass('show-visible');
        }

        if(windowScroll >= vcon2005){
            $("#vcon-2005").removeClass('invisible');
            $("#vcon-2005").addClass('show-visible');
        }

        if(windowScroll >= vcon2006){
            $("#vcon-2006").removeClass('invisible');
            $("#vcon-2006").addClass('show-visible');
        }

        if(windowScroll >= vcon2007){
            $("#vcon-2007").removeClass('invisible');
            $("#vcon-2007").addClass('show-visible');
        }

        if(windowScroll >= vcon2008){
            $("#vcon-2008").removeClass('invisible');
            $("#vcon-2008").addClass('show-visible');
        }

        if(windowScroll >= vcon2009){
            $("#vcon-2009").removeClass('invisible');
            $("#vcon-2009").addClass('show-visible');
        }

        if(windowScroll >= vcon2010){
            $("#vcon-2010").removeClass('invisible');
            $("#vcon-2010").addClass('show-visible');
        }

        if(windowScroll >= vcon2011){
            $("#vcon-2011").removeClass('invisible');
            $("#vcon-2011").addClass('show-visible');
        }

        if(windowScroll >= vcon2012){
            $("#vcon-2012").removeClass('invisible');
            $("#vcon-2012").addClass('show-visible');
        }

        if(windowScroll >= vcon2013){
            $("#vcon-2013").removeClass('invisible');
            $("#vcon-2013").addClass('show-visible');
        }

        if(windowScroll >= vcon2014){
            $("#vcon-2014").removeClass('invisible');
            $("#vcon-2014").addClass('show-visible');
        }

        if(windowScroll >= vcon2015){
            $("#vcon-2015").removeClass('invisible');
            $("#vcon-2015").addClass('show-visible');
        }

        if(windowScroll >= vcon2016){
            $("#vcon-2016").removeClass('invisible');
            $("#vcon-2016").addClass('show-visible');
        }

        if(windowScroll >= vcon2017){
            $("#vcon-2017").removeClass('invisible');
            $("#vcon-2017").addClass('show-visible');
        }
    });
});
