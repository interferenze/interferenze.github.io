$(document).ready(function () {

    $(".linea-lilla").mouseenter(function () {
        $(".linea").css("opacity", "0.3");
        $(".linea-lilla").css("opacity", "1");
    });

    $(".linea-verde").mouseenter(function () {
        $(".linea").css("opacity", "0.3");
        $(".linea-verde").css("opacity", "1");
    });

    $(".linea-giallo").mouseenter(function () {
        $(".linea").css("opacity", "0.3");
        $(".linea-giallo").css("opacity", "1");
    });

    $(".linea-rosso").mouseenter(function () {
        $(".linea").css("opacity", "0.3");
        $(".linea-rosso").css("opacity", "1");
    });

    $(".linea").mouseleave(function () {
        $(".linea").css("opacity", "1");
    });
});
