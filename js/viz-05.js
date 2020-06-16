$(document).ready(function () {

    $(".verde-net").mouseenter(function () {
        $(".net").css("opacity", "0.3");
        $(".verde-net").css("opacity", "1");
    });

    $(".blu-net").mouseenter(function () {
        $(".net").css("opacity", "0.3");
        $(".blu-net").css("opacity", "1");
    });

    $(".giallo-net").mouseenter(function () {
        $(".net").css("opacity", "0.3");
        $(".giallo-net").css("opacity", "1");
    });

    $(".rosa-net").mouseenter(function () {
        $(".net").css("opacity", "0.3");
        $(".rosa-net").css("opacity", "1");
    });

    $(".lilla-net").mouseenter(function () {
        $(".net").css("opacity", "0.3");
        $(".lilla-net").css("opacity", "1");
    });

    $(".net").mouseleave(function () {
        $(".net").css("opacity", "1");
    });
});
