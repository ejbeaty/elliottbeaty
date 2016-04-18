$(document).ready(function () {
    var path = window.location.pathname;
    if (path.length < 2) {
        $('.signature-toggle').hide();
    }


    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });

    // external js: masonry.pkgd.js

    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter:10
    });

});




