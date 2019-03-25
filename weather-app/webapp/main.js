
$(document).ready(function () {
    const api = "http://webapi19sa-1.course.tamk.cloud/v1/weather";

    $("#title_div").html("<h1>Welcome to Weather Station!</h1>")
    console.log("doc ready")

    $("#home").click(function (e) {
        location.reload();
    });

    $("#last_values").click(function (e) {
        $("#title_div").html("<h1>Last 500 measurements</h1>")
        $("#chart_div").hide()
        printLatestData(api);
    });

    $("#temperature").click(function (e) {
        $("#title_div").html("<h1>Temperature</h1>")
        $("#data_div").html("")
        $("#chart_div").show()
        drawTemperatureData(api);
    });

    $("#humidity_out").click(function (e) {
        $("#title_div").html("<h1>Humidity out</h1>")
    });

});
