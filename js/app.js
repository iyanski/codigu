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
    document.addEventListener("touchstart", function(){}, true);
    var isTouchDevice   = 'ontouchstart' in document.documentElement;
    var refreshButton   = $('.cd-refresh-button');

    if (isTouchDevice) {
        var el      =   $('.cd-hero-desc').find('.cd-detect-device');
            data    =   el.data('refresh');

        el.text(data);
        refreshButton.css('display', 'block');
    }

    if (isTouchDevice) {
        refreshButton.click(codeTheory);
    }

    function codeTheory() {

        var code = [{
            "text": "Building creative projects."
        }, {
            "text": "Sketch and Photoshop."
        }, {
            "text": "Awesome and driven individuals."
        }, {
            "text": "Git and Github FTW"
        }, {
            "text": "Work and Play Environment."
        }, {
            "text": "Let's kick monday in the face."
        }, {
            "text": "Keeping it simple and clean."
        }, {
            "text": "Creative minds."
        }, {
            "text": "Coffee and Pizza."
        }, {
            "text": "Building what's next."
        }];

        var randomcode = Math.floor(Math.random() * (code.length));

        function printCode() {
            var el = $('.cd-randomcode');
            el.html(code[randomcode].text)
        };

        printCode();
    }

})(jQuery);
