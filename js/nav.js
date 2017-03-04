$(function () {
    $('#navbar').onePageNav({
        'scrollOffset': 85,
        currentClass: 'active',
        changeHash: false,
        filter: ':not(.external)',

    });
});