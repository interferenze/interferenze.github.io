$(document).ready(function () {

    $(".quadrati-lilla").mouseenter(function () {
        $(".quadrati").css("opacity", "0.3");
        $(".quadrati-lilla").css("opacity", "1");
    });

    $(".quadrati-verde").mouseenter(function () {
        $(".quadrati").css("opacity", "0.3");
        $(".quadrati-verde").css("opacity", "1");
    });

    $(".quadrati-giallo").mouseenter(function () {
        $(".quadrati").css("opacity", "0.3");
        $(".quadrati-giallo").css("opacity", "1");
    });

    $(".quadrati-rosso").mouseenter(function () {
        $(".quadrati").css("opacity", "0.3");
        $(".quadrati-rosso").css("opacity", "1");
    });

    $(".quadrati").mouseleave(function () {
        $(".quadrati").css("opacity", "1");
    });
});
