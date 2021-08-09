M.AutoInit();

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        dist: -100,
        noWrap: false,
        indicators: true,
        numVisible: 5,
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, options);
});

$(document).ready(function () {
    $('input#input_text, textarea#textarea2').characterCounter();
});