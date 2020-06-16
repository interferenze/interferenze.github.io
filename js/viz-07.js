$(document).ready(function () {

    $(".cerchi-lilla").mouseenter(function () {
        $(".cerchi").css("opacity", "0.3");
        $(".cerchi-lilla").css("opacity", "1");
    });

    $(".cerchi-verde").mouseenter(function () {
        $(".cerchi").css("opacity", "0.3");
        $(".cerchi-verde").css("opacity", "1");
    });

    $(".cerchi-giallo").mouseenter(function () {
        $(".cerchi").css("opacity", "0.3");
        $(".cerchi-giallo").css("opacity", "1");
    });

    $(".cerchi-rosso").mouseenter(function () {
        $(".cerchi").css("opacity", "0.3");
        $(".cerchi-rosso").css("opacity", "1");
    });

    $(".cerchi").mouseleave(function () {
        $(".cerchi").css("opacity", "1");
    });
});
