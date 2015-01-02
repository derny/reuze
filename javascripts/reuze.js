(function() {

    updateArticleHTML();
    $('select.social-media').prop('selectedIndex', 0).prop('disabled', 'disabled').css('color', '#ddd');

//****************************************************************************************************************
// Select Changes
//****************************************************************************************************************

    $('form.options select').change(function() {
        $this = $(this);
        var sel = $this.prop("selectedIndex");
        var cat = ['', 'h5', 'h6'];
        var heading = ['h2', 'h3', 'h4', 'h5', 'h6'];
        var subHeading = ['h3', 'h4', 'h5', 'h6'];
// View
        if ($this.hasClass('view')) {
            var blocks = parseInt($('.ac:last > *').length);

            if (!sel && blocks !== 3) {
                if (blocks === 1) {
                    $('.ac').removeClass('detail').removeClass('thumb');
                    $('.ac .content').html(newExcerpt());
                    for (i = 0; i < 2; i++) {
                        $('.ac > *:last-child').clone().appendTo('.ac');
                        $('.ac > *:last-child .content').html(newExcerpt());
                    }
                    $('select.read-more').prop('disabled', false).css('color', '#666');
                    $('select.social-media').prop('selectedIndex', 0).prop('disabled', 'disabled').css('color', '#ddd');
                    $('.ac .social-media').remove();
                }
                if (blocks === 9) {
                    $('.ac').removeClass('thumb');
                    for (i = 0; i < 6; i++) {
                        $('.ac > *:last-child').remove();
                    }
                    $('.ac header').removeAttr('style');
                    $('.ac .content').each(function() {
                        $(this).html(newExcerpt());
                    });
                }
            }

            if (sel === 1 && blocks > 1) {
                $('.ac').removeClass('thumb').addClass('detail');
                for (i = 0; i < blocks - 1; i++) {
                    $('.ac > *:last-child').remove();
                }
                var html = '<p>Et denique petentium reprimique mel, no quo laudem convenire mediocritatem. Has contentiones comprehensam an, per consequat necessitatibus eu. Aliquam abhorreant philosophia ut eos. Phaedrum consequat te cum. No est inermis mentitum ponderum. Et pro aeterno eripuit, sea ad reque sonet. Aliquam docendi eum at, summo omnes ut pri. Et has audiam aliquid concludaturque.</p><img src="http://placehold.it/75x75/efefef" class="align-right" alt="sample image" property="thumbnailUrl"><p>Vel te dolor eirmod accumsan, nam rebum harum in. Ex quo delenit nominati concludaturque, veniam dictas senserit duo cu. Maiorum volumus interesset mel at, sed eu nihil laoreet. Dico laoreet ei eos. Per impedit reformidans referrentur eu, stet vide qualisque ut quo, reque facilisi dissentias per eu. Sea ei vero eripuit, his ullum accusam salutandi ex. Ad eum quod magna convenire, laudem omittantur sea at. Laudem deseruisse honestatis sea ei, sanctus molestie his cu.</p><ul><li>Quis egestas tristique odio</li><li>Est adipiscing nulla bibendum</li><li>Dolor eu feugiat rutrum</li></ul><p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes.</p><blockquote><p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes accumsan lectores legere me lius quod ii legunt saepius.</p></blockquote><p>Et pro aeterno eripuit, sea ad reque sonet. Aliquam docendi eum at, summo omnes ut pri. Et has audiam aliquid. Vel te dolor eirmod accumsan, nam rebum harum in. Ex quo delenit nominati concludaturque, veniam dictas senserit duo cu. Maiorum volumus interesset mel at, sed eu nihil laoreet.</p>';
                $('.ac .content').html(html);
                $('select.read-more').prop('selectedIndex', 0).prop('disabled', 'disabled').css('color', '#ddd');
                $('.ac footer .rm').remove();
                $('select.social-media').prop('disabled', false).css('color', '#666');
            }

            if (sel === 2 && blocks < 9) {
                $('.ac').removeClass('detail').removeClass('two-column').removeClass('three-column').addClass('thumb');
                $('.ac .subtitle').remove();
                $('.ac .content').empty();
                for (i = 0; i < 9 - blocks; i++) {
                    $('.ac > *:last-child').clone().appendTo('.ac');
                }
                $('select.title').prop('selectedIndex', 3);
                $('.ac .title').each(function() {
                    $(this).replaceWith('<h5 class="title">' + newTitle() + '</h5>');
                });
                $('select.cols').prop('disabled', 'disabled').css('color', '#ddd');
                $('select.subtitle').prop('selectedIndex', 4).prop('disabled', 'disabled').css('color', '#ddd');
                $('select.read-more').prop('disabled', false).css('color', '#666');
                $('select.social-media').prop('selectedIndex', 0).prop('disabled', 'disabled').css('color', '#ddd');
                $('.ac .social-media').remove();
            }

            if (sel < 2) {
                $('.ac header > a').each(function() {
                    $(this).replaceWith('<a href="#"><' + heading[$('select.title').prop('selectedIndex')] + ' class="title">' + newTitle() + '</' + heading[$('select.title').prop('selectedIndex')] + '></a>');
                });
                if (!$('.ac').hasClass('sidebar')) {
                    $('select.cols').prop('disabled', false).css('color', '#666');
                    if ($('select.cols').prop('selectedIndex')) {
                        $('.ac').addClass($('select.cols').val());
                    }
                }
                $('select.subtitle').prop('disabled', false).css('color', '#666');
                if ($('select.subtitle').prop('selectedIndex') < 4 && $('.ac .subtitle').length === 0) {
                    if ($('select.meta').prop('selectedIndex') === 2) {
                        $('.ac .meta').before('<' + subHeading[$('select.subtitle').prop('selectedIndex')] + ' class="subtitle" property="alternativeHeadline">Sub Title</' + subHeading[$('select.subtitle').prop('selectedIndex')] + '>');
                    } else {
                        $('.ac header > a').after('<' + subHeading[$('select.subtitle').prop('selectedIndex')] + ' class="subtitle" property="alternativeHeadline">Sub Title</' + subHeading[$('select.subtitle').prop('selectedIndex')] + '>');
                    }
                }
            }

            if ($('select.cat').prop('selectedIndex')) {
                $('.ac .cat').remove();
                $('.ac > *').each(function() {
                    $(this).prepend('<' + cat[$('select.cat').prop('selectedIndex')] + ' class="cat" property="genre">' + newcat() + '</' + cat[$('select.cat').prop('selectedIndex')] + '>');
                });
            }
            if ($('select.meta').prop('selectedIndex')) {
                if (sel === 2 && $('select.meta').prop('selectedIndex') === 3) {
                    $('select.meta').prop('selectedIndex', 2);
                    $('.ac .meta').remove();
                    $('.ac header').append(createMeta());
                } else {
                    $('.ac .meta').replaceWith(createMeta());
                }
            }
            if ($('.ac .image-feat').length) {
                adjustImageSize();
            }
            updateArticleHTML();
        }

// Columns
        if ($this.hasClass('cols')) {
            var className = $this.val();
            $this.each(function() {
                if ($this.index() > 0) {
                    $('.ac').removeClass($this.text());
                }
            });
            if (sel) {
                $('.ac').addClass(className);
            }
            if ($('select.meta').prop('selectedIndex')) {
                $('.ac .meta').replaceWith(createMeta());
            }
            if ($('.ac .image-feat').length) {
                adjustImageSize();
            }
            $('.ac header > a').each(function() {
                $(this).replaceWith('<a href="#"><' + heading[$('select.title').prop('selectedIndex')] + ' class="title">' + newTitle() + '</' + heading[$('select.title').prop('selectedIndex')] + '></a>');
            });
        }

// Category
        if ($this.hasClass('cat')) {
            $('.ac .cat').remove();
            if (sel) {
                $('.ac > *').each(function() {
                    if ($('select.image-loc').prop('selectedIndex') === 1) {
                        $(this).children('.image-feat').after('<' + cat[sel] + ' class="cat" property="genre">' + newcat() + '</' + cat[sel] + '>');
                    } else {
                        $(this).prepend('<' + cat[sel] + ' class="cat" property="genre">' + newcat() + '</' + cat[sel] + '>');
                    }
                });
            }
        }

// Title
        if ($this.hasClass('title')) {
            $('.ac header > a').each(function() {
                $(this).replaceWith('<a href="#"><' + heading[sel] + ' class="title">' + newTitle() + '</' + heading[sel] + '></a>');
            });
        }

// Subtitle
        if ($this.hasClass('subtitle')) {
            $('.ac .subtitle').remove();
            if (sel < 4) {
                if ($('select.meta').prop('selectedIndex') === 2) {
                    $('.ac .meta').before('<' + subHeading[sel] + ' class="subtitle" property="alternativeHeadline">Sub Title</' + subHeading[sel] + '>');
                } else {
                    $('.ac header > a').after('<' + subHeading[sel] + ' class="subtitle" property="alternativeHeadline">Sub Title</' + subHeading[sel] + '>');
                }
            }
        }

// Meta Data
        if ($this.hasClass('meta')) {
            $('.ac .meta').remove();
            if ($('.ac').hasClass('thumb') && $('select.meta').prop('selectedIndex') === 3) {
                $('select.meta').prop('selectedIndex', 2);
                sel = 2;
            }
            if (sel === 1) {
                $('.ac header').prepend(createMeta());
            }
            if (sel === 2) {
                $('.ac header').append(createMeta());
            }
            if (sel === 3) {
                $('.ac footer').prepend(createMeta());
            }
        }

// Featured Image Location
        if ($this.hasClass('image-loc')) {
            var wdt = $('input.width').val();
            var hgt = $('input.height').val();
            var html = '<div class="image-feat"><a href="#"><img src="http://placehold.it/' + wdt + 'x' + hgt + '/efefef" alt="sample image" property="thumbnailUrl" ></a></div>';
            $('.ac .image-feat').remove();
            $('.ac header, .ac footer').removeAttr('style');
            $('.ac').removeClass('image-none').removeClass('image-left').removeClass('image-banner');
            if (!sel) {
                $('.ac').addClass('image-left');
                $('.ac header').before(html);
            }
            if (sel === 1) {
                $('.ac').addClass('image-banner');
                $('.ac > *').prepend(html);
            }
            if (sel === 2) {
                $('.ac').addClass('image-banner');
                $('.ac header').after(html);
            }
            if (sel === 3) {
                $('.ac').removeClass('image-border-light image-border-dark').addClass('image-none');
                $('select.image-border').prop('selectedIndex', 0);
                $('select.image-border, select.image-cap, select.image-links, input.image-size').prop('disabled', 'disabled').css('color', '#ddd');
            }
            if (sel < 3) {
                $('select.image-border, select.image-cap, select.image-links, input.image-size').prop('disabled', false).css('color', '#666');
                if ($('select.image-cap').prop('selectedIndex') === 1) {
                    $('.ac .image-feat').append('<p class="caption">This is a small image caption, 25 words or less is best.</p>');
                }
                if ($('select.image-links').prop('selectedIndex') === 1) {
                    $('.ac .image-feat a').remove();
                    $('.ac .image-feat').prepend('<img src="http://placehold.it/' + wdt + 'x' + hgt + '/efefef" alt="sample image" property="thumbnailUrl">');
                }
            }
            if ($('select.meta').prop('selectedIndex')) {
                $('.ac .meta').replaceWith(createMeta());
            }
            if ($('.ac .image-feat').length) {
                adjustImageSize();
            }
        }

// Image Border        
        if ($this.hasClass('image-border')) {
            var className = $this.val();
            $this.each(function() {
                if ($this.index() > 0) {
                    $('.ac').removeClass($this.text());
                }
            });
            if (sel) {
                $('.ac').addClass(className);
            }
        }

// Image Caption
        if ($this.hasClass('image-cap')) {
            $('.ac .image-feat p.caption').remove();
            if (sel === 1) {
                $('.ac .image-feat').append('<p class="caption">This is a small image caption, 25 words or less is best.</p>');
            }
        }

// Image Links to Article
        if ($this.hasClass('image-links')) {
            var wdt = $('input.width').val();
            var hgt = $('input.height').val();
            $('.ac .image-feat img').remove();
            $('.ac .image-feat a').remove();
            if (!sel) {
                $('.ac .image-feat').prepend('<a href="#"><img src="http://placehold.it/' + wdt + 'x' + hgt + '/efefef" alt="sample image" property="thumbnailUrl"></a>');
            } else {
                $('.ac .image-feat').prepend('<img src="http://placehold.it/' + wdt + 'x' + hgt + '/efefef" alt="sample image" property="thumbnailUrl">');
            }
        }

// Read More
        if ($this.hasClass('read-more')) {
            var wdt = $('input.width').val();
            $('.ac footer .rm').remove();
            if (sel === 1) {
                $('.ac footer').append('<a class="rm" href="#">Read More</a>');
            }
            if (sel === 2) {
                $('.ac footer').append('<button class="rm" href="#">Read More</button>');
            }
            (sel) ? $('.ac .content a.ellipsis').remove() : $('.ac .content p').append('<a class="ellipsis">[...]</a>');
        }

// Social Media
        if ($this.hasClass('social-media')) {
            if ($('.ac').hasClass('sidebar')) {
                var html = '<div class="social-media"><img src="images/social-media-bar-sidebar.png" width="221" height="24" alt="Sample Social Media Links"/></div>';
            } else {
                var html = '<div class="social-media"><img src="images/social-media-bar.png" width="375" height="24" alt="Sample Social Media Links"/></div>';
            }
            $('.ac .social-media').remove();
            if (sel === 1) {
                $('.ac header').append(html);
            }
            if (sel === 2) {
                $('.ac footer').prepend(html);
            }
        }
        updateArticleHTML();
    });

//****************************************************************************************************************
// Input Changes
//****************************************************************************************************************

// Container Class Names
    $('form.options input.container-class').keyup(function() {
        var className = $('input.container-class').val();
        $('.ac > *').removeClass().removeAttr('class').addClass(className);
        updateArticleHTML();
    });

// Main Content or Sidebar
    $('form.options input[name=area]').change(function() {
        if ($("input[name=area]:checked").val() === "main-content") {
            $('.ac').removeClass('sidebar');
            if ($('select.view').prop('selectedIndex') < 2) {
                $('select.cols').prop('disabled', false).css('color', '#666');
            }
            if ($('select.social-media').prop('selectedIndex') > 0) {
                $('.ac div.social-media').replaceWith('<div class="social-media"><img src="images/social-media-bar.png" width="375" height="24" alt="Sample Social Media Links"/></div>');
            }
        } else {
            $('.ac').removeClass('two-column').removeClass('three-column').addClass('sidebar');
            $('select.cols').prop('selectedIndex', 0).prop('disabled', 'disabled').css('color', '#ddd');
            if ($('select.social-media').prop('selectedIndex') > 0) {
                $('.ac div.social-media').replaceWith('<div class="social-media"><img src="images/social-media-bar-sidebar.png" width="221" height="24" alt="Sample Social Media Links"/></div>');
            }
        }
        if ($('select.meta').prop('selectedIndex')) {
            $('.ac .meta').replaceWith(createMeta());
        }
        if ($('.ac .image-feat').length) {
            adjustImageSize();
        }
        updateArticleHTML();
    });

// Image Size
    $('form.options input.image-size').bind('click blur', function() {
        var hgt = $('input.height').val();
        var wdt = $('input.width').val();
        if (isNaN(hgt) || isNaN(wdt)) {
            return;
        }
        if (hgt < 40) {
            hgt = 40;
        }
        if (wdt < 40) {
            wdt = 40;
        }
        if (!$('select.image-loc').prop('selectedIndex')) {
            if (!$('.ac').hasClass('two-column') && !$('.ac').hasClass('three-column') && !$('.ac').hasClass('thumb') && !$('.ac').hasClass('sidebar')) {
                if (wdt > 300) {
                    wdt = 300;
                }
                if (hgt > 300) {
                    hgt = 300;
                }
            }
            if ($('.ac').hasClass('two-column') && !$('.ac').hasClass('thumb') && !$('.ac').hasClass('sidebar')) {
                if (wdt > 150) {
                    wdt = 150;
                }
                if (hgt > 150) {
                    hgt = 150;
                }
            }
            if (($('.ac').hasClass('three-column') && !$('.ac').hasClass('thumb') && !$('.ac').hasClass('thumb')) || $('.ac').hasClass('sidebar')) {
                if (wdt > 75) {
                    wdt = 75;
                }
                if (hgt > 75) {
                    hgt = 75;
                }
            }
            if ($('.ac').hasClass('thumb') && !$('.ac').hasClass('sidebar')) {
                if (wdt > 100) {
                    wdt = 100;
                }
                if (hgt > 100) {
                    hgt = 100;
                }
            }
            $('.ac footer').attr('style', 'margin-left:' + (parseInt(wdt) + 15) + 'px;');
            if ($('.ac').hasClass('thumb')) {
                $('.ac header').attr('style', 'margin-left:' + (parseInt(wdt) + 15) + 'px;');
            }
        }
        if ($('select.image-loc').prop('selectedIndex')) {
            if (!$('.ac').hasClass('thumb') && !$('.ac').hasClass('sidebar')) {
                if (wdt > 960) {
                    wdt = 960;
                }
                if (hgt > 300) {
                    hgt = 300;
                }
            }
            if ($('.ac').hasClass('thumb') && !$('.ac').hasClass('sidebar')) {
                if (wdt > 300) {
                    wdt = 300;
                }
                if (hgt > 150) {
                    hgt = 150;
                }
            }
            if ($('.ac').hasClass('sidebar')) {
                if (wdt > 225) {
                    wdt = 225;
                }
                if (hgt > 150) {
                    hgt = 150;
                }
            }
        }
        $('input.width').val(wdt);
        $('input.height').val(hgt);
        $('.ac .image-feat').attr('style', 'width:' + wdt + 'px;');
        $('.ac .image-feat img').attr('src', 'http://placehold.it/' + wdt + 'x' + hgt + '/efefef');
        updateArticleHTML();
    });

//****************************************************************************************************************
// HTML Update Function
//****************************************************************************************************************

    function updateArticleHTML() {
        var cd = $('.ac:last').html();
        $('div.code h5.open').text('<div class="' + $('.ac:last').attr('class') + '">');
        cd = cd.replace(/\s\s/g, '');
        cd = cd.replace(/<p> /g, '<p>');
        cd = cd.replace(/ <\/p>/g, '</p>');
        cd = cd.replace(/<div class="image-feat"/g, '\n<div class="image-feat"');
        cd = cd.replace(/<a/g, '\n<a');
        cd = cd.replace(/<p/g, '\n<p');
        cd = cd.replace(/<h3 class="sub/g, '\n<h3 class="sub');
        cd = cd.replace(/<h4 class="sub/g, '\n<h4 class="sub');
        cd = cd.replace(/<h5 class="sub/g, '\n<h5 class="sub');
        cd = cd.replace(/<h6 class="sub/g, '\n<h6 class="sub');
        cd = cd.replace(/<t/g, '\n<t');
        cd = cd.replace(/<div/g, '\n<div');
        cd = cd.replace(/<img/g, '\n<img');
        cd = cd.replace(/<block/g, '\n<block');
        cd = cd.replace(/<span/g, '\n<span');
        cd = cd.replace(/<ul/g, '\n<ul');
        cd = cd.replace(/<li/g, '\n<li');
        cd = cd.replace(/<article/g, '<!-- Article Block -->\n\n<article');
        cd = cd.replace(/<button/g, '\n<button');
        cd = cd.replace(/<header>/g, '\n\n<header>');
        cd = cd.replace(/<footer/g, '\n\n<footer');
        cd = cd.replace(/<\/ul>/g, '\n</ul>');
        cd = cd.replace(/<\/div>/g, '\n</div>');
        cd = cd.replace(/<\/blockquote>/g, '\n</blockquote>');
        cd = cd.replace(/<\/header>/g, '\n</header>\n');
        cd = cd.replace(/<\/article>/g, '\n</article>\n');
        cd = cd.replace(/<\/footer>/g, '\n</footer>\n');
        cd = cd.replace(/<a href=\"#\">\n</g, '<a href="#"><');
        cd = cd.replace(/on">\n<a href=\"#\">/g, 'on"><a href="#">');
        cd = cd.replace(/By: \n<a href=\"#\">/g, 'By: <a href="#">');
        cd = cd.replace(/ds">\n<a href=\"#\">/g, 'ds"><a href="#">');
        cd = cd.replace(/</g, '&lt;');
        cd = cd.replace(/>/g, '&gt;');
        $('pre.html').html(cd);
    }

//****************************************************************************************************************
// Create Meta Function
//****************************************************************************************************************

    function createMeta() {
        if ($('.ac').hasClass('thumb')) {
            if (!$('select.image-loc').prop('selectedIndex')) {
                var meta = '<ul class="meta"><li property="datePublished">Dec 13th, 2012</li></ul>';
            } else {
                var meta = '<ul class="meta"><li property="datePublished">December 13th, 2012</li></ul>';
            }
        }

        if ((($('.ac').hasClass('three-column') && !$('.ac').hasClass('detail')) || $('.ac').hasClass('sidebar')) && !$('.ac').hasClass('thumb')) {
            if (!$('select.image-loc').prop('selectedIndex') && $('select.meta').prop('selectedIndex') < 3) {
                var meta = '<ul class="meta"><li property="datePublished">Dec 13th, 2012</li></ul>';
            } else {
                var meta = '<ul class="meta"><li property="datePublished">Dec 13th, 2012</li><li property="userInteraction"><a href="#">0 Comments</a></li></ul>';
            }
        }

        if ($('.ac').hasClass('two-column') && !$('.ac').hasClass('detail')) {
            if (!$('select.image-loc').prop('selectedIndex')) {
                var meta = '<ul class="meta"><li property="datePublished">Dec 13th, 2012</li><li property="userInteraction"><a href="#">0 Comments</a></li></ul>';
            } else {
                var meta = '<ul class="meta"><li property="datePublished">Dec 13th, 2012</li><li property="userInteraction"><a href="#">0 Comments</a></li><li property="author">By: <a href="#">J.Smith</a></li></ul>';
            }
        }
        if (!meta) {
            var meta = '<ul class="meta"><li property="datePublished">December 13th, 2012</li><li property="userInteraction"><a href="#">0 Comments</a></li><li property="author">By: <a href="#">J.Smith</a></li><li property="keywords"><a href="#">Fiction</a></li></ul>';
        }
        return meta;
    }

//****************************************************************************************************************
// Adjust Image Function
//****************************************************************************************************************

    function adjustImageSize() {
        var wdt, hgt, wmax, hmax;
        if (!$('select.image-loc').prop('selectedIndex')) {
            if (!$('.ac').hasClass('two-column') && !$('.ac').hasClass('three-column') && !$('.ac').hasClass('thumb') && !$('.ac').hasClass('sidebar')) {
                wdt = 100, wmax = 300;
            }
            if (!$('.ac').hasClass('two-column') && !$('.ac').hasClass('three-column') && !$('.ac').hasClass('sidebar') && $('.ac').hasClass('detail')) {
                wdt = 125, wmax = 300;
            }
            if ($('.ac').hasClass('two-column') && !$('.ac').hasClass('thumb') && !$('.ac').hasClass('sidebar')) {
                wdt = 100, wmax = 150;
            }
            if (($('.ac').hasClass('three-column') && !$('.ac').hasClass('thumb') && !$('.ac').hasClass('sidebar')) || $('.ac').hasClass('sidebar')) {
                wdt = 75, wmax = 75;
            }
            if ($('.ac').hasClass('thumb') && !$('.ac').hasClass('sidebar')) {
                wdt = 75, wmax = 100;
            }
            hgt = wdt, hmax = wmax;
            if ($('.ac').hasClass('thumb')) {
                $('.ac header').attr('style', 'margin-left:' + (parseInt(wdt) + 15) + 'px;');
            }
            $('.ac footer').attr('style', 'margin-left:' + (parseInt(wdt) + 15) + 'px;');
        }
        if ($('select.image-loc').prop('selectedIndex')) {
            if (!$('.ac').hasClass('thumb') && !$('.ac').hasClass('sidebar')) {
                if ((!$('.ac').hasClass('two-column') && !$('.ac').hasClass('three-column')) || $('.ac').hasClass('detail')) {
                    wdt = 825, hgt = 175;
                }
                if ($('.ac').hasClass('two-column') && !$('.ac').hasClass('detail')) {
                    wdt = 400, hgt = 125;
                }
                if ($('.ac').hasClass('three-column') && !$('.ac').hasClass('detail')) {
                    wdt = 250, hgt = 100;
                }
                wmax = 960, hmax = 300;
            }
            if ($('.ac').hasClass('thumb') && !$('.ac').hasClass('sidebar')) {
                wdt = 225, wmax = 300, hgt = 100, hmax = 150;
            }
            if ($('.ac').hasClass('sidebar')) {
                wdt = 250, wmax = 250, hgt = 100, hmax = 150;
            }
        }
        $('input.width').val(wdt);
        $('input.height').val(hgt);
        $('label.wmax').html('Max: ' + wmax);
        $('label.hmax').html('Max: ' + hmax);
        $('.ac .image-feat').attr('style', 'width:' + wdt + 'px;');
        $('.ac .image-feat img').attr('src', 'http://placehold.it/' + wdt + 'x' + hgt + '/efefef');
    }

//****************************************************************************************************************
// New Excerpt Function
//****************************************************************************************************************

    function newExcerpt() {
        var e = new Array();
        e[0] = '<p>Lorem ipsum dolor sit amet, ut stet munere mnesarchum eos, his affert veritus adversarium eu, pri rebum sententiae ea. Rebum adversarium eam no, cu sale veniam fuisset per. Paulo maiorum nostrum eu per, recusabo suavitate definiebas et vix, ei veri discere qui. Sit oratio mentitum necessitatibus id, sit an fugit honestatis, qui saperet oporteat vituperatoribus.';
        e[1] = '<p>An vero displicuit ea, quae tributa est animi virtutibus tanta praestantia? Quae hic rei publicae vulnera inponebat, eadem ille sanabat. Quae duo sunt, unum facit. Videmusne ut pueri ne verberibus quidem a contemplandis rebus perquirendisque deterreantur? Nummus in Croesi divitiis obscuratur, pars est tamen divitiarum. At iam decimum annum in spelunca iacet.';
        e[2] = '<p>Sedulo, inquam, faciam. Ubi ut eam caperet aut quando? Estne, quaeso, inquam, sitienti in bibendo voluptas? Sint modo partes vitae beatae. Qui non moveatur et offensione turpitudinis et comprobatione honestatis? Sed hoc sane concedamus. Nam quibus rebus efficiuntur voluptates, eae non sunt in potestate sapientis. Inde sermone vario sex illa a Dipylo stadia confecimus.';
        e[3] = '<p>Omittam postulant deseruisse et vix, alienum appareat has id, qui in doctus albucius. Ubique facilisis id mei. Mel viderer blandit pericula no, ubique possit mea eu. Est dicant nonumes at, mei rebum blandit eloquentiam et. Omnes luptatum efficiantur eum an. Sit eligendi recusabo volutpat at. Te usu agam partem, ex eam illum referrentur neglegentur.';
        e[4] = '<p>Quamquam tu hanc copiosiorem etiam soles dicere. Quae cum essent dicta, finem fecimus et ambulandi et disputandi. Qua ex cognitione facilior facta est investigatio rerum occultissimarum. Nunc de hominis summo bono quaeritur; Quae si potest singula consolando levare, universa quo modo sustinebit? Idemque diviserunt naturam hominis in animum et corpus.';
        e[5] = '<p>Apud ceteros autem philosophos, qui quaesivit aliquid, tacet; Quamvis enim depravatae non sint, pravae tamen esse possunt. Quae similitudo in genere etiam humano apparet. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Ergo hoc quidem apparet, nos ad agendum esse natos. Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam.';
        e[6] = '<p>Ergo hoc quidem apparet, nos ad agendum esse natos. Ergo hoc quidem apparet, nos ad agendum esse natos. Non est igitur summum malum dolor. At ille non pertimuit saneque fidenter: Istis quidem ipsis verbis, inquit; Est enim effectrix multarum et magnarum voluptatum. Respondent extrema primis, media utrisque, omnia omnibus. Si enim ita est, vide ne facinus facias.';
        e[7] = '<p>Tum ille timide vel potius verecunde: Facio, inquit. Duo Reges: constructio interrete. Non enim ipsa genuit hominem, sed accepit a natura inchoatum. Itaque nostrum est-quod nostrum dico, artis est-ad ea principia, quae accepimus. Cum audissem Antiochum, Brute, ut solebam, cum M. Consequens enim est et post oritur, ut dixi. Solum praeterea formosum, solum liberum.';
        e[8] = '<p>Si verbum sequimur, primum longius verbum praepositum quam bonum. Respondent extrema primis, media utrisque, omnia omnibus. Summus dolor plures dies manere non potest? Atque ab his initiis profecti omnium virtutum et originem et progressionem persecuti sunt. Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse; Suo genere perveniant ad extremum.';
        e[9] = '<p>Eu albucius fabellas vel, sit nusquam nostrum philosophia ad. Cum id facilis noluisse tincidunt, et eum congue ubique. Petentium salutatus ad est. Ea vim commodo gloriatur moderatius, mel ad assum recusabo posidonium, vix iudico utamur lucilius et. Commune dissentias instructior qui id. Quo epicurei voluptatum dissentias ut, ut elitr ludus mandamus mel.';
        e[10] = '<p>Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant. Aliena dixit in physicis nec ea ipsa, quae tibi probarentur; Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit. Si qua in iis corrigere voluit, deteriora fecit. Naturales divitias dixit parabiles esse, quod parvo esset natura contenta. Cur id non ita fit?';
        e[11] = '<p>Hoc mihi cum tuo fratre convenit. Duo Reges: constructio interrete. Mihi, inquam, qui te id ipsum rogavi? Ea possunt paria non esse. Itaque in rebus minime obscuris non multus est apud eos disserendi labor. Dat enim intervalla et relaxat. Quid enim tanto opus est instrumento in optimis artibus comparandis? Quam nemo umquam voluptatem appellavit, appellat.';
        e[12] = '<p>Negat enim summo bono afferre incrementum diem. Mihi quidem Antiochum, quem audis, satis belle videris attendere. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. In qua quid est boni praeter summam voluptatem, et eam sempiternam? Scio enim esse quosdam, qui quavis lingua philosophari possint; Negat esse eam, inquit, propter se expetendam.';
        e[13] = '<p>Est enim effectrix multarum et magnarum voluptatum. Ex quo illud efficitur, qui bene cenent omnis libenter cenare, qui libenter, non continuo bene. Qui potest igitur habitare in beata vita summi mali metus? Et harum quidem rerum facilis est et expedita distinctio. Duo Reges: constructio interrete. Quid turpius quam sapientis vitam ex insipientium sermone pendere?';
        e[14] = '<p>Duo Reges: constructio interrete. Quicquid porro animo cernimus, id omne oritur a sensibus; Inde igitur, inquit, ordiendum est. Quae in controversiam veniunt, de iis, si placet, disseramus. Qua tu etiam inprudens utebare non numquam. Consequens enim est et post oritur, ut dixi. Eadem fortitudinis ratio reperietur. Ne amores quidem sanctos a sapiente alienos esse.';
        e[15] = '<p>Suo genere perveniant ad extremum; Sed hoc sane concedamus. Cur igitur, inquam, res tam dissimiles eodem nomine appellas? Id mihi magnum videtur. Et quidem saepe quaerimus verbum Latinum par Graeco et quod idem valeat; Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse; Dolere malum est: in crucem qui agitur, beatus esse non potest. Esse enim, nisi eris.';
        var rand = Math.floor(Math.random() * 16);
        if (!$('select.read-more').prop('selectedIndex')) {
            return e[rand] + ' <a class="ellipsis">[...]</a></p>';
        } else {
            return e[rand] + '</p>';
        }
    }

//****************************************************************************************************************
// New Title Function
//****************************************************************************************************************

    function newTitle() {
        var t = new Array();
        if (($('.ac').hasClass('thumb') && $('select.title').prop('selectedIndex') > 2) || (!$('.ac').hasClass('thumb') && !$('.ac').hasClass('two-column') && !$('.ac').hasClass('three-column')) || $('.ac').hasClass('detail')) {
            t[0] = 'Lorem ipsum dolor sit amet ut stet munere mnesarchum';
            t[1] = 'Contemnit enim disserendi elegantiam, confuse';
            t[2] = 'Perpetua percipitur at has nec diceret inciderint';
            t[3] = 'Omittam postulant deseruisse et vix, alienum';
            t[4] = 'Sale audire lobortis id eos, quas partiendo qui id';
            t[5] = 'Dico laoreet ei eos, per impedit reformidans beatus';
            t[6] = 'Typi non habent claritatem insitam est usus';
            t[7] = 'Facilisi senserit ius at eum no graeci recusabo';
            t[8] = 'Ferri porro erroribus eum ne duo ut doming vidissee';
            t[9] = 'Eu albucius fabellas vel, sit nusquam nostrum quidem';
            t[10] = 'Eaedem enim utilitates poterunt eas labefactare atque';
            t[11] = 'Quia si mala sunt is, qui erit in iis beatus non';
            t[12] = 'Negat enim summo bono afferre dicturam diem';
            t[13] = 'Hoc ne statuam quidem dicturam pater aiebat';
            t[14] = 'Quid est igitur, inquit, quod requiras erit?';
            t[15] = 'Negat enim summo bono afferre incrementum diem';
        } else {
            t[0] = 'Lorem Ipsum Dolor';
            t[1] = 'Mauris Neque Metus';
            t[2] = 'Fames Ac Turpis Egestas';
            t[3] = 'Praesent Sit Amet';
            t[4] = 'Nullam Enim Leo';
            t[5] = 'Cum Sociis Natoque';
            t[6] = 'Posuere Felis Nec Tortor';
            t[7] = 'Ultricies Sit Amet';
            t[8] = 'Ferri porro erroribuse';
            t[9] = 'Apparet statim quae sint';
            t[10] = 'Eaedem enim utilitates';
            t[11] = 'Neque At Volutpat Rutrum';
            t[12] = 'Negat enim summo bono';
            t[13] = 'Hoc ne statuam quidem';
            t[14] = 'Fames Ac Turpis Egestas';
            t[15] = 'Negat enim summo bono';
        }
        var rand = Math.floor(Math.random() * 16);
        return t[rand];
    }

//****************************************************************************************************************
// New Category Function
//****************************************************************************************************************

    function newcat() {
        var c = new Array();
        c[0] = 'The Arts';
        c[1] = 'Business';
        c[2] = 'Education';
        c[3] = 'Environment';
        c[4] = 'Politics';
        c[5] = 'Industry';
        c[6] = 'Lifestyle';
        c[7] = 'Sports';
        c[8] = 'Technology';
        c[9] = 'Automotve';
        c[10] = 'Computers';
        c[11] = 'Science';
        c[12] = 'Health';
        c[13] = 'Home & Family';
        c[14] = 'Media';
        c[15] = 'Opinion';
        var rand = Math.floor(Math.random() * 16);
        return c[rand];
    }

})();