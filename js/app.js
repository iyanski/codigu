(function($) {

    /*
     * Loading State */
    setTimeout(function() {
        $("body").addClass("cd-loading")
    }, 200), setTimeout(function() {
        $("body").addClass("cd-loaded")
    }, 2200), setTimeout(function() {
        $("body").addClass("cd-initialized")
    }, 3600)

    /*
     * Add Smooth Scrolling Transition */
    $('a.target[href^="#"]').click(function(event) {

        var id = $(this).attr("href"),
            target = $(id).offset().top;

        $('html, body').animate({ scrollTop: target }, 500);

        event.preventDefault();
    });


    /*
     * Offcanvas Menu 
     * Replaced Bootstrap's native collapsable menu */
    $('[data-toggle="offcanvas"]').on('click', function(event) {
        var self = $(this),
            target = self.data('target'),
            body = document.body;

        $(body).toggleClass('menu-open');
        $(target).toggleClass('offcanvas-open');

        return false;
    });

    /*
     * Offcanvas Menu 
     * Replaced Bootstrap's native collapsable menu */

    codeTheory();

    document.body.onkeyup = function(e) {
        if (e.keyCode == 32) {
            codeTheory();
        }
    }

    // Touch Device Detection
    var isTouchDevice = 'ontouchstart' in document.documentElement;
    if (isTouchDevice) {
        $('.cd-hero-desc').css('display', 'none');
        $('.cd-refresh-button').css('display', 'block');
    }
    if (isTouchDevice) {
        $('.cd-refresh-button').click(codeTheory);
    }



    function codeTheory() {

        var links = [{
            'text': 'Everything is awesome. You are awesome.'
        }, {
            'text': 'Make things happen.'
        }, {
            'text': 'Dont hate monday. Make monday hate you.'
        }, {
            'text': 'Just do it.'
        }, {
            'text': 'Hey! You got this.'
        }, {
            'text': 'Just kick monday in the face.'
        }, {
            'text': 'Today, be EPIC.'
        }, {
            'text': 'Be better than you were yesterday.'
        }, {
            'text': 'You are a superfly success machine.'
        }];

        var randomlink = Math.floor(Math.random() * (links.length));

        function printlink() {
            var linkElem = document.getElementById('cd-hero-title');
            linkElem.innerHTML = links[randomlink].text;
        };

        printlink();
    }

})(jQuery);
