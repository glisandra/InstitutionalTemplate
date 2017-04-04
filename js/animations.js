

$(document).ready(function () {

    // hide our element on page load
    $('#one').addClass('hideElement');
    $('#two').addClass('hideElement');
    $('#three').addClass('hideElement');
    $('#four').addClass('hideElement');

    $('#one').waypoint(function () {
        $('#one').addClass('zoomIn').removeClass('hideElement');
    }, { offset: '50%' });

    $('#two').waypoint(function () {
        $('#two').addClass('zoomIn').removeClass('hideElement');
    }, { offset: '50%' });

    $('#three').waypoint(function () {
        $('#three').addClass('zoomIn').removeClass('hideElement');
    }, { offset: '50%' });

    $('#four').waypoint(function () {
        $('#four').addClass('zoomIn').removeClass('hideElement');
    }, { offset: '50%' });

});