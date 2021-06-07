/*!
 * Start Bootstrap - SB Admin v6.0.1 (https://startbootstrap.com/templates/sb-admin)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
 */
(function($) {
    "use strict";

    // Add active state to sidbar nav links
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
        if (this.href === path) {
            $(this).addClass("active");
        }
    });

    // Toggle the side navigation
    $("#sidebarToggle").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });
    // Toggle the side navigation
    $("#sidebarToggleMobile").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });
    // Toggle the side navigation close
    $("#sidebarToggleClose").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });

})(jQuery);

jQuery("nav a").on('click', function(event) {

    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        jQuery('html, body').animate({
            scrollTop: jQuery(hash).offset().top
        }, 800, function() {

            window.location.hash = hash;
        });
    }
});
jQuery(document).ready(function() {

    jQuery("#subirTopo").hide();

    jQuery('a#subirTopo').click(function() {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 1000) {
            jQuery('#subirTopo').fadeIn();
        } else {
            jQuery('#subirTopo').fadeOut();
        }
    });
});
jQuery(function($) {
    var pop = $('.map-popup');
    pop.click(function(e) {
        e.stopPropagation();
    });

    $('a.marker').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).next('.map-popup').toggleClass('open');
        $(this).parent().siblings().children('.map-popup').removeClass('open');
    });

    $(document).click(function() {
        pop.removeClass('open');
    });

    pop.each(function() {
        var w = $(window).outerWidth(),
            edge = Math.round(($(this).offset().left) + ($(this).outerWidth()));
        if (w < edge) {
            $(this).addClass('edge');
        }
    });
});
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });
