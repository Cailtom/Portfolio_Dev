jQuery(function () {
    // ScrollSuave
    $('.scrollSuave a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset
        }, 1000);
    });

    $('.btn-top').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
});