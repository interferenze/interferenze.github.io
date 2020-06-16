$(document).ready(function () {

    $("#africa").css("opacity", "1");
    $("#asia").css("opacity", "0");
    $("#america").css("opacity", "0");
    $("#europa").css("opacity", "0");
    $("#oceania").css("opacity", "0");
    $("#oceania").css("opacity", "0");
    $(".bottone-africa").css("color", "#F5F4F4");
    $(".bottone-africa").css("background-color", "#3C3C3B");
    $(".bottone-america").css("color", "#3C3C3B");
    $(".bottone-america").css("background-color", "#F5F4F4");
    $(".bottone-asia").css("color", "#3C3C3B");
    $(".bottone-asia").css("background-color", "#F5F4F4");
    $(".bottone-europa").css("color", "#3C3C3B");
    $(".bottone-europa").css("background-color", "#F5F4F4");
    $(".bottone-oceania").css("color", "#3C3C3B");
    $(".bottone-oceania").css("background-color", "#F5F4F4");

    $(".bottone-continenti").mouseenter(function () {
        $(this).css("color", "#F5F4F4");
        $(this).css("background-color", "#3C3C3B");
    });

    $(".bottone-america").click(function () {
        $("#africa").css("opacity", "0");
        $("#asia").css("opacity", "0");
        $("#america").css("opacity", "1");
        $("#europa").css("opacity", "0");
        $("#oceania").css("opacity", "0");
        $("#oceania").css("opacity", "0");
        $(".bottone-america").css("color", "#F5F4F4");
        $(".bottone-america").css("background-color", "#3C3C3B");
        $(".bottone-africa").css("color", "#3C3C3B");
        $(".bottone-africa").css("background-color", "#F5F4F4");
        $(".bottone-asia").css("color", "#3C3C3B");
        $(".bottone-asia").css("background-color", "#F5F4F4");
        $(".bottone-europa").css("color", "#3C3C3B");
        $(".bottone-europa").css("background-color", "#F5F4F4");
        $(".bottone-oceania").css("color", "#3C3C3B");
        $(".bottone-oceania").css("background-color", "#F5F4F4");
    });

    $(".bottone-europa").click(function () {
        $("#africa").css("opacity", "0");
        $("#asia").css("opacity", "0");
        $("#america").css("opacity", "0");
        $("#europa").css("opacity", "1");
        $("#oceania").css("opacity", "0");
        $("#oceania").css("opacity", "0");
        $(".bottone-europa").css("color", "#F5F4F4");
        $(".bottone-europa").css("background-color", "#3C3C3B");
        $(".bottone-africa").css("color", "#3C3C3B");
        $(".bottone-africa").css("background-color", "#F5F4F4");
        $(".bottone-asia").css("color", "#3C3C3B");
        $(".bottone-asia").css("background-color", "#F5F4F4");
        $(".bottone-america").css("color", "#3C3C3B");
        $(".bottone-america").css("background-color", "#F5F4F4");
        $(".bottone-oceania").css("color", "#3C3C3B");
        $(".bottone-oceania").css("background-color", "#F5F4F4");
    });

    $(".bottone-asia").click(function () {
        $("#africa").css("opacity", "0");
        $("#asia").css("opacity", "1");
        $("#america").css("opacity", "0");
        $("#europa").css("opacity", "0");
        $("#oceania").css("opacity", "0");
        $("#oceania").css("opacity", "0");
        $(".bottone-asia").css("color", "#F5F4F4");
        $(".bottone-asia").css("background-color", "#3C3C3B");
        $(".bottone-africa").css("color", "#3C3C3B");
        $(".bottone-africa").css("background-color", "#F5F4F4");
        $(".bottone-america").css("color", "#3C3C3B");
        $(".bottone-america").css("background-color", "#F5F4F4");
        $(".bottone-europa").css("color", "#3C3C3B");
        $(".bottone-europa").css("background-color", "#F5F4F4");
        $(".bottone-oceania").css("color", "#3C3C3B");
        $(".bottone-oceania").css("background-color", "#F5F4F4");
    });

    $(".bottone-oceania").click(function () {
        $("#africa").css("opacity", "0");
        $("#asia").css("opacity", "0");
        $("#america").css("opacity", "0");
        $("#europa").css("opacity", "0");
        $("#oceania").css("opacity", "0");
        $("#oceania").css("opacity", "1");
        $(".bottone-oceania").css("color", "#F5F4F4");
        $(".bottone-oceania").css("background-color", "#3C3C3B");
        $(".bottone-africa").css("color", "#3C3C3B");
        $(".bottone-africa").css("background-color", "#F5F4F4");
        $(".bottone-asia").css("color", "#3C3C3B");
        $(".bottone-asia").css("background-color", "#F5F4F4");
        $(".bottone-europa").css("color", "#3C3C3B");
        $(".bottone-europa").css("background-color", "#F5F4F4");
        $(".bottone-america").css("color", "#3C3C3B");
        $(".bottone-america").css("background-color", "#F5F4F4");
    });

    $(".bottone-africa").click(function () {
        $("#africa").css("opacity", "1");
        $("#asia").css("opacity", "0");
        $("#america").css("opacity", "0");
        $("#europa").css("opacity", "0");
        $("#oceania").css("opacity", "0");
        $("#oceania").css("opacity", "0");
        $(".bottone-africa").css("color", "#F5F4F4");
        $(".bottone-africa").css("background-color", "#3C3C3B");
        $(".bottone-america").css("color", "#3C3C3B");
        $(".bottone-america").css("background-color", "#F5F4F4");
        $(".bottone-asia").css("color", "#3C3C3B");
        $(".bottone-asia").css("background-color", "#F5F4F4");
        $(".bottone-europa").css("color", "#3C3C3B");
        $(".bottone-europa").css("background-color", "#F5F4F4");
        $(".bottone-oceania").css("color", "#3C3C3B");
        $(".bottone-oceania").css("background-color", "#F5F4F4");
    });
    
});
