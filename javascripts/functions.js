




/*
     FILE ARCHIVED ON 18:02:25 Jul 28, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:27:01 Dec 31, 2014.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
(function() {

// Placeholders
    $('input[placeholder], textarea[placeholder]').placeholder();

// Reset Options
    $('#reset').on('click', function() {
        window.location.reload();
    });

// Expand and Collapse HTML Code
    $('a.toggle').live('click', function(e) {
        $this = $(this);
        if ($this.text() === "Expand HTML") {
            $this.html('Collapse HTML');
            $('pre.ellipsis').hide();
            $('pre.html').fadeIn();
        } else {
            $this.html('Expand HTML');
            $('pre.html').hide();
            $('pre.ellipsis').fadeIn();
        }
        e.preventDefault();
    });

// Expand and Collapse Buttons
    $('button#o-toggle.open').live('click', function(e) {
        e.preventDefault();
        $('form.options').show();
        $('.three').animate({height: '100%'}, 'slow');
        $(this).text('-');
        $('button#o-toggle').attr('class', 'close');
    });
    $('button#o-toggle.close').live('click', function(e) {
        e.preventDefault();
        $('.three').animate({height: '58px'}, 'fast');
        $('form.options').hide();
        $(this).text('+');
        $('button#o-toggle').attr('class', 'open');
    });
    $('button#p-toggle.open').live('click', function(e) {
        e.preventDefault();
        $('.nine header div p').show();
        $(this).text('-');
        $('button#p-toggle').attr('class', 'close');
    });
    $('button#p-toggle.close').live('click', function(e) {
        e.preventDefault();
        $('.nine header div p').hide();
        $(this).text('+');
        $('button#p-toggle').attr('class', 'open');
    });

// IE6-7 Message
    if ($('html').hasClass('lt-ie8')) {
        var html = '<div class="container"><div class="browser-message"><h5>Please note that the Reuze framework is not optimized to work with IE version 6 or 7.</h5><p>We recommend upgrading to <a href="/web/20140728180225/http://ie.microsoft.com/">Internet Explorer 9</a>, <a href="/web/20140728180225/http://chrome.google.com">Google Chrome</a>, or <a href="/web/20140728180225/http://mozilla.org/firefox/">Firefox</a>. If you are using IE 9 already, make sure you <a href="/web/20140728180225/http://windows.microsoft.com/en-US/windows7/webpages-look-incorrect-in-Internet-Explorer">turn off "Compatibility View"</a>.</p></div></div>';
        $('body').prepend(html);
    }

})();