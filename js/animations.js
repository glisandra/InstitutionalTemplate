// $(document).ready(function () {

//     // hide our element on page load
//     $('#one ul').addClass('hideElement');
//     $('#two').addClass('hideElement');
//     $('#three').addClass('hideElement');
//     $('#four').addClass('hideElement');

//     $('#itemOne').waypoint(function () {
//         $('#one ul').removeClass('hideElement');
//         $('#itemOne').addClass('slideInUp').removeClass('hideElement');
//         $('#itemTwo').addClass('slideInUp').removeClass('hideElement');
//         $('#itemThree').addClass('slideInUp').removeClass('hideElement');
//     }, { offset: '90%' });

//     $('#two').waypoint(function () {
//         $('#two').addClass('zoomIn').removeClass('hideElement');
//     }, { offset: '50%' });

//     $('#three').waypoint(function () {
//         $('#three').addClass('zoomIn').removeClass('hideElement');
//     }, { offset: '50%' });

//     $('#four').waypoint(function () {
//         $('#four').addClass('zoomIn').removeClass('hideElement');
//     }, { offset: '50%' });

// });

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
        }, {
                triggerOnce: true,
                offset: '90%'
            });
    });
}

onScrollInit($('.os-animation'));