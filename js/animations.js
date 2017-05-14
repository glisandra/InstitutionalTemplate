var lastScrollTop = 0;
$(window).on('scroll', function () {
    st = $(this).scrollTop();
    if (st < lastScrollTop) {
        $('.menu-total').slideDown();
    }
    else {
        $('.menu-total').slideUp();
    }
    lastScrollTop = st;
});

function onScrollInit(items, trigger) {
    items.each(function () {
        var osElement = $(this),
            osAnimationClass = osElement.attr('data-os-animation'),
            osAnimationDelay = osElement.attr('data-os-animation-delay');

        osElement.css({
            '-webkit-animation-delay': osAnimationDelay,
            '-moz-animation-delay': osAnimationDelay,
            'animation-delay': osAnimationDelay
        });

        var osTrigger = (trigger) ? trigger : osElement;

        osTrigger.waypoint(function () {
            osElement.addClass('animated').toggleClass(osAnimationClass);
            this.destroy();
        }, {
                offset: '40%'
            });
    });
}

onScrollInit($('.os-animation'));