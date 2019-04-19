
$(document).ready(function () {
    const api = "http://webapi19sa-1.course.tamk.cloud/v1/weather";
    //muuttuja millä "sivulla" ollaan
    let current = "home";
    //muuttuja interval valikon arvoille
    
    

    $("#title_div").html("<h1>Tervetuloa sääasemalle</h1>")
   // console.log(current)
    console.log($("#selectinterval"));

    $("#interval_div").hide()

    
    //viimeisimmät boxit
    $("lastbox").show();

    $("#home").click(function (e) {
        location.reload();        
    });

    $("#last_values").click(function (e) {
        current = "last_values";
        $("#title_div").html("<h1>Last 500 measurements</h1>")
        $("#chart_div").hide()
        $("#interval_div").hide()  
        $("#lastbox").hide()      
        printLatestData(api);
        
    });

    $("#temperature").click(function () {
        current = "temperature";

        $("#interval_div").show()
        $("#title_div").html("<h1>Temperature</h1>")
        $("#data_div").show()
        $("#chart_div").show()        
        drawTemperatureData(api);
        
       
    });

    $("#humidity_out").click(function (e) {
        current = "humidity_out";
        
        $("#interval_div").show()
        $("#title_div").html("<h1>Humidity out</h1>")
        $("#data_div").show()
        $("#chart_div").show()          
        drawHumidity_out(api);
        
    });

    $("#light").click(function (e) {
        current = "light";

        $("#interval_div").show()
        $("#title_div").html("<h1>Light</h1>")
        $("#data_div").show()
        $("#chart_div").show()           
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

    // interval = $("#selectinterval").val();

    $("#selectinterval").change(function() {
        
        if(current == 'temperature') {
            $("#temperature").trigger("click");
        }

        if(current == 'light') {
            $("#light").trigger("click");
        }

        if(current == 'humidity_out') {
            $("#humidity_out").trigger("click");
        }
        
    });

   

   

});


