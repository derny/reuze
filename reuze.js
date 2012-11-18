$(document).ready(function() {

// ie8 helpers
    if ($('html').hasClass('lt-ie9') || $('html').hasClass('ie8')) {
        $('.ac.two-column > article:odd, .ac.two-column > div:odd').css('border', '0');
        $('.ac > article:last-child, .ac > div:last-child').css({'border-bottom': 'none', 'padding-bottom': '0'});
    }

});
