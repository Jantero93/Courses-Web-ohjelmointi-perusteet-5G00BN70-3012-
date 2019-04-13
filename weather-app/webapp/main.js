
$(document).ready(function () {
    const api = "http://webapi19sa-1.course.tamk.cloud/v1/weather";
    //muuttuja millä "sivulla" ollaan
    let current = "home";

    $("#title_div").html("<h1>Tervetuloa sääasemalle</h1>")
    console.log(current)

    $("#interval_div").hide()
    
    //viimeisimmät boxit
    $("lastbox").show();

    $("#home").click(function (e) {
        location.reload();        
    });

    $("#last_values").click(function (e) {
        $("#title_div").html("<h1>Last 500 measurements</h1>")
        $("#chart_div").hide()
        $("#interval_div").hide()  
        $("#lastbox").hide()      
        printLatestData(api);
    });

    $("#temperature").click(function (e) {
        $("#title_div").html("<h1>Temperature</h1>")
        $("#data_div").html("")
        $("#chart_div").show()
        $("#interval_div").show()
        drawTemperatureData(api);
        $("#lastbox").hide()
       // current = "temperature";
    });

    $("#humidity_out").click(function (e) {
        $("#title_div").html("<h1>Humidity out</h1>")
        $("#data_div").html("")
        $("#chart_div").show()
        drawHumidity_out(api);
        $("#interval_div").show()
        $("#lastbox").hide
    });

    $("#light").click(function (e) {
        $("#title_div").html("<h1>Light</h1>")
        $("#data_div").html("")
        $("#chart_div").show()
        $("#lastbox").hide
        drawLight(api);
    });
    /*
    $("#24h").click(function (e) {
        $("#title_div").html("<h1>rain</h1>")
        $("#data_div").html("")
        $("#chart_div").show()
        drawLight(api);
        
    }); 
    */

    $("#selectinterval").change(function() {
        if(current == 'temperature')
        $("#temperature").trigger("click");
        console.log($("#selectinterval").val());
    });

});


