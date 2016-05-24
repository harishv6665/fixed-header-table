$(document).ready(function () {

    $('.bz-table-body thead').clone().appendTo('.bz-table-head');

    var Twidths = [];

    $('.bz-table-body thead th').each(
        function () {
            $(this).css('width', $(this).outerWidth());
        });

    $('.bz-table-body thead th').each(
        function () {
            Twidths.push($(this).outerWidth());
        });

    //	console.log(Twidths);

    // ... and now update widths on thead
    $('.bz-table-head colgroup col').each(
        function (i, val) {
            $(this).css('width', Twidths[i]);
        });
    $('.bz-table-body colgroup col').each(
        function (i, val) {
            $(this).css('width', Twidths[i]);
        });


    $('.bz-table-head').css('table-layout', 'fixed');
    $('.bz-table-body').css('table-layout', 'fixed');

    $(".bz-table-body__wrapper").scroll(function () {
        var scrolltrack = $(".bz-table-body__wrapper").scrollLeft();
        console.log(scrolltrack);
        $(".bz-table-head").css({
            "left": -scrolltrack
        });
    });

    $('.bz-table-body thead').remove();


});





//$(document).ready(function () {
//    $('.bz-table-body thead').clone().appendTo('.bz-table-head');
//    var Twidths = [];
//    $('.bz-table-body thead th').each(
//        function () {
//            $(this).css('width', $(this).outerWidth());
//        });
//    $('.bz-table-body thead th').each(
//        function () {
//            Twidths.push($(this).outerWidth());
//        });
//$('.bz-table-head colgroup col').each(
//        function (i, val) {
//            $(this).css('width', Twidths[i]);
//        });
//    $('.bz-table-body colgroup col').each(
//        function (i, val) {
//            $(this).css('width', Twidths[i]);
//        });
//    $('.bz-table-head').css('table-layout', 'fixed');
//    $('.bz-table-body').css('table-layout', 'fixed');
//    $(".bz-table-body__wrapper").scroll(function () {
//        var scrolltrack = $(".bz-table-body__wrapper").scrollLeft();
//        console.log(scrolltrack);
//        $(".bz-table-head").css({
//            "left": -scrolltrack
//        });
//    });
//    $('.bz-table-body thead').remove();
//});
