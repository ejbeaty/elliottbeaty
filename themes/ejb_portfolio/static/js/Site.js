$(document).ready(function () {
    var anchorTagInUrl = window.location.hash;

    if (anchorTagInUrl && anchorTagInUrl != '#home') {
        $(anchorTagInUrl).addClass('animated lightSpeedIn').show();
    } else {
        $('#home').addClass('animated lightSpeedIn').show();
        $('.signature-toggle').hide();
    }

    $.fn.extend({
        navigateTo: function (elementId) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

            if (elementId != window.location.hash) {
                $('.page-section').hide();
                $(elementId).addClass('animated lightSpeedIn');
                $(elementId).show();
                window.location.hash = elementId;
                if (window.location.hash == '#home') {
                    $('.signature-toggle').hide();
                } else {
                    $('.signature-toggle').show();
                }
            }
        }
    });


});




