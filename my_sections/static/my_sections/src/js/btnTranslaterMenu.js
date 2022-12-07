jQuery(function () {
    $('#google_translate_element').on("click", function () {
        $("iframe").contents().find(".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *").css('color', '#333');
    })
})