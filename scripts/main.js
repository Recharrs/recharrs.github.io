$(window).on('load', function() {
    var $window = $(window),
        $mask = $('#masking');

    // Disable animations/transitions until the page has loaded.
    $mask.addClass('is-loading');

    $window.on('load', function() {
        $window.setTimeout(function() {
            $mask.removeClass('is-loading');
        }, 1000);
    });
});

function scroll_Top(){
    $('html, body').animate({scrollTop: 0}, 1000)
}

function scroll_to_Description(){
    $('html, body').animate({scrollTop: $('#description').offset().top - 55}, 500);
}

function scroll_to_Feature(){
    $('html, body').animate({scrollTop: $('#feature').offset().top - 55}, 500);
}

function scroll_to_Download(){
    $('html, body').animate({scrollTop: $('#Downloads').offset().top - 55}, 500);
}

function scroll_to_About(){
    $('html, body').animate({scrollTop: $('#About').offset().top - 55}, 500);
}

function scroll_to_Contact(){
    $('html, body').animate({scrollTop: $('#footer').offset().top}, 500);
}
