$(".header__search").click(function() {
    $('.header__search-input').toggle();
});
$(document).on('click', function(e) {
    if (!$(e.target).closest(".header-inner").length) {
        $('.header__search-input').hide();
    }
    e.stopPropagation();
});

$(function(){
    $('.header__slider').slick({
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
    });
});